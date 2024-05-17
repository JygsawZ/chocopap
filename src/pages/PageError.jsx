import {useRouteError} from "react-router-dom";

export function PageError() {
    const error = useRouteError()
    console.log(error)
    return <>
        <h1>Oups</h1>
    </>
}