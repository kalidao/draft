'use client'
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from 'sonner';
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
 
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <TooltipProvider>
        {children}
        <Toaster />
    </TooltipProvider> </ThemeProvider>
}