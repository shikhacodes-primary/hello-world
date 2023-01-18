import React from 'react'

const HelloWithoutJSX = () => {
    return React.createElement('div', null, 
    React.createElement('h1', null, 'This is written without using JSX'))
}

export default HelloWithoutJSX