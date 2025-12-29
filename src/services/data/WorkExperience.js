import Cerobucks from '../../assets/images/Enterprises/Cerobucks.webp'
import Mapre from '../../assets/images/Enterprises/MAPRE.webp'
import PoderJudicial from '../../assets/images/Enterprises/PoderJudicial.webp'

const WorkExperience = [
    {
        "id": 1,
        "order": 1,
        "image": Cerobucks,
        "title": "Front-End Developer",
        "enterprise": "Cerobucks, S.R.L",
        "date": {
            "start": {
                "year": 2022,
                "month": "January"
            },
            "end": {
                "year": 2022,
                "month": "April"
            }
        },
        "summary": `During this internship, I collaborated on B2B solutions using React within a SCRUM framework, focusing on modernizing the 
                    company website and improving the overall user experience. This experience allowed me to strengthen my remote development skills and 
                    collaborative work habits, ensuring the delivery of functional components aligned with business objectives.`
    },
    {
        "id": 2,
        "order": 2,
        "image": Mapre,
        "title": "Web Developer",
        "enterprise": "Ministerio Administrativo de la Presidencia (MAPRE)",
        "date": {
            "start": {
                "year": 2023,
                "month": "April"
            },
            "end": {
                "year": 2024,
                "month": "May"
            }
        },
        "summary": `I developed intuitive and responsive interfaces using React, .NET Core, and Web API, applying UI/UX principles to ensure 
                    a superior user experience. I participated in all stages of the development lifecycle for strategic internal projects, 
                    including the Room Reservation system for managing presidential spaces and the Vehicle Access Control application, 
                    which enhanced real-time institutional security. By implementing reusable components and following Onion Architecture 
                    practices, I ensured the delivery of maintainable and scalable code within a collaborative agile environment.`
    },
    {
        "id": 3,
        "order": 3,
        "image": PoderJudicial,
        "title": "Software Development Engineer",
        "enterprise": "Poder Judicial",
        "date": {
            "start": {
                "year": 2024,
                "month": "April"
            },
            "end": {
                "year": 0,
                "month": "Present"
            }
        },
        "summary": `In this role, I actively contribute to the digitalization of the Dominican justice system by developing and enhancing 
        the Case Management System (SGC), which manages critical judicial processes, hearings, and administrative procedures. 
        As Frontend Team Lead, I spearheaded the development of the National Hearing Roster (Rol Nacional de Audiencias) a public platform 
        for real-time consultation and the Hearing Viewer (Visor de Audiencias) currently implemented in courts nationwide. 
        Utilizing a modern stack, I focus on creating solutions that improve operational efficiency and ensure transparent access to judicial 
        information for all citizens.`
    }
]

export default WorkExperience