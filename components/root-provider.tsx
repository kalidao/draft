'use client'
import { Toaster } from 'sonner';

export default function RootProvider({ children }: { children: React.ReactNode }) {
    return <>
        {children}
        <Toaster />
    </>
}