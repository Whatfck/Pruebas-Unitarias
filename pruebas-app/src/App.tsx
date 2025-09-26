import React from "react";
import { DigitalClock } from "./components/DigitalClock";
import { CountdownTimer } from "./components/CountdownTimer";
import { ColorPicker } from "./components/ColorPicker";
import { SearchList } from "./components/SearchList";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Pruebas de Componentes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reloj Digital */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Reloj Digital</h2>
          <DigitalClock />
        </div>

        {/* Contador */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contador Regresivo</h2>
          <CountdownTimer />
        </div>

        {/* Selector de Colores */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Selector de Colores</h2>
          <ColorPicker />
        </div>

        {/* Buscador en Lista */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Buscador en Lista</h2>
          <SearchList />
        </div>
      </div>
    </div>
  );
};

export default App;
