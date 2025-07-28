
import React, { useState } from 'react';

export default function PlisseeConfigurator() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('Weiß');
  const [netz, setNetz] = useState('Schwarz');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = {
      produkt: 'ISG Plissee MPH',
      breite: width,
      höhe: height,
      farbe: color,
      netz: netz
    };
    console.log('Plissee-Konfiguration:', result);
    alert('Plissee-Konfiguration gespeichert!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white border rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800">ISG Plissee MPH Konfiguration</h2>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block font-semibold">Breite (mm)</label>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div className="flex-1">
          <label className="block font-semibold">Höhe (mm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-2 border rounded" />
        </div>
      </div>

      <div>
        <label className="block font-semibold">Farbe Profil</label>
        <select value={color} onChange={(e) => setColor(e.target.value)} className="w-full p-2 border rounded">
          <option>Weiß</option>
          <option>Anthrazit</option>
          <option>Silber</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Netz</label>
        <select value={netz} onChange={(e) => setNetz(e.target.value)} className="w-full p-2 border rounded">
          <option>Schwarz</option>
          <option>Grau</option>
          <option>Transparent</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Bestätigen
      </button>
    </form>
  );
}
