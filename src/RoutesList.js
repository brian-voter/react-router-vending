import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Doritos from "./snacks/Doritos";
import RandomFruit from "./snacks/RandomFruit";
import Onigiri from "./snacks/Onigiri";
import VendingMenu from "./VendingMenu";

function RoutesList() {

    return (
        <Routes>
            <Route path="/" element={<VendingMenu/>}/>
            <Route path="/doritos" element={<Doritos/>}/>
            <Route path="/randomFruit" element={<RandomFruit/>}/>
            <Route path="/onigiri" element={<Onigiri/>}/>
        </Routes>
    );

}

export default RoutesList;