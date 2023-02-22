import './CardCertificate.css'

export default function CardCertificates({year, name, organization, cover}){
    return(
        <article className="flex card">
            <figure className="fig-card">
                <img src={cover} alt={`${organization} ${name} Title`} />
            </figure>
            <div className="info-card">
                <h3 className="m-0" translate="no">{name}</h3>
                <div>
                    <small translate="no">{year} · {organization}</small>
                </div>
            </div>
        </article>
    )
}