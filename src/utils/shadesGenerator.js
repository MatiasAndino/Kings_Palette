import { PALETTE_SIZE } from "./colorUtils";

export function getShades([h, s, l]) {

    const MAX_LIGHTNESS = 95;
    const MIN_SATURATION = 5;
  
    const result = [];
    const steps = (PALETTE_SIZE - 1) / 2;
    const increment = 100 / (PALETTE_SIZE + 1);
  
    // Lighter
    for (let i = steps; i > 0; i--) {
      let newLightness = Math.min(MAX_LIGHTNESS, l + increment * i);
      result.push([h, s, Math.round(newLightness)]);
    }
  
    result.push([h, s, Math.round(l)]);
  
    // Darker 
    for (let i = 1; i <= steps; i++) {
      let newLightness = Math.max(MIN_SATURATION, l - increment * i);
      result.push([h, s, Math.round(newLightness)]);
    }
  
    return result;
  }
  