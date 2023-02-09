import './CardCertificate.css'

export default function CardCertificates({year, name, organization, cover}){
    return(
        <article className="card">
            <figure className="fig-card">
                <img src={cover} alt={`Title ${name} of ${organization}`} />
            </figure>
            <h3 className="m-0">{name}</h3>
            <small>{year} · {organization}</small>
        </article>
    )
}