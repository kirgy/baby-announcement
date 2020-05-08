import React, { Component } from 'react';
import imgLucy from "../images/lucy.png";

export default function AvatarLucy(props) {
    return (
        <img src={imgLucy} className={(props.fadeOut) ? 'pokeFade' : ''} style={{
            "-webkit-transform": "scaleX(-1)",
            "transform": "scaleX(-1)"
        }}/>
    );
}