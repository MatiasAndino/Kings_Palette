import { hexToHSL } from "./convertHexToHSL";
import { hslToRgb } from "./convertHSLToRGB";
import { getShades } from "./shadesGenerator";

export const PALETTE_SIZE = 5;
export const MAX_RANGE_ANALOGOUS_COLORS = 30;
export const normalizeHue = hue => (hue + 360) % 360;
const TARGET_TONAL_VALUE = 65;
const TONE_TOLERANCE = 10;


export function evaluateTonalScale([h, s, l]) {
    const isTonalRangeValid = (TARGET_TONAL_VALUE + TONE_TOLERANCE >= l) && (l >= TARGET_TONAL_VALUE - TONE_TOLERANCE);

    if (isTonalRangeValid) {
        return [h, s, l];
    } else {
        const off = Math.floor(Math.random() * (TONE_TOLERANCE * 2)) - TONE_TOLERANCE;
        const corrected = [h, s, TARGET_TONAL_VALUE + off];
        return corrected;
    }

}

export function getDarkerPalette([h, ,]) {
    return getShades([h, 10, 14]);
}

export function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215);

    return evaluateTonalScale(hexToHSL(`#${randomColor.toString(16).padStart(6, '0')}`));
}

export function evaluateSaturationLevel([h, s, l]) {

}

export function formatHSLString([h, s, l]) {
    return `HSL(${h},${s}%,${l}%)`;
}

function getLuminance([r, g, b]) {
    const transform = c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    const [R, G, B] = [transform(r), transform(g), transform(b)];
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function getReadableForegroundColor([h, s, l]) {
    const color = hslToRgb([h, s, l]);
    const luminance = getLuminance(color);

    return luminance < 0.179
        ? [0, 0, 95]
        : [0, 0, 15];
}
