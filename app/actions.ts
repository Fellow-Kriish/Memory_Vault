"use server"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const password = String(formData.get('password') ?? '')

  const sitePassword = process.env.SITE_PASSWORD
  if (!sitePassword) {
    throw new Error('Site password not configured on the server (SITE_PASSWORD).')
  }

  if (password === sitePassword) {
    // Set secure, httpOnly cookie
    cookies().set({
      name: 'vault_auth',
      value: '1',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
    })

    redirect('/gallery')
  }

  // If we get here, auth failed — throw to show an error near the form
  throw new Error('Invalid password')
}
