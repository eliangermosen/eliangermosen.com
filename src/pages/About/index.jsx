import AboutMe from '../../section/AboutMe'
import WorkExperience from '../../section/WorkExperience'
import Education from '../../section/Education'
import EducationalCertificates from '../../section/EducationalCertificates'
import Skills from '../../section/Skills'

export default function About() {
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