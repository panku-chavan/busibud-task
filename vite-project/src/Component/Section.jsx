import React from 'react'
import maskGroup from "./assets/mask-group.png"
import "./style.css"

const Section = () => {
    return (
        <section>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="col-md-6">
                    <h1 className="lorem-text-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h1>
                    <p className="lorem-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
                        provident qui impedit facilis inventore fuga! Et voluptatum
                        tempora laboriosam placeat fuga suscipit sint eaque nihil,
                        delectus illum veritatis deleniti vel!
                    </p>
                    <button style={{ marginBottom: 30 }} className="btn btn-primary lorem-text">
                        Check Pricing
                    </button>
                </div>
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img width="400px" src={maskGroup} alt />
                </div>
            </div>
        </section>

    )
}

export default Section