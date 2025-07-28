
import Link from 'next/link';
import { Boxes, SlidersHorizontal } from 'lucide-react';

export default function Produkte() {
  const tiles = [
    { name: 'Rollladen (SK, SP90, BGR52)', href: '/konfigurator', icon: Boxes },
    { name: 'Plissee ISG MPH', href: '/produkte/plissee', icon: SlidersHorizontal }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {tiles.map((tile) => (
        <Link key={tile.name} href={tile.href}>
          <div className="flex items-center gap-4 p-6 bg-white shadow-sm border rounded hover:shadow-md transition cursor-pointer">
            <tile.icon className="w-8 h-8 text-blue-700" />
            <span className="text-lg font-semibold text-gray-800">{tile.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
