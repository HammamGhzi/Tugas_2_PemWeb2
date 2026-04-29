import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist((set) => ({
        isAuthenticated: false,
        user: null,
        login: (username: string) => set({isAuthenticated: true, user: username}),
        logout: () => set({isAuthenticated: false, user: null}),
    }), {
        name: 'auth-storage', 
    })
);