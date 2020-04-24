import React from "react";


function Wrapper(props) {
    return <div style={{ margin: "2rem", padding: '2rem 0 2rem 0', backgroundColor: "white" }} className="wrapper z-depth-1">{props.children}</div>;
}

export default Wrapper;
