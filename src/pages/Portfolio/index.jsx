import Projects from '../../section/Projects'
import useSEO from '../../hooks/useSeo'

export default function Portfolio() {

    useSEO({title: 'My Projects'});

    return(
        <main className="content-page">
            <Projects/>
        </main>
    )
}