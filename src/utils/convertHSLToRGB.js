export function hslToRgb([h, s, l]) {
    s /= 100;
    l /= 100;
  
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  
    return [f(0), f(8), f(4)];
  }