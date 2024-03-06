
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Images/images.jpg";
import food from "./Images/kfc.jpg";

const Header = () => {
    return <div id="head" className="flex border border-black m-1 justify-between rounded-md hover:border-2">
        <div>
        <img src={logo} alt="res_logo" className="w-16 h-16"></img>
        </div>
        <div className="self-center">
            <ul className="flex text-xl mr-4 font-bold">
                <li className="mx-3 hover:text-red-300">Home</li>
                <li className="mx-3 hover:text-red-300">About</li>
                <li className="mx-3 hover:text-red-300">Contact</li>
                <li className="mx-3 hover:text-red-300">Cart</li>
            </ul>
        </div>
    </div>
}

const RestContainer = ({name,cuisines}) => {
    return <div id="rest" className="w-52 h-56 border border-black m-4  rounded-md">
        <img src={food} alt="food_logo" className="w-52 h-32"></img>
        <h3 className="mx-1">{name}</h3>
        <p className="mx-1">{cuisines}</p>
        <p className="mx-1">4.8</p>
        <p className="mx-1">30 mins</p>
    </div>
}

const Body = () => {
    return <div id="body" className="m-2">
       <input type="search" placeholder="Search any restaurant" className="outline-none border border-black px-2 mx-4 py-1 rounded-md my-3"></input>
       <div className="flex flex-wrap">
       <RestContainer name="KFC" cuisines="Chicken Burger,Wings"/>
       <RestContainer name="Pizza Hut" cuisines="Veg/Non-Veg Pizzas"/>
       <RestContainer name="MacD" cuisines="Burger,Maharaja"/>
       
       </div>
    </div>
}

const Applayout = () => {
    return <div id="app">
        <Header/>
        <Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>)
