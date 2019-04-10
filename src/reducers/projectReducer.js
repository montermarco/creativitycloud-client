import { PROJECT_LIST, SHOW_PROJECT } from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case PROJECT_LIST:
         //console.log("Project_LIST",action.projectList)
            return action.projectList
        case SHOW_PROJECT:
            //console.log("SHOW_Project",action.project)
            return action.project             
        default:
            console.log("El default del pinchi proyecto",state)
            return state;    
    }
};     


