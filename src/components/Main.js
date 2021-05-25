import React from 'react';

const Main = (props) =>{
    const {textColor, textSize } = props
    return (
        
        <main>
            <h1 style={{color: textColor, fontSize: textSize}}>This is a body section.</h1>
        </main>
    )
}

export default Main;