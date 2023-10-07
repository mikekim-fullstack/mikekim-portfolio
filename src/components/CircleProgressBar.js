import React, { useState, useEffect } from 'react'
import './CircleProgressBar.css'
const CircleProgressBar = ({ title, value, size, color, bgColor, start }) => {
    const [newBgColor, setNewBgColor] = useState(bgColor)
    useEffect(() => {

        // Change only alpha of bgColor if it is not provided...
        if (!bgColor && color) {
            let bg = color.split(',')
            if (bg.length === 4) {
                bg[3] = '0.5)'
                setNewBgColor(bg.join(','))
            }
        }
    }, [])
    return (
        <div className='circle-progress-bar'>
            <div className={`meter ${start ? 'animation' : ''}`} style={{ '--value': `${value}`, '--num': `${value}`, '--size': `${size}px`, '--color': color, '--bg': newBgColor }}></div>
            <p className='title'>{title}</p>
        </div>
    )
}

export default CircleProgressBar