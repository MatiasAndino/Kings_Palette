import { createContext, useContext, useState } from "react";

const PaletteContext = createContext();

export function PaletteProvider({ children }) {
  const [palette, setPalette] = useState([]);
  const [autoPalette, setAutoPalette] = useState([]);

  const includesColor = (color) => {
    const [h, s, l] = color;

    for (let i = 0; i < palette.length; i++) {
      const [hue, sat, lig] = palette[i];
      if (hue === h && sat === s && lig === l) return true;
    }

    return false;
  }

  const addColor = (color) => {
    setPalette(prev => [...prev, color]);
  };

  const removeColor = (color) => {
    const [h,s,l] = color;

    setPalette(prev => prev.filter(([hh,ss,ll]) => !(h == hh && s == ss && l == ll)));
  };

  const clearPalette = () => setPalette([]);

  const generateAutoPalette = (allPalettes) => {
  };

  return (
    <PaletteContext.Provider value={{ palette, includesColor, addColor, removeColor, clearPalette, generateAutoPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}

export const usePalette = () => useContext(PaletteContext);
