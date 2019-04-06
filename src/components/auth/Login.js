import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

  class Login extends Component {
    
      state = {
        activo: '',
        password: '',
        username: ''
    }
    

    // to apply conditional rendering
    componentWillReceiveProps({data}){
      if(data){
        const {activo} = data
        console.log(data)
        this.setState({ activo })
      }
    }

    submission = e => {
      const { target } = e
      const { name, value } = target
      this.setState({ [name]:value })
    }

    handleSubmit = (e) => {
      const {username, password } = this.state
      e.preventDefault();
      this.props.login(username, password)
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

    successLogin = () => {
      return (this.state.activo === '') ?          
           <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {this.props.form.getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input 
                name='username'
                onChange={this.submission}
                prefix={<Icon 
                type="user" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {this.props.form.getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                name='password'  
                onChange={this.submission}
                prefix={<Icon 
                type="lock" 
                style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" 
                placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {this.props.form.getFieldDecorator('remember', {
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
        </Form> : <Redirect to='/'/>
      
    }


    render() {
      return (
        <div>
        {this.successLogin()}
        </div>
      );
    }


  }
  
  const LoginForm = Form.create({ name: 'login' })(Login);
  
  //this auth is the name of the reducer, the state, we are returning an empty object 
  const mapStateToProps = ({auth}) => { return auth }

  // so the reducer can make the changes to the state, we CONNECT mapstatetoprops with our actions
  export default connect(mapStateToProps, actions)(LoginForm);

  