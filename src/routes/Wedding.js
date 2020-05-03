import React, { Component } from 'react';
import { Container as NesContainer, Button} from "nes-react";
import '../App.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Wedding() {
  return (
    <div>
        <i className="nes-charmander"></i>
        <i className="nes-squirtle"></i>

        <NesContainer title="2014">
            <p>
                We met with friends and family, and said "I do"
            </p>
        </NesContainer>
        <Link to="/house">
            <Button primary="true">
                Next
            </Button>
        </Link>
    </div>
  )
}