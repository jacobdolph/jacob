import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });


    }

    render() {
        return (
            <div className='navbar-fixed'>
                <nav className='z-depth-0' style={{ backgroundColor: '#37474f' }}>
                    <div className='nav-wrapper'>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger left"><i className="material-icons" style={{ color: 'white' }}>menu</i></a>
                        <ul id='nav-mobile' className="left hide-on-med-and-down" style={{ margin: '0rem' }} >
                            <li className='waves-effect '><Link to='/' onClick={this.props.home} className='white-text ' >Home</Link></li>
                            <li><Link to='/' onClick={this.props.portfolio} className='white-text open'>Portfolio</Link></li>
                            <li><Link to='/' onClick={this.props.tech} className='white-text'>Tech</Link></li>
                        </ul>
                        <ul id='nav-mobile' className="right hide-on-med-and-down" style={{ margin: '0rem' }} >
                            <li><a href='https://linkedin.com/in/jacob-dolph-508a82bb' rel="noopener noreferrer" target='_blank' className='white-text'>LinkedIn</a></li>
                            <li><a href='https://github.com/jacobdolph' rel="noopener noreferrer" target='_blank' className='white-text'>Github</a></li>
                            <li><a id='resume' href='https://drive.google.com/file/d/1UNzogXdogaSg7oqvkZSs9z56ZCWf-Jpq/view?usp=sharing' rel="noopener noreferrer" target='_blank' className='white-text'>Resume</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Navbar;