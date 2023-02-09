import CardCertificates from '../../components/CardCertificate'
import cfcertificate from '../../assets/images/EducationalCertificates/JavaScriptDOM.webp'

export default function EducationalCertificates(){
    return(
        <section>
            <h2>Educational Certificates</h2>
            <article className="project-home">
                <CardCertificates year="2022" name="JavaScript and DOM" organization="Codigofacilito" cover={cfcertificate}/>
                <CardCertificates year="2022" name="JavaScript and DOM" organization="Codigofacilito" cover={cfcertificate}/>
                <CardCertificates year="2022" name="JavaScript and DOM" organization="Codigofacilito" cover={cfcertificate}/>
                <CardCertificates year="2022" name="JavaScript and DOM" organization="Codigofacilito" cover={cfcertificate}/>
                <CardCertificates year="2022" name="JavaScript and DOM" organization="Codigofacilito" cover={cfcertificate}/>
                <CardCertificates year="2022" name="JavaScript and DOM" organization="Codigofacilito" cover={cfcertificate}/>
            </article>
        </section>
    )
}