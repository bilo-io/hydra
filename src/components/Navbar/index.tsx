import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
  Briefcase,
  Coins,
  ArrowLeftRight,
  ListOrdered,
  BarChart3,
  Compass,
  Activity,
  Layers,
  Newspaper,
  User,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { ThemeToggle } from '../../vendor/midnite-ui/components/theme-toggle';

export interface NavItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  group: 'Portfolio & Trading' | 'Markets & Insights' | 'Account';
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase, group: 'Portfolio & Trading' },
  { name: 'Currencies', path: '/currencies', icon: Coins, group: 'Portfolio & Trading' },
  { name: 'Trade', path: '/trade', icon: ArrowLeftRight, group: 'Portfolio & Trading' },
  { name: 'Transactions', path: '/transactions', icon: ListOrdered, group: 'Portfolio & Trading' },
  { name: 'Charts', path: '/charts', icon: BarChart3, group: 'Portfolio & Trading' },
  { name: 'Explore', path: '/explore', icon: Compass, group: 'Markets & Insights' },
  { name: 'Stats', path: '/stats', icon: Activity, group: 'Markets & Insights' },
  { name: 'Products', path: '/products', icon: Layers, group: 'Markets & Insights' },
  { name: 'News', path: '/news', icon: Newspaper, group: 'Markets & Insights' },
  { name: 'Profile', path: '/profile', icon: User, group: 'Account' },
  { name: 'Settings', path: '/settings', icon: Settings, group: 'Account' },
];

export const Navbar = ({
  onToggle,
  type = 'desktop',
}: {
  onToggle?: () => void;
  type?: string;
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/portfolio'
      ? pathname === '/' || pathname.startsWith('/portfolio')
      : pathname.startsWith(path);

  if (type === 'mobile') {
    const quickItems = [
      NAV_ITEMS[0], // Portfolio
      NAV_ITEMS[2], // Trade
      NAV_ITEMS[5], // Explore
      NAV_ITEMS[6], // Stats
      NAV_ITEMS[7], // Products
    ];

    return (
      <div className="md:hidden">
        {/* Mobile Top Header */}
        <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-border/80 bg-card/90 px-4 backdrop-blur-md">
          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 text-left"
          >
            <img src="/logo.svg" alt="Hydra" className="h-7 w-auto" />
          </button>
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileDrawerOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background text-foreground hover:bg-accent"
            >
              {mobileDrawerOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </header>

        {/* Mobile Full Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 pt-16 backdrop-blur-md md:hidden">
            <div className="flex h-full flex-col justify-between overflow-y-auto px-4 pb-24">
              <div className="space-y-4">
                {(['Portfolio & Trading', 'Markets & Insights', 'Account'] as const).map((group) => (
                  <div key={group}>
                    <div className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {group}
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {NAV_ITEMS.filter((item) => item.group === group).map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                          <button
                            key={item.path}
                            type="button"
                            onClick={() => {
                              navigate(item.path);
                              setMobileDrawerOpen(false);
                            }}
                            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                              active
                                ? 'border-primary/40 bg-primary/15 text-primary'
                                : 'border-border/60 bg-card/70 text-foreground hover:bg-accent'
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Bottom Tab Bar */}
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-x-0 bottom-0 z-30 flex h-16 items-center justify-around border-t border-border/80 bg-card/95 px-2 backdrop-blur-md"
        >
          {quickItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <aside
      aria-label="Primary Sidebar"
      className="hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-border/80 bg-card/75 px-3 py-4 backdrop-blur-md md:flex"
    >
      <div className="space-y-5 overflow-y-auto">
        <div className="flex items-center justify-between px-2">
          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img src="/logo.svg" alt="Hydra" className="h-8 w-auto" />
          </button>
          {onToggle && (
            <button
              type="button"
              onClick={() => onToggle()}
              aria-label="Open app menu"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Menu className="h-4 w-4" />
            </button>
          )}
        </div>

        <nav className="space-y-4">
          {(['Portfolio & Trading', 'Markets & Insights', 'Account'] as const).map((group) => (
            <div key={group} className="space-y-1">
              <div className="px-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {group}
              </div>
              {NAV_ITEMS.filter((item) => item.group === group).map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/70 pt-3">
        <ThemeToggle expanded />
      </div>
    </aside>
  );
};

export default Navbar;
