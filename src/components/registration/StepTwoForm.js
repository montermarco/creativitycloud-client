import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'  
import mexStates from '../registration/mexStates.json'


import { Form, Select, Radio, Row, Col } from 'antd';

const estados = mexStates;
const { Option } = Select;
const RadioGroup = Radio.Group;

class StepTwoForm extends Component {

    handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;    
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 17 },
    };
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
    return (
        
         <Row className="container" type="flex" justify="space-between" align="top">
        <Col span={17} offset={2}>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
   
        <Form.Item
          label="Categorias"
        >
          {getFieldDecorator('categoria', {
            rules: [
              { required: true, message: 'Por favor selecciona las categorias de tu preferencia!', type: 'array' },
            ],
          })(
            <Select name="categoria" mode="multiple" placeholder="Selecciona las categorias de tu preferencia">
              <Option value="arte">arte</Option>
              <Option value="alimentación">alimentación</Option>
              <Option value="cultura">cultura</Option>
              <Option value="educación">educación</Option>
              <Option value="inclusión social">inclusión social</Option>
              <Option value="medio ambiente">medio ambiente</Option>
              <Option value="Niñez y vejéz">Niñez y vejéz</Option>
              <Option value="Salud">Salud</Option>
              <Option value="Tecnología">Tecnología</Option>
            </Select>
          )}
        </Form.Item>


        <Form.Item
          label="Zonas"
        >
          {getFieldDecorator('zonas', {
            rules: [
              { required: true, message: 'Por favor selecciona las categorias de tu preferencia!', type: 'array' },
            ],
          })(
            <Select name="zonas" mode="multiple" placeholder="Selecciona las zonas de imapcto de tu preferencia">
                {estados.map(estado => (
                    <Option key={estado.clave} value={estado.nombre}>{estado.nombre}</Option>
                ))}
            </Select>
          )}
        </Form.Item>
 


        <Form.Item
          label="Impacto en personas"
        >
            <RadioGroup name="personas">
                <Radio style={radioStyle} value={1}>1 a 10</Radio>
                <Radio style={radioStyle} value={2}>11 a 50</Radio>
                <Radio style={radioStyle} value={3}>51 a 100</Radio>            
                <Radio style={radioStyle} value={4}>mas de 100</Radio> 
                <Radio style={radioStyle} value={5}>mas de 1,000</Radio>             
            </RadioGroup>
        </Form.Item>

      </Form>
      </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({auth}) => { return auth }

const myForm = Form.create({ name: 'myForm' })(StepTwoForm);
export default connect(mapStateToProps, actions)(myForm);

          