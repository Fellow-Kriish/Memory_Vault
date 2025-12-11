import React from 'react'
import { memories } from '../../data/memories'
import { cookies } from 'next/headers'
import { loginAdminAction, logoutAdminAction } from './actions'

export default function AdminPage({ searchParams }: { searchParams?: { redirect?: string } }) {
  const adminCookie = cookies().get('vault_admin')?.value

  if (!adminCookie || adminCookie !== '1') {
    // Render server-side login form that posts to server action
    const redirect = searchParams?.redirect ?? '/admin'

    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>

          <form action={loginAdminAction} className="space-y-4">
            <input
              name="adminPassword"
              type="password"
              placeholder="Admin Password"
              className="w-full px-4 py-3 bg-[#070707] border border-gray-800 rounded text-white"
              aria-label="Admin Password"
              required
            />

            <input type="hidden" name="redirect" value={redirect} />

            <div className="flex justify-center">
              <button type="submit" className="px-6 py-2 bg-gray-900 border border-gray-700 rounded text-white">
                Enter Admin
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-400">Admin area — keep this password private.</p>
        </div>
      </div>
    )
  }

  // Admin dashboard (server-rendered)
  return (
    <section>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <form action={logoutAdminAction} method="post">
          <button className="text-sm text-gray-300 underline">Logout Admin</button>
        </form>
      </header>

      <div className="bg-[#0a0a0a] border border-gray-800 p-4 rounded">
        <h3 className="font-semibold mb-2">Memories</h3>
        <ul className="list-disc pl-5 text-gray-300">
          {memories.map((m) => (
            <li key={m.id} className="py-1">
              <strong>{m.title}</strong> — <span className="text-sm text-gray-400">{m.date}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-400">To add or remove memories, update <code className="text-xs">data/memories.ts</code> and push to GitHub.</p>
      </div>
    </section>
  )
}
