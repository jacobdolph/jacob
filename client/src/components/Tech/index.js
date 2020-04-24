import React from 'react';
import MongoDb from './mongodb-leaf@4x.png';
import MySql from './mysql-workbench-icon.png';
function Tech() {
    return (
        <div>
            <div id="tech" className="technologies container">
                <div className="tech center">
                    <div className="icons col s6 m3 ">
                        <i className="fab fa-react blue-text text-lighten-3" style={{ fontSize: '5rem' }}></i><br />
                        <p style={{ fontSize: "2rem", color: "#555555" }}>React</p>
                    </div>
                    <div className="icons col s6 m3 ">
                        <i className="fab fa-html5 red-text text-lighten-3" style={{ fontSize: '5rem' }}></i><br />
                        <p style={{ fontSize: "2rem", color: "#555555" }}>HTML5</p>
                    </div>
                    <div className="icons col s6 m3">
                        <i className="fab fa-css3-alt blue-text text-lighten-3" style={{ fontSize: '5rem' }}></i>
                        <p style={{ fontSize: "2rem", color: "#555555" }}>CSS</p>
                    </div>
                    <div className="icons col s6 m3">
                        <i className="fab fa-js yellow-text text-lighten-3" style={{ fontSize: '5rem' }}></i>
                        <p style={{ fontSize: "2rem", color: "#555555" }}>JavaScript</p>
                    </div>
                </div>
                <div className="tech center">
                    <div className="icons col s6 m3">
                        <i className="fab fa-node-js green-text text-lighten-3" style={{ fontSize: '5rem' }}></i>
                        <p style={{ fontSize: "2rem", color: "#555555" }}>Node</p>
                    </div>
                    <div className="icons col s6 m3">
                        <img src={MongoDb} style={{ height: "4.5rem" }} alt="mysql-workbench" />
                        <p style={{ fontSize: "2rem", color: "#555555" }}>MongoDb</p>
                    </div>
                    <div className="icons col s6 m3">
                        <img src={MySql} style={{ height: '4.5rem' }} alt="mysql-workbench"
                        />
                        <p style={{ fontSize: "2rem", color: "#555555" }}>MySql</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Tech;