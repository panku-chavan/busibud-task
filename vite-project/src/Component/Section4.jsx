import React from 'react'
import "./style.css";
import saveMoney from "./assets/save-money.png"
import accuRacy from "./assets/accuracy.png"
import hiring from "./assets/hiring.png"
import moneyBack from "./assets/money-back.png"

const Section4 = () => {
    return (
        <section>
            <div>
                <h3 className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h3>
                <div id="section3" className="row">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <img className="m-3" src={saveMoney} alt="savemoney" />
                            <h6 style={{ marginTop: 45 }}>Lorem ipsum dolor sit.</h6>
                        </div>
                        <p>
                            adipisicing elit. Nemo, veritatis nihil. Dolorum quisquam sint,
                            incidunt odio, vel dolores dicta nulla cumque error consequuntur
                            quibusdam nobis ut accusantium consequatur ex consectetur.
                        </p>
                        <button className="btn btn-primary">Check Pricing</button>
                    </div>
                </div>
                <div id="section3" className="row">
                    <div className="col-md-6" />
                    <div className="col-md-6">
                        <div className="d-flex">
                            <img className="m-3" src={accuRacy} alt="savemoney" />
                            <h6 style={{ marginTop: 45 }}>Lorem ipsum dolor sit.</h6>
                        </div>
                        <p>
                            adipisicing elit. Ut sed commando est.Pellentesqueeu placerat
                            mauris. ut maximus ante. Suspendisse
                        </p>
                        <button className="btn btn-primary">Check Pricing</button>
                    </div>
                </div>
                <div id="section3" className="row">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <img className="m-3" src={hiring} alt="savemoney" />
                            <h6 style={{ marginTop: 45 }}>Lorem ipsum dolor sit.</h6>
                        </div>
                        <p>
                            adipisicing elit. Nemo, veritatis nihil. Dolorum quisquam sint,
                            incidunt odio, vel dolores dicta nulla cumque error consequuntur
                            quibusdam nobis ut accusantium consequatur ex consectetur.
                        </p>
                        <button className="btn btn-primary">Check Pricing</button>
                    </div>
                </div>
                <div id="section3" className="row">
                    <div className="col-md-6" />
                    <div className="col-md-6">
                        <div className="d-flex">
                            <img className="m-3" src={moneyBack} alt="savemoney" />
                            <h6 style={{ marginTop: 45 }}>Lorem ipsum dolor sit.</h6>
                        </div>
                        <p>
                            adipisicing elit. Ut sed commando est.Pellentesqueeu placerat
                            mauris. ut maximus ante. Suspendisse
                        </p>
                        <button className="btn btn-primary">Check Pricing</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section4