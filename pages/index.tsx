
import { useAuth } from '@/lib/auth';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="p-10 text-center text-xl font-bold">
      {user ? `Willkommen, ${user.name}!` : 'Willkommen im Konfigurator!'}
    </div>
  );
}
