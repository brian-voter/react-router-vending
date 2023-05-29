import { Link } from "react-router-dom";
import "./menu.css"


function VendingMenu() {
    return (
        <div>
            <div className="menu-link">
                <Link to="/doritos">Doritos</Link>
            </div>
            <div className="menu-link">
                <Link to="/randomFruit">Random Fruit</Link>
            </div>
            <div className="menu-link">
                <Link to="/onigiri">Onigiri</Link>
            </div>
        </div>
    );
}

export default VendingMenu;