import './Timeline.css'

export default function Timeline({name, enterprise, logo, startDate, endDate, summary}){
    return(
        <article className="timeline flex">
            <div className="timeline-enterprise">
                <figure className="timeline-logo">
                    <img src={logo} alt={`${enterprise} logo`}/>
                </figure>
                {/* <span className="dot"></span> */}
            </div>
            {/* <div className="dot-div"></div> */}
            <div className="timeline-info">
                <span className="dot-psd"></span>
                <h3 className="m-0">{name}</h3>
                <h4 className="m-0">{enterprise}</h4>
                <small>{startDate} - {endDate}</small>
                <p>{summary}</p>
            </div>
        </article>
    )
}