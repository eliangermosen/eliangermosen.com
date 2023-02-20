import './Chip.css'

export default function Chip({children}) {
    return(
        <small href="/" className="chip" translate="no">
            {children}
        </small>
    )
}