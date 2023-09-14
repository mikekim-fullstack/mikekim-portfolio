import React, { useState, useEffect } from 'react'
import './StickProgressBar.css'
const StickProgressBar = ({ title, value, size, color, bgColor, start }) => {
    const [newBgColor, setNewBgColor] = useState(bgColor)
    useEffect(() => {

        // Change only alpha of bgColor if it is not provided...
        if (!bgColor && color) {
            let bg = color.split(',')
            if (bg.length === 4) {
                bg[3] = '0.5)'
                setNewBgColor(bg.join(','))
            }
            // console.log('bgColor', bg.join(','))
        }
    }, [])
    return (
        <div className='stick-progress-bar' style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px' }}>
            <div className='title'>{title}</div>
            <div className={`meter ${start ? 'animation' : ''}`} style={{ '--size': `${size}`, '--color': color, '--bg': newBgColor }}>
                <div style={{ '--value': value }}></div>
            </div>

        </div>
    )
}

export default StickProgressBar