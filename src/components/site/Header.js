import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions'  

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    current: 'home',
    user: '',
    logged: ''
  }

  handleClick = (e) => {    
    console.log('click ', e);
    this.setState({
      current: e.key,
    });    
  }

  getCategory = () => {
    this.props.oneCategory()
  }

  componentWillReceiveProps({user}){         
    if(user === undefined){      
      this.setState({ user: ''})
    } else { this.setState({ user: user.username, logged: user._id })        
      }   
  }

  logout = () => {
    this.props.logout() 
  }
   
  Navbar =  () => {
    console.log( this.state.current )
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

        <Menu.Item key="landing"><Link to="/profile">{this.state.user}</Link></Menu.Item>

        <Menu.Item key="home"><Link to='/home'>home</Link></Menu.Item>
        
        <SubMenu 
          onClick={this.getCategory} 
          selectedKeys={[this.state.current]} 
          title={<span className="submenu-title-wrapper">
            <Link to='/projects'>explorar</Link></span>}>
          
          <MenuItemGroup title="categorias">
            <Menu.Item key="arte"><Link to='/projects'>arte</Link></Menu.Item>

            <Menu.Item key="alimentacion"><Link to='/projects'>alimentación</Link></Menu.Item>

            <Menu.Item key="cultura"><Link to='/projects'>cultura</Link></Menu.Item>
            
            <Menu.Item key="educacion"><Link to='/projects'>educación</Link></Menu.Item>
            
            <Menu.Item key="inclusion social"><Link to='/projects'>inclusión social</Link></Menu.Item>
            
            <Menu.Item key="medio ambiente"><Link to='/projects'>medio ambiente</Link></Menu.Item>
            
            <Menu.Item key="niñez y vejez"><Link to='/projects'>niñez y vejez</Link></Menu.Item>
            
            <Menu.Item key="salud"><Link to='/projects'>salud</Link></Menu.Item>
            
            <Menu.Item key="tecnologia"><Link to='/projects'>tecnología</Link></Menu.Item>            
          </MenuItemGroup>         
        </SubMenu>
        
        <Menu.Item key="logout"><Link to='/login' onClick={this.logout}><Icon type="logout" /></Link></Menu.Item>
        
      </Menu>    
  }

  render() {
    return (
      <div>{this.Navbar()}</div>
    );
  }
}

const mapStateToProps = ({auth}) => { 
return auth }
  
export default connect(mapStateToProps, actions)(Header);

