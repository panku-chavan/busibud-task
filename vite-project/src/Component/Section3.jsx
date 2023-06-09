import React from 'react'
import "./style.css";
import artWork1 from "./assets/artwork1.png"
import artWork2 from "./assets/artwork2.png"
import artWork3 from "./assets/artwork3.png"

const Section3 = () => {
    return (
        <section>
            <div>
                <h3 className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h3>
                <div className="cards d-flex flex-wrap">
                    <div className="card1">
                        <img width="244px" height={188} src={artWork1} alt />
                        <h6 className="text-center">Lorem ipsum dolor sit.</h6>
                        <p className="cardp">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Excepturi, possimus. Ducimus, qui neque itaque doloremque
                            deserunt accusamus dolorum excepturi facere in, voluptates
                            eligendi aliquid nihil culpa nam consequatur laudantium a.
                        </p>
                    </div>
                    <div className="card1">
                        <img width="244px" height={188} src={artWork2} alt />
                        <h6 className="text-center">Lorem ipsum dolor sit.</h6>
                        <p className="cardp">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                            ea vitae quia, delectus possimus, laudantium sequi illo deserunt
                            fugit a, sint dolore excepturi! In praesentium sapiente porro
                            hic voluptatum harum.
                        </p>
                    </div>
                    <div className="card1">
                        <img width="244px" height={188} src={artWork3} alt />
                        <h6 className="text-center">Lorem ipsum dolor sit.</h6>
                        <p className="cardp">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                            culpa aliquam ex tempora et, similique dignissimos aut in
                            maiores, deserunt sit quidem assumenda sed laudantium officia
                            vel non pariatur mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section3