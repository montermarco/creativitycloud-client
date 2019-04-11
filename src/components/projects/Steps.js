import React, { Component } from 'react';
import StepOneForm from '../registration/StepOneForm';
import StepTwoForm from '../registration/StepTwoForm';
import StepThreeForm from '../registration/StepThreeForm';

// Antd imports
import { Icon, Steps, Row, Col, message, Button } from 'antd';
const Step = Steps.Step;

////////////////////// DEFINING 3 FORM STEPS 
// We will create 3renders, each of the will be a content

const steps = [{
  title: 'Tú organización y tu',
  content: <StepOneForm/>,
}, {
  title: 'Cuentanos del proyecto',
  content: <StepTwoForm/>,
}, {
  title: 'Como ayudamos?',
  content: <StepThreeForm/>,
}];

////////////////////  FORM WRAPPER

class FormWrapper extends Component {
  

    state = {
      current: 0,
    };
  
    //  FORM WRAPPER controls
    next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  ///// RENDERING
  
  render() {
    const { current } = this.state;
    return (

       <Row className="container" type="flex" justify="center" align="top">
        <Col span={20}>

      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>

        <div className="steps-content">{steps[current].content}</div>
        
        <Row type="flex" justify="space-around">
            <Col span={3}>
                <div className="steps-action">
                {
                current > 0
                && (
                <Button onClick={() => this.prev()}>atras<Icon type="left-circle" theme="filled" /></Button>
                )
                }
                {
                    current < steps.length - 1
                    && <Button  onClick={() => this.next()}>continuar<Icon type="right-circle" theme="filled" /></Button>
                }
                {
                    current === steps.length - 1
                    && <Button onClick={() => message.success('Processing complete!')}>enviar</Button>
                }
            </div>
            </Col>
        </Row>
        

      </div>
      </Col>
      </Row>
    );
  }
}

export default FormWrapper;