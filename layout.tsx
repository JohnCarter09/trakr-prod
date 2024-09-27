import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  )
}
