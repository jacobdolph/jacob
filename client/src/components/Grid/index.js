import React from "react";


export function Container({ container, children }) {
    return <div className={container ? "container" : ""}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ children }) {
    return <div className="row" style={{ height: '100%' }}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={`col ${size}`} style={{ padding: '0', height: 'inherit' }}
        >
            {children}
        </div>
    );
}
export function Img({ circle, src, cAlign }) {
    return <img style={{ width: '15rem', margin: '1rem', border: "solid", borderColor: "#f57c00" }} src={src} alt="" className={`${circle ? "circle responsive-img" : ""} ${cAlign ? "center-align" : ""}`} />
}
