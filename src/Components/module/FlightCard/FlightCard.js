import React from 'react'
import style from './flightcard.module.css'

const FlightCard = () => {
    return (
        <div className={`${style['card-wrapper']} d-flex`}>
            <div className="city d-flex">
                <div className={`${style['font-24']}`}>
                    From : Jakarta
                </div>
            </div>
        </div>
    )
}

export default FlightCard