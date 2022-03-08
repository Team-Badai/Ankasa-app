import React, {Fragment} from "react";
import style from './card.module.css'

import garudaLogo from '../../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.svg'
import lionLogo from '../../../assets/img/lionLogo.svg'
import airasiaLogo from '../../../assets/img/airasiaLogo.svg'
import flightDetailGrey from '../../../assets/img/flightDetailGery.svg'
import mealIcon from '../../../assets/img/mealIcon.svg'
import wifiIcon from '../../../assets/img/wifiIcon.svg'
import luggageIcon from '../../../assets/img/luggageIcon.svg'

import Button from "../../Button";

const Card = ({airline_name, airline_logo, departure_time, arrival_time, duration_time, origin_city, destination_city, luggage, meal, wifi, transit, handleClick}) => {
    switch(airline_name) {
        case 'Garuda Indonesia':
            airline_logo = garudaLogo
            break;
        case 'Air Asia':
            airline_logo = airasiaLogo
            break;
        case 'Lion Air':
            airline_logo = lionLogo
            break;
      }
    return (
        <Fragment>
            <div className={`${style['wrapper']} d-flex flex-column flex-fill my-3 p-4`}>
                <div className={`${style['top-section']} d-flex align-items-center`}>
                    <img src={airline_logo} alt="" width={100}/>
                    <div className={`${style['font-16']} ${style.bold} mx-3`}>
                        {airline_name}
                    </div>
                    </div>
                <div className={`${style['middle-section']} d-flex`}>
                    <div className="col d-flex align-items-center">
                        <div className="col d-flex flex-column text-center">
                            <div className={`${style['font-16']} col`}>
                                {origin_city}
                            </div>
                            <div className={`${style['font-12']} ${style.grey} col`}>
                                {departure_time}
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                             <img src={flightDetailGrey} alt="" />
                        </div>
                        <div className="col d-flex flex-column text-center">
                            <div className={`${style['font-16']} col`}>
                                {destination_city}
                            </div>
                            <div className={`${style['font-12']} ${style.grey} col`}>
                                {arrival_time}
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center">
                        <div className="col d-flex flex-column text-center">
                            <div className={`${style['font-16']} col`}>
                                {duration_time}
                            </div>
                            <div className={`${style['font-12']} ${style.grey} col`}>
                                {
                                    transit !== 'direct' ? `(${transit} transit)` : transit
                                }
                                {/* (1 transit) */}
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        {luggage === 1? <img className="mx-2" src={luggageIcon} alt="" /> : null}
                        {meal === 1? <img className="mx-2" src={mealIcon} alt="" /> : null}
                        {wifi === 1? <img className="mx-2" src={wifiIcon} alt="" /> : null}
                    </div>
                    <div className="col d-flex align-items-center">
                        <div className="col d-flex">
                            <div className={`${style['font-16']} ${style.primary} ${style.bold} col d-flex justify-content-center`}>
                                $ 175
                                <div className={`${style['font-16']} ${style.grey} ms-2`}>
                                    /pax
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <Button className='btn-sign bg-primary rounded-3 p-2 text-white shadow' 
                            onClick={handleClick}>
                            Select
                        </Button>
                    </div>
                </div>
                <div className={`${style['button-section']} d-flex`}>
                    <div className={`${style['font-16']} ${style.primary} ${style.bold}`}>
                        View Details
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card