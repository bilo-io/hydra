import { useEffect, useRef, type CSSProperties } from 'react';
import { cn } from '../lib/cn';

export type PointerTrailVariant = 'trail' | 'fluid' | 'aurora' | 'ring';
export type PointerTrailTone = 'foreground' | 'gradient';

export interface PointerTrailProps {
  /**
   * Visual cursor style:
   * - `'trail'` (default) — theme-aware dot (`--foreground` text colour) with a chain of trailing dots.
   * - `'fluid'` — animated primary gradient stream whose droplets morph and swirl like fluid.
   * - `'aurora'` — blue → violet → pink rotating aurora orb with trailing sparkles.
   * - `'ring'` — precision inner dot with a lagging outer ring that expands on press.
   */
  variant?: PointerTrailVariant;
  /**
   * Colour treatment:
   * - `'foreground'` — follows the active theme's text colour (`--foreground`). Default for `'trail'` and `'ring'`.
   * - `'gradient'` — animated primary brand gradient. Default for `'fluid'` and `'aurora'`.
   */
  tone?: PointerTrailTone;
  /** Number of trailing nodes rendered for `'trail'`, `'fluid'` and `'aurora'` (default `15`). */
  length?: number;
  /**
   * Confines the effect to its positioned parent (`position: absolute; inset: 0`) instead of
   * the viewport. When idle inside a contained surface, the trail glides along a gentle figure-8
   * orbit until the pointer enters.
   */
  contained?: boolean;
  className?: string;
}

/**
 * Theme-aware pointer follower and trail, fixed over the viewport (`pointer-events: none`) or
 * confined to a positioned surface (`contained`). Drives `--x` / `--y` via a single
 * `requestAnimationFrame` loop (no React state per frame), sleeps when settled or when the tab is
 * hidden, and stays off under `prefers-reduced-motion` and on touch-only devices. Requires
 * `@bilo-io/ui/styles` for `.pointer-*` classes.
 */
