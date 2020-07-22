import React from 'react';


function Card(props) {

    return (

        <div className="col s12 m6 item" id={props.id} style={{ padding: '0' }} >

            <div className="card" style={{ border: 'solid thin ', margin: '0 1rem 3rem 1rem' }}>
                <div className="card-image">
                    <img src={props.img} alt='application image' style={{ height: "175px", overflow: "hidden" }} />
                </div>
                <div className="card-stacked" style={{ padding: '1rem 0 0 2rem' }}>
                    <span className="card-title activator grey-text text-darken-2" style={{ padding: '0 0 0 0' }} >{props.title}<i className="material-icons right">more_vert</i></span>
                    <p><a rel="noopener noreferrer" target='_blank' href={props.link}>Application</a></p>
                </div>


                <div className="card-reveal" style={{ opacity: .9 }}>
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                    <p>{props.description}<br /><br /> Tech Stack<br />{props.tech} </p>
                </div>

                <div className="card-action" style={{ padding: '0 0 0 2rem', fontSize: '3rem' }}>
                    <a href={props.repo}>Repo</a>
                </div>
            </div>
        </div>


    )
}

export default Card;