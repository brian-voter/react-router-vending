import { render } from "react-dom";
import { Link } from "react-router-dom";

function Onigiri() {

    function displayOnigiri() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const imageWidth = 150;
        const imageHeight = 100;

        const randomX = Math.floor(Math.random() * (windowWidth - imageWidth));
        const randomY = Math.floor(Math.random() * (windowHeight - imageHeight));

        const onigiriStyle = {
            position: "absolute",
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            top: `${randomY}px`,
            left: `${randomX}px`
        };

        render(

            <img key="onigiri" style={onigiriStyle} src="./onigiri.png" alt="onigiri" />,

            document.getElementById('onigiri-container')


        );
    }

    return (
        <div>
            <p>Rice is nice</p>
            <button onClick={displayOnigiri}>
                Take 1
            </button>
            <Link to="/"> Go Back </Link>
            <div id="onigiri-container">

            </div>
        </div>

    );

}

export default Onigiri;