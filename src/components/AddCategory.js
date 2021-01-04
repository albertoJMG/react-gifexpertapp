
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const hanleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const hanleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {                     //Validacion para que no nos envien elementos vacios
            setCategories(cats => [inputValue, ...cats]);       //Como se pasa por referencia, setCategories puede acceder al array
            setInputValue("");                                  //Ponemos el input en blanco

        }
    }

    return (
        <form onSubmit={hanleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={hanleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
