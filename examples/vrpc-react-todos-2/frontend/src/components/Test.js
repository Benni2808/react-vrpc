import React from 'react'
import { withBackend } from 'react-vrpc'

const Test = ({ vrpc, todos }) => {

    const { backend } = todos


    console.log(vrpc)
    console.log(backend)
    console.log(backend.callAll('getData').then(x => x))

    return null

}

export default withBackend(Test)