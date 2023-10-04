import './ProjectCards.scss'

const ProjectCards = ({ title, description, imgUrl, link, type }) => {

    const onClickCard = (link) => {
        // console.log('clicked')
        if (link) window.open(link, "_blank", "noreferrer");
    }

    return (

        <div className='proj-card'  >
            <div className={`proj-img ${type ? 'type-long' : ''}`} style={{ flex: `${type ? '1' : '5'}` }}>
                <img src={imgUrl} alt='imgUrl' />
            </div>
            <div className={`proj-txbx ${type ? 'type-long' : ''}`} style={{ flex: `${type ? '1' : '2'}` }}>
                <h4>{title}</h4>
                <ul className='desc'>{
                    description?.map((desc, index) => <li key={index}>{desc}</li>)
                }</ul>
                {link && <a className='link' href={link} target='_blank'>Go to the site</a>}
            </div>
        </div>

    )
}
export default ProjectCards