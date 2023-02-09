import './Skill.css'

export default function Skill({name, time, logo}){
    return(
        <div className="skill-card flex">
            <img src={logo} alt={`${name} logo`} />
            <div className="skill-info flex">
                <p className="m-0">{name}</p>
                <small>+{time} Years</small>
            </div>
        </div>
    )
}