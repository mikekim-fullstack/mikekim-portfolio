import React, { useState, useEffect } from 'react'
import './ReadMore.css'

const ReadMore = ({ content }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <div className={`read-more-content ${isExpanded ? 'expanded' : 'collapsed'}`}
                onClick={() => setIsExpanded(prev => !prev)}>
                {content}
            </div>
            {!isExpanded && <p className='info' onClick={() => setIsExpanded(prev => !prev)}>Read More</p>}
        </>
    )
}

export default ReadMore