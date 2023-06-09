import React from 'react'
import topImg from "./assets/topimg.png"
import "./style.css"

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <div className=" ">
                    <img className="img" src={topImg} alt="img" />
                </div>
                <nav className="items">
                    <a href className="nav-link">Nav1</a>
                    <a href className="nav-link">Nav2</a>
                    {/* <a href="" class="nav-link">Nav3</a> */}
                    <select className="nav-link" name="Nave3" id>
                        <option value>Nav3</option>
                    </select>
                    {/* <a href="" class="nav-link">Nav4</a> */}
                    <select className="nav-link" name="Nav4" id>
                        <option value>Nav4</option>
                    </select>
                    <a href className="nav-link">Nav5</a>
                    <a href className="nav-link">Nav6</a>
                    <a href className="nav-link">Nav7</a>
                    <a href className="nav-link">Nav8</a>
                </nav>
            </div>
        </div>

    )
}

export default Header