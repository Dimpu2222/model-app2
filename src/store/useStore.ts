import { create } from 'zustand';
import type { User, Role, Permission } from '../types';

interface Store {
  users: User[];
  roles: Role[];
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Role) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
}

// Initial mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sujay',
    email: 'sujaysunkara@gmail.com',
    roleId: '1',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=facearea&facepad=2',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@vrvsecurity.com',
    roleId: '2',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=facearea&facepad=2',
  },
];

const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access',
    permissions: ['read', 'write', 'delete', 'manage'],
  },
  {
    id: '2',
    name: 'Analyst',
    description: 'Read and analyze data',
    permissions: ['read'],
  },
];

export const useStore = create<Store>((set) => ({
  users: mockUsers,
  roles: mockRoles,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (id, updatedRole) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === id ? { ...role, ...updatedRole } : role
      ),
    })),
  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((role) => role.id !== id),
    })),
}));