import CardCertificates from '../../components/CardCertificate'
import dataEducationalCertificates from '../../services/data/EducationalCertificates'

export default function EducationalCertificates(){
    
    return(
        <section>
            <h2>Educational Certificates</h2>
            <article className="project-home">
                {dataEducationalCertificates.map((certificate) => (
                    <CardCertificates
                        key={certificate.id} year={certificate.year} name={certificate.title} 
                        organization={certificate.organization} cover={certificate.image}
                    />
                ))}
            </article>
        </section>
    )
}