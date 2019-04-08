import React, { Component } from 'react';
import { Carousel } from 'antd';
import {Link} from 'react-router-dom';

const porque = "Simplemente hay demasiadas causas que apoyar con el empoderamiento de las Marcas y Organiazaciones comprometidas con un verdadero apoyo social alrededor del mundo.";
const porques = "Una gran oportunidad para desarrollar campañas efectivas que transormen nuestra manera de crear impacto en un mundo mejor."
const quien = "Personas creativas interesadas en crear una comunicación constructiva y poderosa."
const como = "Nuestra tecnología logra la combinación perfecta entre las causas mundiales y las marcas socialmente resopnsables a través de valores y objetivos de comunicación."

class Landing extends Component {
    render() {
        return (

            <div className="myContainer">
            <Carousel vertical autoplay>
            <div className='ccc'>
                    <h2 className='creativity crear'>CREATIVIDAD con CAUSA</h2>
                    
                </div>
                <div className='who'>
                    <h2 className='title-cian right'>QUIENES SOMOS</h2>
                    <p className='contentlanding texty left'>{quien}</p>
                </div>
                <div className='what'>
                    <h2 className='title-blue'>QUE HACEMOS</h2>
                    <p className='contentlanding texty right'>{como}</p>
                </div>
                <div className='why'>
                    <h2 className='title-cian right'>PORQUE LO HACEMOS</h2>
                    <p className='contentlanding texty left'>{porque}</p>
                    <p className='contentlanding texty left'>{porques}</p>
                </div>
                <div className='works'>
                    <h2 className='title-blue'>COMO FUNCIONA</h2>
                    <ul className="wl worklistcontainer right">
                        <li className="worklist">Crea una cuenta</li>
                        <li className="worklist">completa el registro</li>
                        <li className="worklist">Encuenrtra tu match perfecto</li>
                        <li className="worklist">Comienza a promover tus valores</li>
                        <li className="worklist">Crece nuestra comunidad</li>                        
                    </ul>
                </div>                                  
            </Carousel>            
            <Link to='/signup' className="crear">comenzar ahora!</Link>  
            </div> 
        );
    }
}

export default Landing;