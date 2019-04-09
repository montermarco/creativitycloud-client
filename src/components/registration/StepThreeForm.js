import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

import { Form, Input, Icon,  Radio, Tooltip, Select, Row, Col, DatePicker } from 'antd';
const Option = Select.Option;
const { MonthPicker} = DatePicker;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

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
    
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };

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
            <Col span={18} >
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    
                <Form.Item label={(<span>Tipo de apoyo</span>)}>
                    <Select name="apoyo" placeholder="Selecciona apoyo solicittado" style={{ width: 240 }}>
                        <Option value="especializado">Especializado</Option>
                        <Option value="economico">Económico</Option>
                        <Option value="especie">En especie</Option>
                    </Select>         
                </Form.Item>

                <Form.Item label={( <span> Detalles de apoyo
                    <Tooltip title="Describe el apoyo que necesitas"> <Icon type="question-circle-o" />
                        </Tooltip>
                            </span>)}>
                    <TextArea name="explica" placeholder="Cuentanos de tus valores, tus preferencias y los proyectos que te interesan" autosize={{ minRows: 3, maxRows: 10 }} />
                </Form.Item>

                <Form.Item label="Rango de apoyo">
                    <RadioGroup name="rango">
                        <Radio style={radioStyle} value={1}>mil - 5 mil</Radio>
                        <Radio style={radioStyle} value={2}>5 mil - 10 mil</Radio>
                        <Radio style={radioStyle} value={3}>10 mil - 50 mil</Radio>            
                        <Radio style={radioStyle} value={4}>50 mil - 100 mil</Radio> 
                        <Radio style={radioStyle} value={5}>100 mil - 1 millon</Radio>             
                    </RadioGroup>
                </Form.Item>   
                
                <Form.Item label={(<span> Fecha límite de apoyo 
                    <Tooltip title="Indica la fecha limite en que podrías recibir ell apoyo"><Icon type="question-circle-o" />
                        </Tooltip>
                            </span>)}>
                    <MonthPicker name="fecha" placeholder="Selecciona una fecha limite" />
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


          