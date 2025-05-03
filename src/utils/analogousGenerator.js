import { MAX_RANGE_ANALOGOUS_COLORS, normalizeHue, PALETTE_SIZE } from "./colorUtils";

export function getAnalogousPalette([h, s, l]) {
    const elementos = Math.floor(PALETTE_SIZE / 2);
    const separation = MAX_RANGE_ANALOGOUS_COLORS / elementos;

    return [...new Array(PALETTE_SIZE)].map((_, index) => [normalizeHue(h + separation * (index - elementos)), s, l])
}

export function getAnalogousHarmony([h, ,]) {
    const sat = 60;
    const light = 55;

    const elementos = Math.floor(PALETTE_SIZE / 2);
    const separation = MAX_RANGE_ANALOGOUS_COLORS / elementos;


    return [...new Array(PALETTE_SIZE)].map((_, index) => [normalizeHue(h + separation * (index - elementos)), sat, light])
}

export function getSmoothedAnalogous([h, s, l]) {


    const elementos = Math.floor(PALETTE_SIZE / 2);
    const separation = MAX_RANGE_ANALOGOUS_COLORS / elementos;

    const saturationRange = {
        max: 75,
        min: 25
    };

    const lightnessRange = {
        max: 70,
        min: 30
    };

    return [...new Array(PALETTE_SIZE)].map((_, i) => {

        const index = (i - elementos);

        const hue = normalizeHue(h + separation * index);

        const ll = Math.round(lightnessRange.max - ((lightnessRange.max - lightnessRange.min) * i / (PALETTE_SIZE - 1)));
        const ss = Math.round(saturationRange.max - ((saturationRange.max - saturationRange.min) * i / (PALETTE_SIZE - 1)));

        return [hue, ss, ll]
    })

}