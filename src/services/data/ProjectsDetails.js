// Pokedex
import ResultPokedex from '../../assets/images/Projects/Pokedex/Result.webp'
import SearchPokedex from '../../assets/images/Projects/Pokedex/Search.webp'
// Giffy
import HomeGiffy from '../../assets/images/Projects/Giffy/Home.webp'
import SearchGiffy from '../../assets/images/Projects/Giffy/Search.webp'
// MusicArt
import HomeMusicArt from '../../assets/images/Projects/MusicArt/Home.webp'
import DetailMusicArt from '../../assets/images/Projects/MusicArt/Detail.webp'
// TvShow
import HomeTvShow from '../../assets/images/Projects/TvShow/Home.webp'
import DetailTvShow from '../../assets/images/Projects/TvShow/Detail.webp'
// Student Control
import HomeStudentControl from '../../assets/images/Projects/StudentControl/Home.webp'
import GradesStudentControl from '../../assets/images/Projects/StudentControl/Grades.webp'
import AttendanceStudentControl from '../../assets/images/Projects/StudentControl/Attendance.webp'
// Web Trailers
import HomeTrailers from '../../assets/images/Projects/Trailers/Home.webp'
import DetailTrailers from '../../assets/images/Projects/Trailers/Detail.webp'
//Confidential
import Confidential from '../../assets/images/Projects/Confidential/Confidential.webp'

