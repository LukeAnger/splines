import React, { useState } from "react";
import Spline from '@splinetool/react-spline';
import Loading from "./Loading.jsx";
const WitchHut = () => {
    const [isSceneLoaded, setIsSceneLoaded] = useState(false);

    const handleLoad = () => {
        setIsSceneLoaded(true);
        // You can add additional logic here after the scene is loaded
    };

    const handleError = (error) => {
        console.error("Error loading scene:", error);
        // You can handle the error or display an error message here
    };

    return (
        <div id="spline-content">
            {/* {!isSceneLoaded && (
                // Your custom loading animation goes here
                <Loading />
            )} */}
            <iframe src='https://my.spline.design/untitled-d60137379ad5c1e7f18badc4581e6e20/' frameBorder='0' width='100%' height='100%'></iframe>
        </div>
    );
};

export default WitchHut;
