import React, { Component } from 'react'

import MovieCard from "../Card/Card";
import "./Carrousal.css";
export default class Carrousal extends Component {
    render() {
        const card = this.props.data.map((item, index) => (
            <MovieCard movieName={item.name} movieImage={item.image} key={index} />
        ));
        return (
            <div className="Slider">
                <h1 className="Slider-title">{this.props.title}</h1>
                <div className="carr">{card}</div>
            </div>
        )
    }
}
