import React, {Fragment} from "react";
import style from './card.module.css'
import garudaLogo from '../../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.svg'

const Card = (props) => {
    return (
        <Fragment>
            <div className={`${style['wrapper']} d-flex flex-column flex-fill my-3 p-4`}>
                <div className={`${style['top-section']} d-flex align-items-center`}>
                    <img src={garudaLogo} alt="" width={100}/>
                    <div className={`${style['font-16']} mx-3`}>
                        Garuda Indonesia
                    </div>
                    </div>
                <div className={`${style['middle-section']} d-flex`}>
                    1
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