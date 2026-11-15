import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const Accordion = ({
  children,
  title,
  onClose,
  className,
  isOpenDefault = true,
}: {
  children?: React.ReactNode;
  title?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  openIcon?: any;
  closedIcon?: any;
  isOpenDefault?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault ?? true);

  useEffect(() => {
    if (typeof isOpenDefault === 'boolean') {
      setIsOpen(isOpenDefault);
    }
  }, [isOpenDefault]);

  return (
    <div className="surface overflow-hidden">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen((v) => !v);
          }
        }}
        className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted/40"
      >
        <div className="font-semibold text-foreground">{title}</div>
        <div className="flex items-center gap-2 text-muted-foreground">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {onClose && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="rounded p-1 hover:bg-accent hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={`border-t border-border px-5 py-4 ${className || ''}`.trim()}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
