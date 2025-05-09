import React from 'react'
import Palette from '../palette/Palette'
import { usePalette } from '../../palette-context/PaletteContext'

const CustomPalette = ({ suggested }) => {
    const { palette, updateAutoPalette } = usePalette()
    updateAutoPalette(suggested);

    return (
        <Palette title={'CUSTOM'} palette={palette} />
    )
}

export default CustomPalette