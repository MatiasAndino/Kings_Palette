import { normalizeHue } from "./colorUtils";
import { getShades } from "./shadesGenerator";

export function getTriadHSL([h, s, l]) {

    return [
        ...getShades([normalizeHue(h + 120), s, l]),
        ...getShades([normalizeHue(h + 240), s, l]),
    ];
}

export function getTriadHSLFirstColor([h, s, l]) {

    return getShades([normalizeHue(h + 120), s, l]);
}
export function getTriadHSLSecondColor([h, s, l]) {

    return getShades([normalizeHue(h + 240), s, l]);
}