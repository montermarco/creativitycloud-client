import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
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
      console.log(data)
      this.setState({ user: ''})
    } else { this.setState({ user: data.username })}
  }


  Navbar =  () => {
    return (this.state.user === '') ?
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
      
          <Menu.Item key="landing"><Link to='/'>home</Link></Menu.Item>

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

        
        <Menu.Item key="home"><Link to='/home'>home</Link></Menu.Item>
        <Menu.Item key="profile"><Link to='/profile'>perfil</Link></Menu.Item>
        <Menu.Item key="dash">dashboard</Menu.Item>
        
        <SubMenu title={<span className="submenu-title-wrapper"><Link to='/projects'>explorar</Link></span>}>
          <MenuItemGroup title="categorias">
            <Menu.Item key="1"><Link to='/projects'>arte</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/projects'>alimentación</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/projects'>cultura</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/projects'>educación</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/projects'>inclusión social</Link></Menu.Item>
            <Menu.Item key="6"><Link to='/projects'>medio ambiente</Link></Menu.Item>
            <Menu.Item key="7"><Link to='/projects'>niñez y vejez</Link></Menu.Item>
            <Menu.Item key="8"><Link to='/projects'>salud</Link></Menu.Item>
            <Menu.Item key="9"><Link to='/projects'>tecnología</Link></Menu.Item>            
          </MenuItemGroup>         
        </SubMenu>
        
        <Menu.Item key="logout">
          <Link to='/' onClick={this.logout}>salir</Link>
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

