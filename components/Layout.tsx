
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">Sunset Group B2B Portal</h1>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Start</Link>
          <Link href="/produkte">Produkte</Link>
          <Link href="/konfigurator">Konfigurator</Link>
          <Link href="/auftrag">Aufträge</Link>
          <Link href="/profil">Profil</Link>
          {user?.role === 'admin' && <Link href="/admin">Admin</Link>}
          {user && <button onClick={logout} className="text-blue-600 hover:underline ml-4">Abmelden</button>}
        </nav>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
