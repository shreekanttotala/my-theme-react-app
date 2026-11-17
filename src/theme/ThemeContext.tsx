import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  DEFAULT_THEME,
  THEME_REGISTRY,
  isValidTheme,
} from './themes';
import type { ThemeDefinition, ThemeId } from './themes';

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  availableThemes: readonly ThemeDefinition[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeId;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = 'app-ui-theme',
}) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      return isValidTheme(saved) ? saved : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    const activeDefinition =
      THEME_REGISTRY.find((item) => item.id === theme) ?? THEME_REGISTRY[0];

    document.documentElement.setAttribute('data-theme', activeDefinition.id);
    document.documentElement.style.colorScheme = activeDefinition.colorScheme;

    try {
      window.localStorage.setItem(storageKey, activeDefinition.id);
    } catch {
      // Ignore storage quota or private-browsing write errors
    }
  }, [theme, storageKey]);

  const setTheme = (nextTheme: ThemeId) => {
    if (isValidTheme(nextTheme)) {
      setThemeState(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        availableThemes: THEME_REGISTRY,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}