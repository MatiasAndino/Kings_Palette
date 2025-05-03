import { getShades } from "./shadesGenerator";

export function getComplementaryHSL([h, s, l]) {
    
    const complementary = (h + 180) % 360;
    return getShades([complementary, s, l]);
}