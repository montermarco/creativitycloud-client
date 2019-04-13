import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'  
import { PageHeader, Statistic, Row, Col, Alert } from 'antd';

const Description = ({ term, children, span = 12 }) => (
  <Col span={span}>
    <div className="description">
      <div className="term"><h4 className="perfil">{term}</h4></div>
      <div className="detail">{children}</div>
    </div>
  </Col>
);

/////////////////////////////////////////////// Component 

class ProfileCard extends Component {

  state={
    user: ''
}

componentWillReceiveProps({user}){
 console.log(user)
  this.setState({user})
}

    renderProfile(){

      const { username, email, organizacion, year, rfc, donatario, contacto, cargo, titulo, personas, zonas, fecha, apoyo, rango, explica, descripcion, categoria, role  } = this.state.user
            return (      
            <Row className="container" type="flex" justify="center" align="top">
            <Alert message='Oh oh! ... Al parecer algo salio mal, vuelve a cargar la pagina por favor o da lcick en tu nombre nuevamente' banner closable />
            <Col span={22}>
            <h3>Perfil</h3>
            <h1>{username}</h1>
              <PageHeader title={organizacion}>
                <div className="wrap">
                            {/* RENDER EXTRA CONTENT */}
                            <div className="content padding">

                            <div>
                                <Row>
                                    <Description term="CORREO">{email}</Description>
                                    <Description term="TIPO DE USUARIO">{role}</Description>
                                </Row>
                                <Row>
                                    <Description term="CONTACTO">{contacto}</Description>  
                                    <Description term="CARGO EN LA ORGANIZACIÓN">{cargo}</Description>
                                </Row>
                                <Row>
                                    <Description term="AÑO DE CREACIÓN">{year}</Description>
                                    <Description term="RFC">{rfc}</Description>
                               </Row>
                               <Row>
                                    <Description term="DONATARIO">{donatario}</Description>
                                    <Description term="NOMBRE DE PROYECTO">{titulo}</Description>
                                </Row>
                                <Row>    
                                    <Description term="CATEGORIA">{categoria}</Description>
                                    <Description term="IMPACTO EN PERSONAS">{personas}</Description>
                                </Row>
                                <Row>       
                                    <Description term="IMPACTO EN ZONAS">{zonas}</Description>
                                    <Description term="FECHA LIMITE DE APOYO">{fecha}</Description>     
                                </Row>
                            </div>
                        </div>
                            {/* RENDER EXTRA CONTENT */}
                            <div className="extraContent">
                            <Row>
                                <Col span={12}>
                                    <Description term="DESCRIPCIÓN DEL PROYECTO" span={24}>{descripcion}</Description>
                                    <Description term="DESCRIPCIÓN DEL APOYO" span={24}>{explica}</Description>
                                </Col>
                                <Row  type="flex" justify="space-around">
                                  <Col span={24}>
                                    <Statistic className="perfil" title="TIPO DE APOYO" value={apoyo} />
                                    <Statistic className="perfil" title="RANGO DE APOYO" prefix="$" value={rango} />
                                  </Col>
                                </Row>
                            </Row>
                            </div>                        
                </div>
            </PageHeader>    
            </Col>
            </Row>
          )
    }
    
    render() {       
        return (
            <div>
              {this.renderProfile()}
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => { 
  console.log(auth)
  return auth }

export default connect(mapStateToProps, actions)(ProfileCard);
