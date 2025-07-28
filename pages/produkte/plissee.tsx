
import dynamic from 'next/dynamic';
const PlisseeConfigurator = dynamic(() => import('@/components/PlisseeConfigurator'), { ssr: false });

export default function PlisseePage() {
  return (
    <div className="p-6">
      <PlisseeConfigurator />
    </div>
  );
}
