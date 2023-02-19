import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/reduxdata";
import Foodslide from "../carosel/carousel";
import Datas from "../../datas/data";
import './navbar.css';
function Navbar() {
    const cart = useSelector(selectCount);
    return (
        <div>
            <div className="navBar">
                <div id="logo-img">
                    <img width="50px" src="https://media1.thehungryjpeg.com/thumbs2/ori_3513978_c18543b50a46f5555d28ce6aaf27267cc0dbf812_natural-fresh-food-vegetables-logo-badge-vector-template.jpg" alt="logo-img" />
                </div>

                <div id="nav-search">
                    <img width="20px" src="https://www.pngfind.com/pngs/m/432-4323226_search-icon-transparent-search-button-png-png-download.png" />  <input type="text" id="top-in"></input>
                    <button id="nav-search-btn">Search</button>
                </div>
                <div>
                    <sub><img width="50px" id="crat-img" src="https://www.shutterstock.com/image-vector/shopping-cart-icon-apps-web-600w-2089453900.jpg" alt="cart-img" />
                    </sub>{cart}
                </div>
                <div>
                    <button id="profile-btn"><img width='45px' id="profile-img" src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" /></button>
                </div>
                <div>
                    <img width='40px' src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-64.png" />
                </div>

            </div>
            <Foodslide />
            <Datas />
        </div>


    )
}
export default Navbar