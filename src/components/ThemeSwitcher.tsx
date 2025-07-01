
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { key: 'minimalist', name: 'Minimal', icon: '◯' },
    { key: 'retro', name: 'Retro', icon: '▣' },
    { key: 'neon', name: 'Neon', icon: '◈' },
    { key: 'night', name: 'Night', icon: '☾' }
  ] as const;

  return (
    <div className="flex gap-1 bg-secondary/50 p-1 rounded-lg">
      {themes.map((t) => (
        <Button
          key={t.key}
          variant={theme === t.key ? "default" : "ghost"}
          size="sm"
          onClick={() => setTheme(t.key)}
          className="text-xs px-2 py-1 transition-all duration-200 hover:scale-105"
        >
          <span className="mr-1">{t.icon}</span>
          {t.name}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
