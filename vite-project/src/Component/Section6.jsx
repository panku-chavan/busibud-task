import React from 'react'
import "./style.css"
import s63 from "./assets/0135627f-0603-432e-bb56-94ca6f768548.png"
import s61 from "./assets/s51.png"
import s62 from "./assets/s52.png"

const Section6 = () => {
    return (
        <section>
            <h3 className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
            <div className="section5">
                <div className="s5-items d-flex flex-wrap">
                    <div className="text-center">
                        <img height="100px" src={s61} alt />
                        <h6>Forms On Fire</h6>
                    </div>
                    <div className="text-center">
                        <img height="100px" src={s62} alt />
                        <h6>ElectroNeek Studio IDE</h6>
                    </div>
                    <div className="text-center">
                        <img height="100px" width="100px" src={s63} alt />
                        <h6>Jot Form</h6>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Section6