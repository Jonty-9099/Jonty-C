import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { Switch } from '@/components/ui/switch'
import { Sun, Moon } from 'lucide-react'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const isNight = theme === 'night'

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? 'night' : 'minimal')
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch checked={isNight} onCheckedChange={toggleTheme} />
      <Moon className="h-4 w-4 text-blue-500" />
    </div>
  )
}

export default ThemeSwitcher
