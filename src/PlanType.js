import React from 'react';
import "./PlanType.css";

function PlanType(props) {
    return (
        <div className="profileScreen_planType">
            <div className="profileScreen_planInfo">
                <h3>Netflix {props.name}</h3>
                <p>{props.hd}</p>
            </div>
            <button 
                className={(props.sub === false) ? "notSubbed" : "subbed"}
            >
                {(props.sub === false) ? "Subscribe" : "Current Package"}
            </button>
        </div>
    )
}

export default PlanType;
