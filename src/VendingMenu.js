import { Link } from "react-router-dom";

function VendingMenu() {
    return (
        <div>
            <Link to="/doritos">Doritos</Link>
            <Link to="/randomFruit">Random Fruit</Link>
            <Link to="/onigiri">Onigiri</Link>
        </div>
    );
}

export default VendingMenu;