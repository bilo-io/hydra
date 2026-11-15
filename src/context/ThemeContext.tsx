import React, { ReactNode } from 'react';
import {
  ThemeProvider as MidniteThemeProvider,
  useTheme as useMidniteTheme,
  type ThemePreference,
  type ResolvedTheme,
} from '../vendor/midnite-ui/theme/theme-context';
import { themes } from '../themes';

export interface ThemeContextType {
  theme: typeof themes.light;
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setTheme: (theme: ThemePreference | keyof typeof themes) => void;
  setPreference: (next: ThemePreference) => void;
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <MidniteThemeProvider>{children}</MidniteThemeProvider>;
};

export const useTheme = (): ThemeContextType => {
  const { preference, resolved, setPreference } = useMidniteTheme();
  const palette = resolved === 'dark' ? themes.dark : themes.light;

  const setTheme = (next: ThemePreference | keyof typeof themes) => {
    if (next === 'light' || next === 'dark' || next === 'system' || next === 'time') {
      setPreference(next);
    } else if (next === 'ocean') {
      setPreference('dark');
    } else {
      setPreference('light');
    }
  };

  return {
    theme: palette,
    preference,
    resolved,
    setTheme,
    setPreference,
  };
};