const ProjectsDetails = [
    {
        "id": 1,
        "favorite": true,
        "images": [
            ResultPokedex,
            SearchPokedex
        ],
        "name": "Pokedex",
        "technologies": [
            "React"
        ],
        "url": {
            "repository": "https://github.com/eliangermosen/Pokedex",
            "deployed": "https://pokedex-elian.vercel.app/"
        },
        "summary": [
            "Pokedex with the functionality: filter all Pokémon, Responsive design just with CSS, useEffect, useState, customHooks and so on.",
            "I started this project doing the UI Design in figma. The API that i used it is PokéAPI."
        ],
        "next": "Giffy",
        "previous": null
    },
    {
        "id": 2,
        "favorite": false,
        "images": [
            HomeGiffy,
            SearchGiffy
        ],
        "name": "Giffy",
        "technologies": [
            "React "
        ],
        "url": {
            "repository": "https://github.com/eliangermosen/Giffy",
            "deployed": "https://giffy-elian.netlify.app/"
        },
        "summary": [
            "Gifs finder in React with hooks, custom hooks, lazy load, suspense, infinite scroll, style components, css, test with React Testing Library and munch more.",
            "I developed this project taking a course of @midudev and we used the API of GIPHY."
        ],
        
        "next": "MusicArt",
        "previous": "Pokedex"
    },
    {
        "id": 3,
        "favorite": false,
        "images": [
            HomeMusicArt,
            DetailMusicArt
        ],
        "name": "MusicArt",
        "technologies": [
            "HTML + CSS",
            "JavaScript"
        ],
        "url": {
            "repository": "https://github.com/eliangermosen/musicArt",
            "deployed": "https://eliangermosen.github.io/musicArt"
        },
        "summary": [
            "Web Page where you can search and sing the Song of your favorites Artists and at the same time read him/her biography. I used for the Stack for this project HTML, CSS and JavaScript.",
            "I used two API: AUDIO DB for the biography of the artist and lyrics.ovh for the lyrics of the song. I started this project doing the UI Design in figma"
        ]
        ,
        "next": "TvShow",
        "previous": "Giffy"
    },
    {
        "id": 4,
        "favorite": true,
        "images": [
            HomeTvShow,
            DetailTvShow
        ],
        "name": "TvShow",
        "technologies": [
            "HTML + CSS",
            "JavaScript"
        ],
        "url": {
            "repository": "https://github.com/eliangermosen/tvshow",
            "deployed": "https://eliangermosen.github.io/tvshow"
        },
        "summary": [
            "Web Page where you can search all your favorite Shows. With the Stack HTML, CSS and JavaScript.",
            "I used TVmaze API: For the info of the shows. I started this project doing the UI Design in figma."
        ],
        "next": "Student Control",
        "previous": "MusicArt"
    },
    {
        "id": 5,
        "favorite": false,
        "images": [
            HomeStudentControl,
            GradesStudentControl,
            AttendanceStudentControl
        ],
        "name": "Student Control",
        "technologies": [
            "Angular",
            ".Net Core",
            "Web API",
            "SQL Server"
        ],
        "url": {
            "repository": "https://github.com/eliangermosen/ControlEstudiantil",
            "deployed": null
        },
        "summary": [
            "This is the Frontend of a Full Stack project developed to the teachers be able to manage the grades and attendance of theirs students.",
            "The libraries that I used are Angular Material, ngx-charts, jspdf and SweetAlert2. If you want to see the backend of the project go to my GitHub account for more."
        ],
        "next": "Web Trailers",
        "previous": "TvShow"
    },
    {
        "id": 6,
        "favorite": false,
        "images": [
            HomeTrailers,
            DetailTrailers
        ],
        "name": "Web Trailers",
        "technologies": [
            "Angular",
            ".Net Core",
            "Web API",
            "SQL Server"
        ],
        "url": {
            "repository": "https://github.com/WilkendrysCastillo16/Programacion-Web-Trailers",
            "deployed": null
        },
        "summary": [
            "Web page to management movies trailers. There are two types of user: Client and Admin that is controled with a optional login. The Admin can publish, edit and delete movies trailers.",
            "This is a collaborative project with some of my classmates from ITLA. If you want to see the backend of the project go to my GitHub account for more."
        ],
        "next": "National Hearing Roster",
        "previous": "Student Control"
    },
    {
        "id": 7,
        "favorite": true,
        "images": [Confidential],
        "name": "National Hearing Roster",
        "technologies": ["React", ".NET Core", "Web API", "SQL Server"],
        "url": { "repository": null, "deployed": null },
        "summary": [
            "Role: Frontend Team Lead. A high-impact public platform developed for the Dominican Judicial Branch that allows citizens to consult the status and schedule of judicial hearings nationwide in real-time.",
            "This project is a pillar of the digital transformation of the justice system, significantly increasing transparency and accessibility for the general public."
        ],
        "next": "Case Management System",
        "previous": "Web Trailers"
    },
    {
        "id": 8,
        "favorite": false,
        "images": [Confidential],
        "name": "Case Management System",
        "technologies": [".NET Core", "SQL Server", "Web API"],
        "url": { "repository": null, "deployed": null },
        "summary": [
            "Role: Software Developer. An intensive internal system (BackOffice) used by the Judicial Branch to administer cases, legal procedures, hearings, and various internal judicial workflows.",
            "Contributed to the complete digitalization of the Dominican justice system, improving operational efficiency and the administration of judicial records."
        ],
        "next": "Vehicle Access Control",
        "previous": "National Hearing Roster"
    },
    {
        "id": 9,
        "favorite": false,
        "images": [Confidential],
        "name": "Vehicle Access Control",
        "technologies": ["React", ".NET Core", "Web API", "SQL Server"],
        "url": { "repository": null, "deployed": null },
        "summary": [
            "Role: Full-Stack Developer. A real-time security application designed for the Presidential Palace to register and monitor every vehicle entering the premises.",
            "Enhanced the security protocols of the Dominican Republic's Presidential Palace by providing a continuous and reliable digital log of vehicle movement."
        ],
        "next": "Room Reservation System",
        "previous": "Case Management System"
    },
    {
        "id": 10,
        "favorite": true,
        "images": [Confidential],
        "name": "Room Reservation System",
        "technologies": ["React", ".NET Core", "Web API", "SQL Server"],
        "url": { "repository": null, "deployed": null },
        "summary": [
            "Role: Full-Stack Developer. A comprehensive scheduling solution created for the Presidential Palace to manage the booking and coordination of all public and private meeting rooms.",
            "Streamlined administrative operations within the Presidential Palace, eliminating scheduling conflicts for high-level government meetings."
        ],
        "next": null,
        "previous": "Vehicle Access Control"
    }
]

export default ProjectsDetails