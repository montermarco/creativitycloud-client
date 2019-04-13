import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'  
import mexStates from '../registration/mexStates.json'


import { Form, Select, Radio, Row, Col, Alert } from 'antd';

const estados = mexStates;
const { Option } = Select;
const RadioGroup = Radio.Group;
const categories = [
  {
  value: 'Arte',
  name: 'Arte'
},
{ value: 'Alimentacion',
   name: 'Alimentacion'
 },{
   value: 'Cultura',
  name: 'Cultura'
 },{
   value: 'Educacion',
   name: 'Educacion'
 },{
  value: 'Inclusion social',
  name: 'Inclusion social'
},{
   value: 'Medio ambiente',
  name: 'medio ambiente'
},{
  value: 'Niñez y vejez',
  name: 'Niñez y vejez'
 },{
  value: 'Salud',
   name: 'Salud'
 },{
   value: 'Tecnologia',
  name: 'Tecnologia'
 }
]

class StepTwoForm extends Component {

  state = {
    categoria: [],
    zonas: [],
    personas: '',
    user: '',
  }

  componentWillReceiveProps({user} ){        
    if(user === undefined){
      this.setState({ user: ''})
    } else { this.setState({ user: user._id })
    localStorage.setItem('userId', user._id)
     }   
  }

     
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { categoria, zonas, personas } = this.state 
    this.props.addStepTwoForm( categoria, zonas, personas)
    .then( () => {        
        this.setState({
          categoria: [],
          zonas: [],
          personas: '',
        });        
    })
    .catch( error => console.log(error) )
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleCategorySelect = event => {
    this.setState( {categoria: event })  
  }

  handleZonesSelect(event){
    this.setState( {zonas: event})  
  }

  handleChange(event) {    
    console.log(this.props) 
    console.log(this.props.form);       
    console.log(event)    
    this.setState({personas: event})  
    console.log(this.state);     

  }

   
  render() {      
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
      <Form {...formItemLayout} onSubmit={this.handleFormSubmit}>
   
        <Form.Item label="Categorias">
            
            <Select                 
                onChange={ e => this.handleCategorySelect(e)}
                name="categoria" 
                mode="multiple" 
                placeholder="Selecciona las categorias de tu preferencia">

                {categories.map((category) => 
                  <Option 
                      key={category.value}>{category.name}</Option>)}
            </Select>
        </Form.Item>


        <Form.Item label="Zonas">
            <Select             
              onChange={ e => this.handleZonesSelect(e)}              
              name="zonas" mode="multiple" placeholder="Selecciona las zonas de imapcto de tu preferencia">
                {estados.map(estado => (
                    <Option 
                        key={estado.clave} 
                        value={estado.nombre}>{estado.nombre}
                    </Option>
                ))}
            </Select>
        </Form.Item>
 
        <Form.Item label="Impacto en personas">
            <RadioGroup name="personas" onChange={ e => this.handleChange(e)}>
                <Radio style={radioStyle} value={1}>1 a 10</Radio>
                <Radio style={radioStyle} value={2}>11 a 50</Radio>
                <Radio style={radioStyle} value={3}>51 a 100</Radio>            
                <Radio style={radioStyle} value={4}>mas de 100</Radio> 
                <Radio style={radioStyle} value={5}>mas de 1,000</Radio>             
            </RadioGroup>
        </Form.Item>
        
        <input type="submit" value="Guardar" />


      </Form>
      </Col>
      <Alert message='Por favor ingresa los datos solicitados y presiona el botón de "Guardar" para registrar los cambios, despúes da click en continuar para ir a la siguiente parte...' banner closable />
      </Row>
    );
  }
}

const mapStateToProps = ({auth}) => { return auth }

const myForm = Form.create({ name: 'myForm' })(StepTwoForm);
export default connect(mapStateToProps, actions)(myForm);

          