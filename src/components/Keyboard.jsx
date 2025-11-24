import { useState } from 'react'
import './styles/Keyboard.css'
import uppercaseKey from '../assets/keyboard-assets/uppercase.png'
import backspaceKey from '../assets/keyboard-assets/backspace.png'
import globeKey from '../assets/keyboard-assets/globe.png'
import micKey from '../assets/keyboard-assets/mic.png'
import returnKey from '../assets/keyboard-assets/return.png'

function Keyboard() {
    return (
        <aside id="keyboard">
            <div className="keyboard-row">
                <kbd>q</kbd>
                <kbd>w</kbd>
                <kbd>e</kbd>
                <kbd>r</kbd>
                <kbd>t</kbd>
                <kbd>y</kbd>
                <kbd>u</kbd>
                <kbd>i</kbd>
                <kbd>o</kbd>
                <kbd>p</kbd>
            </div>
            <div className="keyboard-row">
                <kbd>a</kbd>
                <kbd>s</kbd>
                <kbd>d</kbd>
                <kbd>f</kbd>
                <kbd>g</kbd>
                <kbd>h</kbd>
                <kbd>j</kbd>
                <kbd>k</kbd>
                <kbd>l</kbd>
            </div>
            <div className="keyboard-row">
                <kbd className="kbd-wider kbd-dark-blue"><img src={uppercaseKey} alt="uppercase"/></kbd>
                <kbd>z</kbd>
                <kbd>x</kbd>
                <kbd>c</kbd>
                <kbd>v</kbd>
                <kbd>b</kbd>
                <kbd>n</kbd>
                <kbd>m</kbd>
                <kbd className="kbd-wider kbd-dark-blue"><img src={backspaceKey} alt="backspace" /></kbd>
            </div>
            <div className="keyboard-row">
                <kbd className="kbd-wider kbd-vibrant-pink kbd-switchToNum">123</kbd>
                <kbd className="kbd-dark-blue"><img src={globeKey} alt="switch language" /></kbd>
                <kbd>,</kbd>
                <kbd className="kbd-space">space</kbd>
                <kbd>.</kbd>
                <kbd className="kbd-dark-blue"><img src={micKey} alt="use mic" /></kbd>
                <kbd className="kbd-wider kbd-vibrant-pink"><img src={returnKey} alt="return" /></kbd>
            </div>
        </aside>
    )
}

export default Keyboard