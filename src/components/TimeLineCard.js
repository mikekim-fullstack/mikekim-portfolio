import React from 'react'
import './TimeLineCard.css'
const TimeLineCard = ({ role, company, site, period, description, responsibility, style }) => {
    return (
        <div className='timeline-card item' style={style}>
            <h4 className='role'>{role}</h4>
            <a href={site} target='_blank' className='company'>{company}</a>
            <h5 className='period'>{period}</h5>
            <p className='description'>{description}</p>
            {responsibility && <>
                <h5 className='responsibility'>Responsibilities</h5>
                <ul className='lists'>
                    {
                        responsibility.map((res, index) => <li key={index}>{res}</li>)
                    }
                </ul></>
            }


        </div>
    )
}

export default TimeLineCard