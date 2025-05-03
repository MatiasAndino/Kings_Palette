
function setCSSVariables(vars) {
    const root = document.documentElement;

    Object.entries(vars).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });
}

export function setRootVariables(colors) {
    const colorVars = colors.reduce((result, color, i) => {

        const [h, s, l] = color;
        const backgroundColor = `HSL(${h},${s}%,${l}%)`;

        result[`color${i + 1}`] = backgroundColor;

        return result;
    }, {});

    setCSSVariables(colorVars);
}

export function setRootVariable(attribute, color) {
    const value = {};
    value[attribute] = color;
    setCSSVariables(value);
}