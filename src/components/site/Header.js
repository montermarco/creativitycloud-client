import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    current: 'home',
    user: ''
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  logout = () => {
    this.props.logout()
  }
   
  // to apply conditional rendering
   componentWillReceiveProps({data}){
    if(data === undefined){
      this.setState({ user: ''})
    } else { this.setState({ user: data.username })}
  }


  Navbar =  () => {
    return (this.state.user === '') ?
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
      
          <Menu.Item key="signup">
            <Link to='/signup' rel="noopener noreferrer">registrarse</Link>
          </Menu.Item> 
        
          <Menu.Item key="login">
            <Link to='/login' rel="noopener noreferrer">entrar</Link>
          </Menu.Item>
        </Menu>
       :
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">

        <Menu.Item key="home">home</Menu.Item>
        <Menu.Item key="profile">perfil</Menu.Item>
        <Menu.Item key="dash">dashboard</Menu.Item>
        
        <SubMenu title={<span className="submenu-title-wrapper">
            categorias</span>}>
          <MenuItemGroup title="categorias">
            <Menu.Item key="1">arte</Menu.Item>
            <Menu.Item key="2">alimentación</Menu.Item>
            <Menu.Item key="3">cultura</Menu.Item>
            <Menu.Item key="4">educación</Menu.Item>
            <Menu.Item key="5">inclusión social</Menu.Item>
            <Menu.Item key="6">medio ambiente</Menu.Item>
            <Menu.Item key="7">niñez y vejez</Menu.Item>
            <Menu.Item key="8">salud</Menu.Item>
            <Menu.Item key="9">tecnología</Menu.Item>            
          </MenuItemGroup>         
        </SubMenu>
        
        <Menu.Item key="logout">
          <Button icon='logout' type='circle' onClick={this.logout}></Button>
        </Menu.Item>

      </Menu>
    
  }

  render() {
    return (
      <div>
      {this.Navbar()}
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => { return auth }
export default connect(mapStateToProps, actions)(Header);