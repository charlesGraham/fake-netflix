import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="nav_contents">
            <div className="nav nav_black">
                <img 
                    className="nav_logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix Logo" 
                />

                <img
                    className="nav_avatar" 
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt="text" 
                />
            </div>
        </div>
    )
    
}

export default Nav;
