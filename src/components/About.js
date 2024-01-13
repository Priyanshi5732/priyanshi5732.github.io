import React ,{Component} from 'react';
import "../styles/About.css";
import cv from "./cv.json";

export default class About extends Component{
    render(){
        const {Aboutme}=cv;
        return (
        <div className='about'><h1>About me</h1>
        <span className='content'>{Aboutme}</span>
        </div>
        )
    }
}
