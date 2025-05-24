import type { Metadata } from 'next'
import {Space_Mono} from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: 'Lavender Calhoun',
    description: 'Web site created with Next.js.',
}

const spaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal','italic'],
    variable: '--font-space-mono',

})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={spaceMono.className}>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>

    )
}