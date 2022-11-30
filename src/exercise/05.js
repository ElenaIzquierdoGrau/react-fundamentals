// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle
function Box(props) {
    const sizeClassName = props.size ? `box--${props.size}` : ''
    return (
        <div className={`box ${sizeClassName}`} style={props.style}>{props.message}</div>
    )

}
const smallBox = (
    <Box
         style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
         message='small lightblue box'
         size='small'
    />
)
const mediumBox = (
    <Box
         style={{fontStyle: 'italic', backgroundColor: 'pink'}}
         message='medium pink box'
         size='medium'
    />
)
const largeBox = (
    <Box
         style={{fontStyle: 'italic', backgroundColor: 'orange'}}
         message='large orange box'
         size='large'
    />
)

function App() {
    return (
        <div>
            {smallBox}
            {mediumBox}
            {largeBox}
        </div>
    )
}

export default App
