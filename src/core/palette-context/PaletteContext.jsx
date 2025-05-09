import { createContext, useContext, useState } from "react";
import { setRootVariables } from "../../utils";

const PaletteContext = createContext();

export function PaletteProvider({ children }) {
  const [palette, setPalette] = useState([]);
  const [switchState, setSwitchState] = useState(true);

  const includesColor = (color) => {
    const [h, s, l] = color;

    for (let i = 0; i < palette.length; i++) {
      const [hue, sat, lig] = palette[i];
      if (hue === h && sat === s && lig === l) return true;
    }

    return false;
  }

  const updateCSSVariables = (currentPalette) => {
    setRootVariables(currentPalette)
  }

  const addColor = (color) => {
    setPalette(prev => [...prev, color]);
    updateCSSVariables([...palette, color]);
  };

  const removeColor = (color) => {
    const [h, s, l] = color;
    const currentPalette = palette.filter(([hh, ss, ll]) => !(h == hh && s == ss && l == ll));

    setPalette(currentPalette);

    updateCSSVariables(currentPalette);
  };

  const clearPalette = () => setPalette([]);

  const switchPalettes = () => {
    setSwitchState(!switchState);
    updateAutoPalette(palette)
  }

  const updateAutoPalette = (palette) => {
    if (switchState) updateCSSVariables(palette);
  };

  return (
    <PaletteContext.Provider value={{
      palette,
      includesColor,
      addColor,
      removeColor,
      clearPalette,
      updateAutoPalette,
      switchPalettes
    }}>
      {children}
    </PaletteContext.Provider>
  );
}

export const usePalette = () => useContext(PaletteContext);
