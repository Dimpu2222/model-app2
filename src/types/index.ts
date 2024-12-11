export type Permission = 'read' | 'write' | 'delete' | 'manage';

export interface User {
  id: string;
  name: string;
  email: string;
  roleId: string;
  status: 'active' | 'inactive';
  avatar: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}