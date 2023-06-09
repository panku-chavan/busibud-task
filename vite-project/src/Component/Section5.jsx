import React, { useEffect, useState } from 'react'
import "./style.css"
import graphic from "./assets/graphic.png";
import john from "./assets/john.png";
import star from "./assets/start.png";
import amanda from "./assets/amanda.png";
import sam from "./assets/sam.png";

const Section5 = () => {
    const [dimention, setDimention] = useState({
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setDimention({
                width: window.innerWidth
            })
        }
        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <section>
            <h3 className="text-center">Lorem ipsum dolor sit.</h3>
            <div className={dimention.width <= 1200 ? "section41" : "section4"}>
                <div style={{ paddingTop: 20 }} className="d-flex">
                    <img className="m-4" height="60px" src={graphic} alt />
                    <h5 style={{ marginTop: 40 }}>Lorem ipsum dolor sit</h5>
                </div>
                <div className="s4-items d-flex flex-wrap">
                    <div className="s4-card">
                        <div style={{ marginBottom: 30 }} className="d-flex">
                            <img width="50px" height="50px" src={john} alt="john" />
                            <div>
                                <div style={{ fontSize: '', paddingLeft: 10 }} className="d-flex">
                                    <h6 style={{ fontSize: 15 }}>Jhon Doe</h6>
                                    <div style={{ paddingLeft: 45 }}>
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                    </div>
                                </div>
                                <span style={{ fontSize: 14, paddingLeft: 10 }}>CEO</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                            vel soluta nemo eligendi natus sit autem unde assumenda
                            laboriosam, animi nesciunt accusantium atque ratione cumque iste
                            quam necessitatibus ipsum repellat.
                        </p>
                    </div>
                    <div className="s4-card">
                        <div style={{ marginBottom: 30 }} className="d-flex">
                            <img width="50px" height="50px" src={amanda} alt="john" />
                            <div>
                                <div style={{ paddingLeft: 10 }} className="d-flex">
                                    <h6 style={{ fontSize: 15 }}>Amanda Green</h6>
                                    <div style={{ paddingLeft: 20 }}>
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                    </div>
                                </div>
                                <span style={{ fontSize: 14, paddingLeft: 10 }}>Operations Manager</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                            vel soluta nemo eligendi natus sit autem unde assumenda
                            laboriosam, animi nesciunt accusantium atque ratione cumque iste
                            quam necessitatibus ipsum repellat.
                        </p>
                    </div>
                    <div className="s4-card">
                        <div style={{ marginBottom: 30 }} className="d-flex">
                            <img width="50px" height="50px" src={sam} alt="john" />
                            <div>
                                <div style={{ paddingLeft: 10 }} className="d-flex">
                                    <h6 style={{ fontSize: 15 }}>Sam Cooper</h6>
                                    <div style={{ paddingLeft: 20 }}>
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                        <img width="15px" height="15px" src={star} alt="star" />
                                    </div>
                                </div>
                                <span style={{ fontSize: 14, paddingLeft: 10 }}>Customer Service Manager</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                            vel soluta nemo eligendi natus sit autem unde assumenda
                            laboriosam, animi nesciunt accusantium atque ratione cumque iste
                            quam necessitatibus ipsum repellat.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: 300 }} />
        </section>

    )
}

export default Section5