import { useState } from 'react'

/* state of an input box and event handling has been moved into this custom hook down from the file
   that has the login form.
*/
export const useField = (type) => {
    const[value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const clear = () => {
        setValue('')
    }

    return{
        type,
        value,
        onChange,
        clear
    }
}