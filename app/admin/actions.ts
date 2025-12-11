"use server"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAdminAction(formData: FormData) {
  const password = String(formData.get('adminPassword') ?? '')

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    throw new Error('Admin password not configured on the server (ADMIN_PASSWORD).')
  }

  if (password === adminPassword) {
    cookies().set({
      name: 'vault_admin',
      value: '1',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
    })

    redirect('/admin')
  }

  throw new Error('Invalid admin password')
}

export async function logoutAdminAction() {
  cookies().set({
    name: 'vault_admin',
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  redirect('/')
}
