import React from 'react';
import { Icon, Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const {  Footer } = Layout;

const Foot = () => {
    return (
        <div className='footer'>
        <Row>
        <Col span={24}>
        <Footer style={{ textAlign: 'center' }}>
        <Row type="flex" justify="center">
            <Col span={3}><Link to=''><Icon type="twitter" /></Link></Col>
            <Col span={3}><Link to=''><Icon type="youtube" /></Link></Col>
            <Col span={3}><Link to=''><Icon type="linkedin" /></Link></Col>
            <Col span={3}><Link to=''><Icon type="instagram" /></Link></Col>
        </Row>            
        </Footer>        
        </Col>        
        </Row>
        <div className='foot entrar'>Creativity Cloud ©2019 Created by Marco Monter - Ironhacker -</div>
        </div>
    );
};

export default Foot;


