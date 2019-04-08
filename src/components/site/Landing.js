import React, { Component } from 'react';
import { Carousel, Row, Col, Icon, Steps } from 'antd';
import { Link } from 'react-router-dom';

const porque = "Simplemente hay demasiadas causas que apoyar con el empoderamiento de las Marcas y Organiazaciones comprometidas con un verdadero apoyo social alrededor del mundo.";
const porques = "Una gran oportunidad para desarrollar campañas efectivas que transormen nuestra manera de crear impacto en un mundo mejor."
const quien = "Personas creativas interesadas en crear una comunicación constructiva y poderosa."
const como = "Nuestra tecnología logra la combinación perfecta entre las causas mundiales y las marcas socialmente resopnsables a través de valores y objetivos de comunicación."
const Step = Steps.Step;

class Landing extends Component {
    render() {
        return (
            
            <Row span={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col >
                    <Row>
                        <Row>
                            <Col span={24}><h2 className='creativity entrar'>CREATIVIDAD con CAUSA</h2></Col>
                        </Row>

                            <Carousel vertical autoplay>

                                <div className='ccc'><br/></div>

                                    <div className='who'>
                                        <Row type="flex" justify="start">   
                                            <Col span={14}><h2 className='title-cian'>QUIÉNES SOMOS</h2></Col>
                                        </Row>
                                            <Col type="flex" justify="end" span={12} offset={8}><p className='contentlanding texty left'>{quien}</p></Col>  
                                    </div>

                                    <div className='what'>
                                        <Row type="flex" justify="end">   
                                            <Col span={10}><h2 className='title-blue'>QUÉ HACEMOS</h2></Col>
                                        </Row>
                                            <Col type="flex" justify="start" span={16} offset={1}><p className='contentlanding texty'>{como}</p></Col>  
                                    </div>

                                    <div className='why'>
                                        <Row type="flex" justify="start">   
                                            <Col span={18}><h2 className='title-cian'>PORQUÉ LO HACEMOS</h2></Col>
                                        </Row>
                                            <Col type="flex" justify="end" span={16} offset={6}><p className='contentlanding texty'>{porque}<br/><br/> {porques}</p></Col>  
                                    </div>
                                
                                    
                                    <div className='works entrar'>
                                        <Row type="flex" justify="start">   
                                            <Col span={14}><h2 className='title-blue'>CÓMO FUNCIONA</h2></Col>
                                        </Row>
                                            
                                        <Row type="flex" justify="end">
                                            
                                            <Col type="flex" justify="end" span={12}>
                                                <Steps direction="vertical" size="small" current={1} >
                                                    <Step title="Crea una cuenta."  icon={<Icon type="user-add"/> }/>
                                                    <Step title="Completa el registro.d" icon={<Icon type="profile" />}/>
                                                    <Step title="Encuentra a tu match perfecto." icon={<Icon type="check-circle" />}/>
                                                    <Step title="Comienza a promueve tus valores."icon={<Icon type="heart" />}/>
                                                    <Step title="Crece nuestra comunidad de creativos con causa." icon={<Icon type="usergroup-add" />}/>
                                                </Steps>
                                                <Link to="/signup">comenzar ahora!</Link>
                                            </Col>
                                        </Row>  
                                    </div>                                               
                            </Carousel>  
                    </Row>
                </Col>
            </Row>





                     
             
            
        );
    }
}

export default Landing;