import CardCertificates from '../../components/CardCertificate'
import ITLACertificate from '../../assets/images/EducationalCertificates/Itla.webp'
import JsDOMCertificate from '../../assets/images/EducationalCertificates/JavaScriptDOM.webp'
import VersionControlCertificate from '../../assets/images/EducationalCertificates/VersionControl.webp'
import RemoteWorkCertificate from '../../assets/images/EducationalCertificates/RemoteWork.webp'
import EnglishCertificate from '../../assets/images/EducationalCertificates/English.webp'
import EnglishExcellenceCertificate from '../../assets/images/EducationalCertificates/EnglishExcellence.webp'

export default function EducationalCertificates(){
    
    return(
        <section>
            <h2>Educational Certificates</h2>
            <article className="project-home">
                <CardCertificates
                    year="2022" name="Software Developer" 
                    organization="Instituto Tecnológico de las Américas (ITLA)" cover={ITLACertificate}
                />
                <CardCertificates
                    year="2022" name="JavaScript and DOM" 
                    organization="Codigofacilito" cover={JsDOMCertificate}
                />
                <CardCertificates
                    year="2021" name="Git & GitHub Version Control" 
                    organization="Capacítate para el empleo" cover={VersionControlCertificate}
                />
                <CardCertificates
                    year="2021" name="Remote Work" 
                    organization="Capacítate para el empleo" cover={RemoteWorkCertificate}
                />
                <CardCertificates
                    year="2017" name="English" 
                    organization="Success Institute" cover={EnglishCertificate}
                />
                <CardCertificates
                    year="2017" name="English Excellence" 
                    organization="Success Institute" cover={EnglishExcellenceCertificate}
                />
            </article>
        </section>
    )
}