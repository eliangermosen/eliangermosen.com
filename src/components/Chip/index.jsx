import './Chip.css'

export default function Chip(props) {
    return(
        <small href="/" className="chip" translate="no">
            {props.children}
            {/* JavaScript */}
        </small>
    )
}