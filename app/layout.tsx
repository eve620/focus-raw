import {Navbar} from '@/components/navbar'
import './globals.css'
import type {Metadata} from 'next'
import {cookies} from "next/headers";
import React from "react";
import {notoSansSC} from "@/app/fonts";

export const metadata: Metadata = {
    title: 'Focus',
    description: '聚焦',
}

export default async function RootLayout({children,}: { children: React.ReactNode }) {
    const theme = await cookies()
    const isDark = (theme.get('theme')?.value || 'light') === 'dark'
    return (
        <html lang="zh" className={`${notoSansSC.variable} ${isDark && 'dark'}`}>
        <body>
        <Navbar
            currentUser={{
                id: '1',
                username: '当前用户',
                avatarUrl: '/placeholder.svg',
                isAdmin: true
            }}
            curTheme={isDark ? 'dark' : 'light'}
        />
        {children}
        </body>
        </html>
    )
}

