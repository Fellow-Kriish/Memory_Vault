import './globals.css'

export const metadata = {
  title: 'Personal Video Memory Vault',
  description: 'A private vault for your unlisted YouTube memories',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="w-full border-b border-gray-800 p-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Memory Vault</h1>
            <nav className="text-sm text-gray-300">Cinema Mode</nav>
          </header>

          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">{children}</main>

          <footer className="w-full border-t border-gray-900 p-4 text-sm text-gray-400 text-center">
            © Private Vault — Stored locally in code
          </footer>
        </div>
      </body>
    </html>
  )
}
