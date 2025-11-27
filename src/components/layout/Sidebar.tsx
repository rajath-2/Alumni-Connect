import { useLocation } from 'react-router-dom';
import PillNav from '@/components/ui/PillNav';
import { dashboardUser } from '@/data/mockData';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/dashboard/profile' },
  { label: 'Announcements', href: '/dashboard/announcements' },
  { label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          logo="https://cdn-icons-png.flaticon.com/512/2997/2997295.png" // Placeholder logo or use local asset
          logoAlt="DSCE Alumni"
          avatar={dashboardUser.avatar}
          items={navItems}
          activeHref={pathname}
          baseColor="#000000"
          pillColor="#27272a"
          pillTextColor="#a1a1aa"
          hoveredPillTextColor="#ffffff"
          className="p-4"
          onMobileMenuClick={() => {}}
        />
      </div>
    </div>
  );
}
