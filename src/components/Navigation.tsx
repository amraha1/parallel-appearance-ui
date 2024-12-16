import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', hasDropdown: true },
    { label: 'About', hasDropdown: false },
    { label: 'Service', hasDropdown: true },
    { label: 'Project', hasDropdown: true },
    { label: 'Pages', hasDropdown: true },
    { label: 'Case Study', hasDropdown: true },
    { label: 'Blog', hasDropdown: true },
  ];

  return (
    <nav className="bg-black/90 fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-2xl font-bold">
              <span className="text-primary">Soft</span>conic
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-black/20 p-2 rounded-full">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;