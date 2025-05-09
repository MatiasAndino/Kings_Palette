
const InputColor = ({ onChange, value }) => {

    return (
        <>
            <label htmlFor='input-color'>COLOR: </label>
            <input
                type='text'
                id='input-color'
                name='input-color'
                value={ value}
                className='input-color'
                onChange={e => onChange(e)}
                required
            />
        </>
    )
}

export default InputColor