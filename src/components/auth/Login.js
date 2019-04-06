import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

  class Login extends Component {
    
      state = {
        user: '',
        password: '',
        email: ''
    }
    
    componentWillReceiveProps({data}){
      if(data){
        const {user} = data
        this.setState({ user })
      }
    }

    submission = e => {
      const { target } = e
      const { name, value } = target
      this.setState({ [name]:value })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {email, password } = this.state
      this.props.login(email, password)
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input 
                name='email'
                onChange={this.submission}
                prefix={<Icon 
                type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                name='passwrod'  
                onChange={this.submission}
                prefix={<Icon 
                type="lock" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" 
                placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}            
            <Button type="primary" htmlType="submit" className="login-form-button">
              entrar
            </Button>
            Or <Link to="/signup">crea una cuenta</Link>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const LoginForm = Form.create({ name: 'normal_login' })(Login);
  const mapStateToProps = ({auth}) => { return auth }

  export default connect(mapStateToProps, actions)(LoginForm);

  