export function PointerTrail({
  variant = 'trail',
  tone,
  length = 15,
  contained = false,
  className,
}: PointerTrailProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const count = variant === 'ring' ? 0 : Math.max(0, length);
  const resolvedTone: PointerTrailTone =
    tone ?? (variant === 'fluid' || variant === 'aurora' ? 'gradient' : 'foreground');

  useEffect(() => {
    const root = hostRef.current;
    if (!root) return;
    if (!contained && root.closest('[inert]')) return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    let stop: (() => void) | null = null;

    const start = () => {
      const dot = root.querySelector<HTMLElement>('.pointer-dot');
      const ring = root.querySelector<HTMLElement>('.pointer-ring');
      const trail = [...root.querySelectorAll<HTMLElement>('.pointer-trail')];
      if (!dot) return () => {};

      const pointer = { x: 0, y: 0 };
      const head = { x: 0, y: 0 };
      const outer = { x: 0, y: 0 };
      const nodes = trail.map((el, i) => ({
        el,
        x: 0,
        y: 0,
        speed: 0.12 + (((i * 37) % 10) / 10) * 0.1,
      }));
      let seen = false;
      let hovering = false;
      let raf = 0;
      let last = performance.now();

      const place = (el: HTMLElement, x: number, y: number) => {
        el.style.setProperty('--x', `${x.toFixed(1)}px`);
        el.style.setProperty('--y', `${y.toFixed(1)}px`);
      };

      const toLocal = (clientX: number, clientY: number) => {
        const rect = root.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return { x: clientX, y: clientY };
        const scaleX = root.offsetWidth > 0 ? root.offsetWidth / rect.width : 1;
        const scaleY = root.offsetHeight > 0 ? root.offsetHeight / rect.height : 1;
        return {
          x: (clientX - rect.left) * scaleX,
          y: (clientY - rect.top) * scaleY,
        };
      };

      const snapAll = (x: number, y: number) => {
        head.x = x;
        head.y = y;
        outer.x = x;
        outer.y = y;
        for (const n of nodes) {
          n.x = x;
          n.y = y;
        }
      };

      const tick = (now: number) => {
        raf = 0;
        const f = Math.min(4, (now - last) / 16.67);
        last = now;
        const k = (rate: number) => 1 - Math.pow(1 - rate, f);

        if (contained && !hovering) {
          const w = root.offsetWidth || root.getBoundingClientRect().width || 240;
          const h = root.offsetHeight || root.getBoundingClientRect().height || 140;
          const t = now * 0.0018;
          pointer.x = w * 0.5 + Math.cos(t) * Math.min(w * 0.3, 84);
          pointer.y = h * 0.5 + Math.sin(t * 2) * Math.min(h * 0.24, 38);
          if (!seen) {
            seen = true;
            snapAll(pointer.x, pointer.y);
            root.setAttribute('data-active', '');
          }
        }

        const headSpeed = variant === 'ring' ? 0.35 : variant === 'fluid' ? 0.24 : 0.2;
        head.x += (pointer.x - head.x) * k(headSpeed);
        head.y += (pointer.y - head.y) * k(headSpeed);
        place(dot, head.x, head.y);

        let moving =
          (contained && !hovering) ||
          Math.abs(pointer.x - head.x) + Math.abs(pointer.y - head.y) > 0.1;

        if (ring) {
          outer.x += (pointer.x - outer.x) * k(0.14);
          outer.y += (pointer.y - outer.y) * k(0.14);
          place(ring, outer.x, outer.y);
          if (Math.abs(pointer.x - outer.x) + Math.abs(pointer.y - outer.y) > 0.1) moving = true;
        }

        let px = head.x;
        let py = head.y;
        for (const n of nodes) {
          n.x += (px - n.x) * k(n.speed);
          n.y += (py - n.y) * k(n.speed);
          place(n.el, n.x, n.y);
          if (Math.abs(px - n.x) + Math.abs(py - n.y) > 0.1) moving = true;
          px = n.x;
          py = n.y;
        }
        if (moving && !document.hidden) schedule();
      };

      const schedule = () => {
        if (!raf && !document.hidden) {
          last = performance.now();
          raf = requestAnimationFrame(tick);
        }
      };

      const target = contained ? (root.parentElement ?? root) : document;
      const leaveTarget = contained ? (root.parentElement ?? root) : document.documentElement;

      const onMove = (e: Event) => {
        const pe = e as PointerEvent;
        if (pe.pointerType && pe.pointerType !== 'mouse') return;
        const local = toLocal(pe.clientX, pe.clientY);
        pointer.x = local.x;
        pointer.y = local.y;
        hovering = true;
        if (!seen) {
          seen = true;
          snapAll(pointer.x, pointer.y);
        }
        root.setAttribute('data-active', '');
        schedule();
      };
      const onLeave = () => {
        hovering = false;
        if (contained) {
          schedule();
        } else {
          root.removeAttribute('data-active');
        }
      };
      const onEnter = () => {
        if (seen) root.setAttribute('data-active', '');
      };
      const onDown = (e: Event) => {
        const pe = e as PointerEvent;
        if (!pe.pointerType || pe.pointerType === 'mouse') root.setAttribute('data-down', '');
      };
      const onUp = () => root.removeAttribute('data-down');
      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(raf);
          raf = 0;
          if (!contained) root.removeAttribute('data-active');
        } else if (seen || contained) {
          root.setAttribute('data-active', '');
          schedule();
        }
      };

      target.addEventListener('pointermove', onMove, { passive: true });
      target.addEventListener('pointerdown', onDown, { passive: true });
      document.addEventListener('pointerup', onUp, { passive: true });
      document.addEventListener('pointercancel', onUp, { passive: true });
      leaveTarget.addEventListener('pointerleave', onLeave);
      leaveTarget.addEventListener('pointerenter', onEnter);
      document.addEventListener('visibilitychange', onVisibility);
      root.setAttribute('data-ready', '');

      if (contained) {
        root.setAttribute('data-active', '');
        schedule();
      }

      return () => {
        cancelAnimationFrame(raf);
        target.removeEventListener('pointermove', onMove);
        target.removeEventListener('pointerdown', onDown);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onUp);
        leaveTarget.removeEventListener('pointerleave', onLeave);
        leaveTarget.removeEventListener('pointerenter', onEnter);
        document.removeEventListener('visibilitychange', onVisibility);
        root.removeAttribute('data-ready');
        root.removeAttribute('data-active');
        root.removeAttribute('data-down');
      };
    };

    const sync = () => {
      stop?.();
      stop = fine.matches && !reduced.matches ? start() : null;
    };

    sync();
    fine.addEventListener('change', sync);
    reduced.addEventListener('change', sync);
    return () => {
      stop?.();
      fine.removeEventListener('change', sync);
      reduced.removeEventListener('change', sync);
    };
  }, [variant, count, contained]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className={cn('pointer-fx', className)}
      data-variant={variant}
      data-tone={resolvedTone}
      data-contained={contained ? '' : undefined}
      data-testid="pointer-fx"
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="pointer-trail"
          style={{ '--n': i / Math.max(1, count) } as CSSProperties}
        />
      ))}
      {variant === 'ring' ? <span className="pointer-ring" /> : null}
      <span className="pointer-dot" />
    </div>
  );
}
