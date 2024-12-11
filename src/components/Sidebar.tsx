import React from 'react';
import { Users, Shield, Home } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'roles', icon: Shield, label: 'Roles' },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Shield className="w-8 h-8 text-blue-500" />
        <span className="text-white text-xl font-bold">VRV Security</span>
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg mb-2 ${
              activeTab === item.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}