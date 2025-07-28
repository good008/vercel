
import React, { useState } from 'react';

const types = ['SK', 'SKP', 'SKO-P', 'SP90', 'SP90-E', 'BGR52'];
const colors = ['Weiß (02)', 'Grau (03)', 'Anthrazit (04)', 'Braun (05)'];
const controls = ['Manuell', 'Elektrisch'];
const steuers = ['Keine', 'Zeitschaltuhr', 'Smart-Home'];

export default function VorbaurollladenConfigurator() {
  const [type, setType] = useState('SK');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [control, setControl] = useState(controls[0]);
  const [steuerung, setSteuerung] = useState(steuers[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = {
      produkt: type,
      breite: width,
      höhe: height,
      farbe: color,
      bedienung: control,
      steuerung: steuerung,
    };
    console.log('Ausgewählte Konfiguration:', result);
    alert('Konfiguration gespeichert!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white border rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold border-b pb-2 text-gray-800">Rolladen Konfiguration</h2>

      <div>
        <label className="block font-semibold">Produkt</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded">
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

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
        <label className="block font-semibold">Farbe</label>
        <select value={color} onChange={(e) => setColor(e.target.value)} className="w-full p-2 border rounded">
          {colors.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-semibold">Bedienung</label>
        <select value={control} onChange={(e) => setControl(e.target.value)} className="w-full p-2 border rounded">
          {controls.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-semibold">Steuerung</label>
        <select value={steuerung} onChange={(e) => setSteuerung(e.target.value)} className="w-full p-2 border rounded">
          {steuers.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Bestätigen
      </button>
    </form>
  );
}
