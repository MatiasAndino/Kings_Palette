export function hexToHSL(H) {
    let r = 0, g = 0, b = 0;
    if (H.length === 7) {
        r = parseInt(H.slice(1, 3), 16) / 255;
        g = parseInt(H.slice(3, 5), 16) / 255;
        b = parseInt(H.slice(5, 7), 16) / 255;
    }

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
            case g: h = ((b - r) / d + 2); break;
            case b: h = ((r - g) / d + 4); break;
        }
        h *= 60;
    }

    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}