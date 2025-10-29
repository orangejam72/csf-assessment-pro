import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Award, FileArchive, TrendingUp, BookOpen } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-blue-700 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive 
              ? 'bg-blue-800 text-white' 
              : 'text-white hover:bg-blue-800'
          }`
        }
        end
      >
        <FileText size={18} />
        <span>Subcategories</span>
      </NavLink>
      
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive 
              ? 'bg-blue-800 text-white' 
              : 'text-white hover:bg-blue-800'
          }`
        }
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </NavLink>
      
      <NavLink 
        to="/scoring" 
        className={({ isActive }) => 
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive 
              ? 'bg-blue-800 text-white' 
              : 'text-white hover:bg-blue-800'
          }`
        }
      >
        <Award size={18} />
        <span>Scoring</span>
      </NavLink>
      
      <NavLink 
        to="/artifacts" 
        className={({ isActive }) => 
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive 
              ? 'bg-blue-800 text-white' 
              : 'text-white hover:bg-blue-800'
          }`
        }
      >
        <FileArchive size={18} />
        <span>Artifacts</span>
      </NavLink>
      
      <NavLink
        to="/users"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-blue-800 text-white'
              : 'text-white hover:bg-blue-800'
          }`
        }
      >
        <Users size={18} />
        <span>Users</span>
      </NavLink>

      <NavLink
        to="/gap-analysis"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-blue-800 text-white'
              : 'text-white hover:bg-blue-800'
          }`
        }
      >
        <TrendingUp size={18} />
        <span>Gap Analysis</span>
      </NavLink>

      <NavLink
        to="/documentation"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            isActive
              ? 'bg-blue-800 text-white'
              : 'text-white hover:bg-blue-800'
          }`
        }
      >
        <BookOpen size={18} />
        <span>Docs</span>
      </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
