import { Facebook, Twitter, Instagram } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-transparent z-50">
      <div className="flex flex-col space-y-6 p-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;