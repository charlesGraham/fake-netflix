import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from '../Nav';
import { auth } from "../firebase";
import "./ProfileScreen.css";
import PlanType from '../PlanType';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                        alt="profile"
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <p>Renewal Date: 10/12/2022</p>
                            <PlanType name={"Standard"} hd={"1080p"} sub={false} />
                            <PlanType name={"Basic"} hd={"720p"} sub={false} />
                            <PlanType name={"Premium"} hd={"4K + HDR"} sub={true} />
                            <button
                                onClick={() => auth.signOut()} 
                                className="profileScreen_signOut">
                                    Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
