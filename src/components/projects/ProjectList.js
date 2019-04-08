import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { projectList } from '../../actions'; 
import { Card } from 'antd';



class ProjectList extends Component {

    componentDidMount(){
        this.props.projectList();
    }

    renderList(){
        return this.props.project.map(oneProject => {
            return(
                <Card  key={oneProject._id} title={oneProject.categoria}>
                    <Card
                    type="inner"
                    title={oneProject.titulo}
                    extra={<Link to={`/projects/${oneProject._id}`} >Más...</Link>}>                        
                        <h4>{oneProject.organizacion}</h4>     
                        <p>{oneProject.descripcion}</p>
                    </Card>                    
                </Card>
            )
        })
    }

    render() {       
        return (
            <div>
              {this.renderList()}              
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { project: state.project}
}
export default connect(mapStateToProps, {projectList})(ProjectList);

