import React from 'react'
import { loginAction } from './actions'

export default function LoginPage({ searchParams }: { searchParams?: { redirect?: string } }) {
  const redirect = searchParams?.redirect ?? '/gallery'

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter Access Code</h2>

        <form action={loginAction} className="space-y-4">
          <input
            name="password"
            type="password"
            placeholder="Access Code"
            className="w-full px-4 py-3 bg-[#070707] border border-gray-800 rounded text-white"
            aria-label="Access Code"
            required
          />

          <input type="hidden" name="redirect" value={redirect} />

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 border border-gray-700 rounded text-white"
            >
              Enter Vault
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">This site is protected by a single access code.</p>
      </div>
    </div>
  )
}
