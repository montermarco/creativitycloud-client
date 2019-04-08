import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Typography } from 'antd';

const { Paragraph } = Typography;

const content = (
  <div className="content">
    <Paragraph>
      Cuando entras a la pagina sin registrarte o sin logearte, te manda al landin page, este es el Home Page del usuario
      
    </Paragraph>
    <Paragraph>
      En el landing es quien eres, que haces, como lo haces y como funciona....
      Se me ocurre que aqui podriamos mostrar el como funciona mas detallado, algunos casos exitosos.
      En la barra de arriba se puede regresar a esta pagina, o ir a su dash donde estan sus matches, ir a su perfil en caso de 
      que quiera actualizarlo o consultar su informacion, y explorar las diferentes categorias...

    </Paragraph>
  
  </div>
);

const extraContent = (
  <img
    src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
    alt="content"
  />
);


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
          <PageHeader title="hola!">
            <div className="wrap">
            <div className="content">{this.state.user}</div>
            <div className="content">{content}</div>
            <div className="extraContent">{extraContent}</div>
            </div>
        </PageHeader>  
          </div>
          </div>
        );
      }
}

const mapStateToProps = ({auth}) => { return auth }

export default connect(mapStateToProps)(Home);