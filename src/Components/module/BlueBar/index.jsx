import React, {Fragment} from "react";
import style from './bluebar.module.css'
import smallPlane from '../../../assets/img/small-plane-search.svg'

const BlueBar = (props) => {
    return (
        <Fragment>
            <div className={`${style.wrapper} d-flex`}>
                <div className={`${style['left-side']} d-flex`}>
                    <img src={smallPlane} alt="" width={50}/>
                    <div className={`${style['search-area']} d-flex px-2 ms-2`}>
                        <div className={`${style['left-search']} d-flex flex-column flex-fill py-3 justify-content-center`}>
                            <div className={`${style["content-wrapper"]}`}>
                                <div className="top d-flex justify-content-between">
                                    <div className={`${style['font-12']}`}>
                                        From
                                    </div>
                                    <div className={`${style['font-12']}`}>
                                        From
                                    </div>
                                </div>
                                <div className="middle d-flex justify-content-between">
                                    <div className={`${style['font-16']} my-2`}>
                                        Medan (IDN)
                                    </div>
                                    <div className={`${style['font-16']} my-2 text-end`}>
                                        Medan (IDN)
                                    </div>
                                </div>
                                <div className="bottom d-flex justify-content-between">
                                    <div className={`${style['font-12']}`}>
                                        Monday, 20 July 20
                                    </div>
                                    <div className={`${style['font-12']}`}>
                                        6 Passenger
                                    </div>
                                    <div className={`${style['font-12']}`}>
                                        Monday, 20 July 20
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style['right-side']} d-flex justify-content-end align-items-center`}>
                    <div className={`${style['font-16']} my-2 text-end`}>
                        Change Search
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlueBar