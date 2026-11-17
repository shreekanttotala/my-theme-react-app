import type { TranslationKey } from '../i18n/config';

export interface ThemeDefinition {
  id: string;
  labelKey: TranslationKey;
  colorScheme: 'light' | 'dark';
}

export const THEME_REGISTRY = [
  {
    id: 'light',
    labelKey: 'theme_light',
    colorScheme: 'light',
  },
  {
    id: 'dark',
    labelKey: 'theme_dark',
    colorScheme: 'dark',
  },
  {
    id: 'corporate',
    labelKey: 'theme_corporate',
    colorScheme: 'light',
  },
] as const satisfies readonly ThemeDefinition[];

export type ThemeId = (typeof THEME_REGISTRY)[number]['id'];

export const DEFAULT_THEME: ThemeId = 'light';

export function isValidTheme(value: unknown): value is ThemeId {
  return (
    typeof value === 'string' &&
    THEME_REGISTRY.some((theme) => theme.id === value)
  );
}