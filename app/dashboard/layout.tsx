import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashbord',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="felx-col flex h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-gow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
