import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Redirect
} from "react-router-dom";
import {useCookies} from "react-cookie";


export default function CookiesRedirect() {
    const [cookies, setCookie, removeCookie] = useCookies(['announce']);

    // return "";

    let hasLanded = cookies.get('landed');

    if(!hasLanded) {
        setCookie('landed', "true");
    }

    return ( (hasLanded == "true") ? null : <Redirect to="/" />)
}