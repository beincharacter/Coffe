import React from "react";
import './Header.scss';
import { Icon } from "../../assets/Icons";

export const Header = () => {
    return (
        <>
            <div id="main_app_header" className="flex items-center mx-11 justify-between border-b border-black">
                <div className="logo_box600 flex items-center text-22" >
                    <Icon iconName='logo' /> The Coffee Cup
                </div>
                <nav className="nav_box flex w-2/5 h-full">
                    <ul className="flex justify-around items-center w-full">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Menu</li>
                        <li>Reviews</li>
                    </ul>
                </nav>
                <div className="cart search signup box flex justify-between items-center h-full">
                    <Icon iconName='cart'/>
                    <Icon iconName='search'/>
                    <div className="m-2 px-2 py-1 rounded-full bg-432010 text-white text-15">Signup</div>
                </div>
            </div>
        </>
    )
}