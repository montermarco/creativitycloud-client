import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectList } from '../../actions'; 
import { PageHeader, Statistic, Row, Col } from 'antd';

const Description = ({ term, children, span = 12 }) => (
  <Col span={span}>
    <div className="description">
      <div className="term">{term}</div>
      <div className="detail">{children}</div>
    </div>
  </Col>
);

const content = (
    <div>
        <Row>
            <Description term="correo">monter.marco"gmail.com</Description>
            <Description term="tipo de usuario"></Description>
            <Description term="contacto"></Description>
            <Description term="correo contacto"></Description>
            <Description term="cargo en la organizacion"></Description>
            <Description term="año de creación"></Description>
            <Description term="RFC"></Description>
            <Description term="donatario"></Description>
            <Description term="titulo"></Description>
            <Description term="categoria"></Description>
            <Description term="impacto en personas"></Description>
            <Description term="impacto en zonas"></Description>
            <Description term="fecha"></Description>
            <Description term="descripcion apoyo" span={24}></Description>
            <Description term="descripcion del proyecto" span={24}></Description>
        </Row>
    </div>
);

const extraContent = (
  <Row>
    <Col span={12}>
      <Statistic title="apoyo" value="tipo de apoyo" />
    </Col>
    <Col span={12}>
      <Statistic title="this mych" prefix="$" value={10568.08} />
    </Col>
  </Row>
);

class ProfileCard extends Component {

    componentDidMount(){
        this.props.projectList();
    }

    renderProfile(){
            return(
                 <PageHeader
                        title='organizacion'
                        subTitle='usuario'>
                        <div className="wrap">
                            <div className="content padding">{content}</div>
                            <div className="extraContent">{extraContent}</div>
                        </div>
                </PageHeader>    
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


const mapStateToProps = state => {
    return { project: state.project}
}
export default connect(mapStateToProps, {projectList})(ProfileCard);

