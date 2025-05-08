
function setCSSVariables(vars) {
    const root = document.documentElement;

    Object.entries(vars).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });
}

export function setRootVariables(colors) {

    const maxQuantity = 6;

    const vars = [...new Array(maxQuantity)].reduce((result, _, index) => {
        let color = [0, 0, 15];

        if (colors[index] != undefined) color = [...colors[index]];

        const [h, s, l] = color;
        const hsl = `HSL(${h},${s}%,${l}%)`;

        result[`color${index + 1}`] = hsl;

        return result;
    }, {});

    setCSSVariables(vars);
}

export function setRootVariable(attribute, color) {
    const value = {};
    value[attribute] = color;
    setCSSVariables(value);
}