import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme } from '@/types/portfolio'

interface ThemeState {
  theme: Theme
  toggle: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggle: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: 'portfolio-theme-v2',
    }
  )
)

// Initialize theme on load
export function initTheme() {
  const theme = useThemeStore.getState().theme
  if (theme === 'light') {
    document.documentElement.classList.add('light')
  } else {
    document.documentElement.classList.remove('light')
  }
  // Subscribe to changes
  useThemeStore.subscribe((state) => {
    if (state.theme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  })
}
