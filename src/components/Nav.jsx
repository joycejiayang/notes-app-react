import { useState } from 'react'
import './styles/Nav.css'
import homeIconActive from '../assets/home-active.svg'
import starIcon from '../assets/starred.svg'
import trashIcon from '../assets/trash.svg'

function Nav() {
    return (
        <nav className="nav">
            <div className="menu-item menu-item--active">
                <div className="menu-icon-container">
                    <img src={homeIconActive} />
                </div>
                <span>Notes</span>
            </div>
            <div className="menu-item">
                <div className="menu-icon-container">
                    <img src={starIcon} />
                </div>
                <span>Starred</span>
            </div>
            <div className="menu-item">
                <div className="menu-icon-container">
                    <img src={trashIcon} />
                </div>
                <span>Deleted</span>
            </div>
        </nav>
    )
}

export default Nav