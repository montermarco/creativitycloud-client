import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

  class Login extends Component {
    
      state = {
        user: '',
        password: '',
        username: ''
    }
  
    // to apply conditional rendering
    componentWillReceiveProps({data}){
      if(data){
        const {user} = data
        console.log(this.state.user)
        this.setState({ user })
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

    onRedirect = () => {
      return (this.state.user === '') ?
                      
        <Row className="container" type="flex" justify="space-between" align="top">
        <Col span={12} offset={6}>
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
            })(<Checkbox>Remember me</Checkbox>)}            
            <Row type="flex" justify="center">
            <Button type="primary" htmlType="submit" className="login-form-button">
              entrar
            </Button>
            </Row>
            <Row type="flex" justify="center">
            <Link to="/signup">crea una cuenta</Link>
            </Row>
          </Form.Item>

        </Form>        
        </Col>
      </Row>  : <Redirect to='/home'/>
     
    }


    render() {
      return (
        <div>
        {this.onRedirect()}
        </div>
      );
    }


  }
  
  const LoginForm = Form.create({ name: 'login' })(Login);
  
  //this auth is the name of the reducer, the state, we are returning an empty object 
  const mapStateToProps = ({auth}) => { return auth }

  // so the reducer can make the changes to the state, we CONNECT mapstatetoprops with our actions
  export default connect(mapStateToProps, actions)(LoginForm);

  