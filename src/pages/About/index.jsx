import AboutMe from '../../section/AboutMe'
import WorkExperience from '../../section/WorkExperience'
import Education from '../../section/Education'
import EducationalCertificates from '../../section/EducationalCertificates'
import Skills from '../../section/Skills'
import useSEO from '../../hooks/useSEO'

export default function About() {
    
    useSEO({title: 'About Me'});

    return(
        <main className="content-page">
            <AboutMe/>
            <WorkExperience/>
            <Education/>
            <EducationalCertificates/>
            <Skills/>
        </main>
    )
}