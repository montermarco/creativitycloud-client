import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { PageHeader, Row, Col, Divider, Popover } from 'antd';




const project = "Uso de una plataforma de código abierto para traducir libros para los estudiantes. Más de la mitad de los libros publicados en la India están escritos en hindi e inglés. Pero en un país con docenas de idiomas locales, esto significa que muchos estudiantes no tienen acceso a libros en su lengua materna.";
const ccc = 'CreaticityCloud apoya a Pratham Books para ampliar rápidamente el alcance de su plataforma de traducción StoryWeaver.'

const content = (
  <div className="hdr">
    <h4>En CreativityCloud facilitamos la creacion de campañas que apoyan a iniciativas que están generando impacto a través de la tecnología.</h4> 
  </div>
);

const extraContent = (
  <img src="/images/landingBrainSmall.png" alt="content"/>);

const instructions = (
  <div>
    <p>Proporcionar un contacto</p>
    <p>Datos de tu Marca u Ong</p>
    <p>Información acerca de tu proyecto o causa</p>
    <p>Describir el tipo de apoyo solicitado</p>
  </div>)



//COMPONENT
class Home extends Component {

    state = {
        user: ''
    }

    componentWillReceiveProps({data}){
        if(data){
          const {user} = data
          console.log(data)
          this.setState({ user })
        }
    }

    render() {
        return (
          <div>
            
            <div>
              <PageHeader title="">
                <div className="wrap">
                  <Row type="flex" justify="center">
                    <h1 className="hdr">CERATIVITY CLOUD</h1>                    
                  </Row>
                  <h2 className="hdr">creatividad con causa</h2>
                  <Row type="flex" justify="center">
                    <div className="extraContent">{extraContent}</div>
                  </Row>
                  
                  <Row type="flex" justify="center">
                    <div className="hdr">{content}</div>
                  </Row>
                </div>
              </PageHeader>  
            </div>      

            <div className='space'></div>
              <Popover placement="bottom" content={instructions} title="Para comenzar tu registro necesitas..." trigger="hover">
            <Row span={12} type="flex" justify="center"><Link to='/projects/new' className='hombg hometxt'>Comenzar</Link></Row>
              </Popover>
            <div className='space'></div>

            <Divider orientation="left">Inclusón social</Divider>
            <div className='space'></div>
            <div>
              <Row type="flex" justify="space-between">                
                <Col span={12} ><img src="/images/social.jpg" alt="content"/></Col>
                <Col span={12} >
                <h3 className='hombg hdr'>Vemos claro</h3>  
                  <p className='hombg hometxt'>{project}</p>
                  <p className='hombg hometxt'>{ccc}</p>                      
                  <Row span={12} type="flex" justify="center"><Link to='/' className='hombg hometxt'>Leer más...</Link></Row>
                </Col>
              </Row>
            </div><div className='space'></div>
            
            <Divider orientation="right">Medio ambientte</Divider>
            <div className='space'></div>
            <div>
              <Row type="flex" justify="space-between">                
                <Col span={12} >
                  
                  <h3 className='hombg hdr'>México bien plantado</h3>  
                  <p className='hombg hometxt'>{project}</p>
                  <p className='hombg hometxt'>{ccc}</p>                      
                  <Row span={12} type="flex" justify="center"><Link to='/' className='hombg hometxt'>Leer más...</Link></Row>
                </Col>
                <Col span={12} ><img src="/images/medio.jpg" alt="content"/></Col>
              </Row>
            </div>


            <Divider orientation="left">Educación</Divider>
            <div className='space'></div>
            <div>
              <Row type="flex" justify="space-between">
                <Col span={12} ><img src="/images/ebooks.jpg" alt="content"/></Col>
                <Col span={12} >
                  <h3 className='hombg hdr'>Libros del futuro</h3>  
                  <p className='hombg hometxt'>{project}</p>
                  <p className='hombg hometxt'>{ccc}</p>                      
                  <Row span={12} type="flex" justify="center"><Link to='/' className='hombg hometxt'>Leer más...</Link></Row>
                </Col>
              </Row>
              <div className='space'></div>
            </div>
            <div className='space'></div>
           
          </div>
        );
      }
}

const mapStateToProps = ({auth}) => { return auth }

export default connect(mapStateToProps)(Home);