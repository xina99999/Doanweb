import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const { placeholder = 'Nhập text', ...rests } = props
    const [valueInput, setValueInput] =useState('')
    return (
        <WrapperInputStyle placeholder={placeholder} value={valueInput} {...rests}  />
    )
}

export default InputForm