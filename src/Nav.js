import React from 'react';
import './nav.css'
import { Link, useLocation } from 'react-router-dom';


const ROUTE_NAMES = {
    "/doritos": "Doritos",
    "/randomFruit": "Random Fruit",
    "/onigiri": "Onigiri"
};

function Nav() {
    const currentPath = useLocation().pathname;

    //TODO: docstring
    function getRouteNameElem(routeName) {
        const text = ROUTE_NAMES[routeName];

        return routeName === currentPath ?
            <b>{text}</b> : text;
    }

    return (
        <nav>
            {Object.keys(ROUTE_NAMES).map(route =>
                <div className="link">
                    <Link
                    key={route}
                    to={route}>{getRouteNameElem(route)}</Link>
                </div>
            )}
        </nav>
    );

}

export default Nav;