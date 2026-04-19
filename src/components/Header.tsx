import { Home, Info, Users, HelpCircle } from "lucide-react";
import { NavLink } from "./ui/NavLink";

export const Header: React.FC = () => {
  const currentPath = "#";

  const menuItems = [
    { label: "Beranda", href: "#", icon: <Home size={18} /> },
    { label: "Tentang", href: "#about", icon: <Info size={18} /> },
    { label: "Narasumber", href: "#speakers", icon: <Users size={18} /> },
    { label: "FAQ", href: "#faq", icon: <HelpCircle size={18} /> },
  ];

  return (
    <header className=" bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>
        <div className="nav flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
             
              isActive={item.href === currentPath}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;