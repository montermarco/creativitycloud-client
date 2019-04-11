import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'

import { Form, Input, Tooltip, Icon, Row, Col } from 'antd';


class StepOneForm extends Component {
  state = {
    email: '',
    role: '',
    organizacion: '',
    contacto: '',
    cargo: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {email, role, organizacion, contacto, cargo} = this.state
    //axios.post(process.env.REACT_APP_P3, { email, role, organizacion, contacto, cargo })    
    this.props.addStepOneForm(email, role, organizacion, contacto, cargo)
    .then( () => {
        // this.props.getData();
        this.setState({
          email: '',
          role: '',
          organizacion: '',
          contacto: '',
          cargo: '',
        });
    })
    .catch( error => console.log(error) )
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  addToLocal = () => {

  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}
 
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    
    return (
         <Row className="container" type="flex" justify="space-between" align="top">
              <Col span={16} offset={2}>
                <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
                    <Form.Item label="E-mail">
                        <Input 
                          name="email"
                          value={this.state.email}
                          onChange={ e => this.handleChange(e)}
                          />        
                    </Form.Item>
                    <Form.Item
                    label={(
                        <span>
                        Nombre de Ong o Marca
                        </span>
                    )}
                    >
                        <Input 
                        value={this.state.organizacion}
                        onChange={ e => this.handleChange(e)}
                        name="organizacion"/>
                    
                    </Form.Item>
                    <Form.Item
                    label={(
                        <span>
                        Nombre de contacto
                        <Tooltip title="Indica quien es la persona con la que estaremos comunicando">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    >
                        <Input 
                        value={this.state.contacto}
                        onChange={ e => this.handleChange(e)}
                        name="contacto"/>
                    
                    </Form.Item>
                    <Form.Item
                    label={(
                        <span>
                        Cargo o posición
                        <Tooltip title="Que función desempeña el contacto dentro de la organización">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    >
                        <Input 
                        value={this.state.cargo}
                        onChange={ e => this.handleChange(e)}
                        name="cargo"/>
                    
                    </Form.Item>
                      <input type="submit" value="Submit" />
                </Form>
            </Col>
        </Row>
    );
  }
}

const Organizacion = Form.create({ name: 'Organizacion' })(StepOneForm);

const mapStateToProps = state => {
  return { projects: state.projects}
}
export default connect(mapStateToProps, actions) (Organizacion);


          