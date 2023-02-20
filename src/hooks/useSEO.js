import { useEffect } from "react";

export default function useSEO({title}) {

    useEffect(() => {

        if(title){
            document.title = `${title} · Elian Germosen`
        };

        //componentdidmount: execute the function and update title for the original
        return () => document.title = 'Elian Germosen · Web Developer';
    },[title]);

}