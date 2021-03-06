import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Form, Input, Button, Row, Col, Alert } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions'  
  
  class Signup extends Component {
    state = {
      user: '',
      password: '',
      username: '',
      confirmDirty: false,
    };

    componentWillReceiveProps({data}){
      if(data){ const {user} = data
        this.setState({user})
      }
    }

    submission = e => {
      const { target } = e
      const { name, value } = target
      this.setState({ [name]:value })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {username, password } = this.state
      this.props.signup(username, password )
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
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    onRedirect = () => {
        return (this.state.user === '') ? 
          <Row className="container" type="flex" justify="space-between" align="bottom">
            <Col span={12} offset={6}>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Item label="Usuario">
                      {this.props.form.getFieldDecorator('username')(
                      <Input
                        name='username'
                        onChange={this.submission} 
                        type="text" />
                    )}
                    </Form.Item>

                    <Form.Item label="password">
                      {this.props.form.getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!', }, { validator: this.validateToNextPassword,}],
                      })(
                        <Input 
                          name='password'  
                          onChange={this.submission}
                          type="password" />
                      )}
                    </Form.Item>

                    <Form.Item
                      label="Confirma tu contraseña" >
                      {this.props.form.getFieldDecorator('confirm', {
                        rules: [{ required: true, message: 'Please confirm your password!', }, { validator: this.compareToFirstPassword, }],
                      })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                      )}
                    </Form.Item>
                    <Alert message='Al registrarte serás dirigido a login para poder entrar' type="info" banner closable />         
                    <Row type="flex" justify="center">
                      <Form.Item >
                        <Button type="primary" htmlType="submit">Registrar</Button>            
                      </Form.Item>
                    </Row>

                    <Row type="flex" justify="center">
                      <Link to="/login">ya tienes cuenta?</Link>
                    </Row>
                </Form>         
            </Col>
        </Row> : <Redirect to='/login'/>
    }

    render() {
      return (
        <div>{this.onRedirect()}</div>
      );
    }
  }
  
  const SignupForm = Form.create({ name: 'register' })(Signup);
  
  const mapStateToProps = ({auth}) => { return auth }
  export default connect(mapStateToProps, actions)(SignupForm);
