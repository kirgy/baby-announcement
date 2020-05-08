import React, { Component } from 'react';
import imgChris from "../images/chris.png";

export default function AvatarChris(props) {
    return (
        <img src={imgChris} className={(props.fadeOut) ? 'pokeFade' : ''}/>
    );
}