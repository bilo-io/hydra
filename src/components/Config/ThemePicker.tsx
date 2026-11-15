import React from 'react';
import { Sun, Moon, Laptop, Clock, Check } from 'lucide-react';
import { useTheme, type ThemePreference } from '../../vendor/midnite-ui/theme/theme-context';

const OPTIONS: { value: ThemePreference; label: string; Icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Laptop },
  { value: 'time', label: 'Time', Icon: Clock },
];

const ThemePicker: React.FC = () => {
  const { preference, setPreference } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = preference === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setPreference(value)}
            className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
              active
                ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                : 'border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
            {active && <Check className="h-3.5 w-3.5" />}
          </button>
        );
      })}
    </div>
  );
};

export default ThemePicker;
