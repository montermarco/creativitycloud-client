import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

import { Form, Input, Tooltip, Icon, Select, Row, Col } from 'antd';
const Option = Select.Option;

class StepOneForm extends Component {
  state = {
    confirmDirty: false, 
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
 
  render() {
    const { getFieldDecorator } = this.props.form;
    
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
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail">
            {getFieldDecorator('email', {
                rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
                }, {
                required: true, message: 'Please input your E-mail!',
                }],
            })(
                <Input />
            )}
            </Form.Item>
    

            <Form.Item
            label={(
                <span>
                Tipo de usuario
                <Tooltip title="Selecciona si eres una marca o una ong">
                    <Icon type="question-circle-o" />
                </Tooltip>
                </span>
            )}
            >
            {getFieldDecorator('role', {
                rules: [{ required: true, message: 'Por favor selecciona un tipo de usuario', whitespace: true }],
            })(

                    <Select name="role" initialValue="Selecciona un tipo de usuario" style={{ width: 240 }}>
                        <Option value="marca">marca</Option>
                        <Option value="causa">ong</Option>
                    </Select>

            )}
            </Form.Item>


            <Form.Item
            label={(
                <span>
                Nombre de Ong o Marca
                </span>
            )}
            >
            {getFieldDecorator('organizacion', {
                rules: [{ required: true, message: 'Por favor ingresa el nombre de tu organización', whitespace: true }],
            })(
                <Input name="organizacion"/>
            )}
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
            {getFieldDecorator('contacto', {
                rules: [{ required: true, message: 'Por favor indica un contacto', whitespace: true }],
            })(
                <Input name="contacto"/>
            )}
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
            {getFieldDecorator('cargo', {
                rules: [{ required: true, message: 'Por favor indica un contacto', whitespace: true }],
            })(
                <Input name="cargo"/>
            )}
            </Form.Item>
        </Form>
      </Col>
      </Row>
    );
  }
}

const myForm = Form.create({ name: 'myForm' })(StepOneForm);

const mapStateToProps = ({auth}) => { return auth }

export default connect(mapStateToProps, actions)(myForm);


          