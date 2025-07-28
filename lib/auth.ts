
import { create } from 'zustand';

type User = {
  name: string;
  role: 'kunde' | 'admin';
};

type AuthState = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login: (username, password) => {
    if (username === 'admin') {
      set({ user: { name: 'Admin Benutzer', role: 'admin' } });
    } else {
      set({ user: { name: username, role: 'kunde' } });
    }
  },
  logout: () => set({ user: null }),
}));
