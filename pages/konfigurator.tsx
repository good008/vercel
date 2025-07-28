
import dynamic from 'next/dynamic';
const VorbaurollladenConfigurator = dynamic(() => import('@/components/VorbaurollladenConfigurator'), { ssr: false });

export default function KonfiguratorPage() {
  return (
    <div className="p-6">
      <VorbaurollladenConfigurator />
    </div>
  );
}
