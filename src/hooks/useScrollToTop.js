import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTop({title}) {

    const {pathname} = useLocation();

    // GO TO TOP JUST WHEN PATHNAME CHANGE
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname]);

}