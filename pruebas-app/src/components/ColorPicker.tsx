import React, { useState } from "react";

export const ColorPicker: React.FC = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="space-y-2 flex flex-col items-center">
      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        className="w-20 h-10 cursor-pointer rounded-lg"
      />
      <div
        data-testid="color-div"
        style={{ backgroundColor: color }}
        className="w-64 h-32 rounded-xl shadow-md border"
      />
    </div>
  );
};
