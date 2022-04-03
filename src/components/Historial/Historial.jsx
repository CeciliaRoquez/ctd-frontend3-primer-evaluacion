import React, { Component } from 'react'

export default class Historial extends Component {
render() {
    const { historial } = this.props;
    const ultimaOpcion = historial[historial.length - 1];
    return (
        <div className="recordatorio">
            <h3>Selección anterior: {ultimaOpcion}</h3>
            <h4>Historial de opciones elegidas: </h4>
            <ul>{historial.map((opcion, i) => (<li key={i}>{opcion}</li> ))}</ul>              
        </div>
        );
    }
}












