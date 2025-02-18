import { useContext } from 'react';
import { IThemeContext } from '../types';
import { ThemeContext } from '../main';

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
