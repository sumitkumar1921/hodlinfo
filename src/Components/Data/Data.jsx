import React from 'react'
import "../Data/Data.css"

function Data(props) {
    const {name, last, buy, sell, volume, base_unit} = props
    return (
        <div className='display-data'>
            <p >{name}</p>
            <p>{last}</p>
            <p>{buy}</p>
            <p>{sell}</p>
            <p>{volume}</p>
            <p>{base_unit}</p>
        </div>
    )
}

export default Data
