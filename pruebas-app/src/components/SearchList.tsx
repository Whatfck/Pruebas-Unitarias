import React, { useState } from "react";

const fruits = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa", "Kiwi", "Lima", "Mango", "Naranja", "Uva"];

export const SearchList: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = fruits.filter(fruit =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-2 w-full flex flex-col items-center">
      <input
        type="text"
        placeholder="Buscar fruta..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border-2 border-gray-300 focus:border-blue-500 rounded-lg px-3 py-2 shadow-sm w-full"
      />
      <ul className="w-full space-y-1">
        {filtered.length > 0 ? (
          filtered.map(fruit => (
            <li key={fruit} className="bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition duration-200 text-center">
              {fruit}
            </li>
          ))
        ) : (
          <li className="animate-pulse text-red-600 font-bold text-center">No encontrado</li>
        )}
      </ul>
    </div>
  );
};
