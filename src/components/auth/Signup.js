import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Input, Cascader, Checkbox, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions'  
  
  class Signup extends Component {
    state = {
      user: '',
      password: '',
      username: '',
      email: '',
      role: '',
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    componentWillReceiveProps({data}){
      if(data){
        const {user} = data
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
      const {username, email, password, role} = this.state
      this.props.signup(username, email, password, role)
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
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
     
      
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>


          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!', }, { required: true, message: 'Please input your E-mail!', }],
            })(
              <Input
                name='email'
                onChange={this.submission} 
                type="text" />
            )}
          </Form.Item>

          <Form.Item label="Contraseña">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!', }, { validator: this.validateToNextPassword,}],
            })(
              <Input 
                name='passwrod'  
                onChange={this.submission}
                type="password" />
            )}
          </Form.Item>
          
          <Form.Item
            label="Confirma tu contraseña" >
            {getFieldDecorator('confirm', {
              rules: [{ required: true, message: 'Please confirm your password!', }, { validator: this.compareToFirstPassword, }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          
         
        
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const SignupForm = Form.create({ name: 'register' })(Signup);
  
  const mapStateToProps = ({auth}) => { return auth }

  export default connect(mapStateToProps, actions)(SignupForm);
