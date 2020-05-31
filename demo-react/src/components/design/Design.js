import React, { useState } from "react";
import "./Design.css";

export default function Design({ topic, description }) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="designContainer">
                <div className="section">
                    <h1>Items</h1>
                </div>
                <div className="section design" >
                    <h1>Design</h1>
                </div>
                <div className="section suggestions">
                    <h1>Suggestions</h1>
                    <div className="subgroup">
                        <div className="sub">
                            <h1>Cost</h1>
                        </div>
                        <div className="sub">
                            <h1>Availibility</h1>
                        </div>
                        <div className="sub">
                            <h1>Scalibility</h1>
                        </div>
                        <div className="sub">
                            <h1>Fault tolerence</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
