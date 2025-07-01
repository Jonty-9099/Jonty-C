
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'minimal' | 'night'

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('minimal');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('jonty-hub-theme') as Theme
    if (savedTheme && ['minimal', 'night'].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    root.classList.add('theme-transition')
    root.setAttribute('data-theme', theme)
    localStorage.setItem('jonty-hub-theme', theme)
    const timeout = setTimeout(() => root.classList.remove('theme-transition'), 300)
    return () => clearTimeout(timeout)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
