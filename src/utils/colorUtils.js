import { hexToHSL } from "./convertHexToHSL";
import { getShades } from "./shadesGenerator";

export const PALETTE_SIZE = 5;
export const MAX_RANGE_ANALOGOUS_COLORS = 30;
export const normalizeHue = hue => (hue + 360) % 360;
const TARGET_TONAL_VALUE = 65;
const TONE_TOLERANCE = 10;


export function evaluateTonalScale([h, s, l]) {
    const isTonalRangeValid = (TARGET_TONAL_VALUE  + TONE_TOLERANCE >= l) && (l >= TARGET_TONAL_VALUE - TONE_TOLERANCE);

    if (isTonalRangeValid) {
        return [h, s, l];
    } else {
        const off = Math.floor(Math.random() * (TONE_TOLERANCE * 2)) - TONE_TOLERANCE;
        const corrected = [h, s, TARGET_TONAL_VALUE + off];
        return corrected;
    }

}

export function getDarkerColor([h, ,]) {
    return getShades([h, 10, 14]);
}

export function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215);

    return evaluateTonalScale(hexToHSL(`#${randomColor.toString(16).padStart(6, '0')}`));
}

export function evaluateSaturationLevel([h, s, l]) {

}