import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))



function Greeting() {

    const estcivil = true

    if (estcivil) {
        return <h1 > Estoy casado < /h1>
    } else {
        return <h1 > no estoy casado < /h1>
    }

}

root.render( < div >

        <
        Greeting / >
        <
        /div>)