// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from "react";

function UsernameForm({onSubmitUsername}) {
    const [input, updateInput] = React.useState("")

    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(inputEl.current.value)
    }

    function handleChange(event) {
        const {value} = event.target
        updateInput(value.toLowerCase())
    }
    const inputEl = useRef(null)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='usernameInput'>Username:</label>
                <input onChange={handleChange} ref={inputEl} type="text" id='usernameInput' value={input}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername}/>
}

export default App
