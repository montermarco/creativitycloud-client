import { PROJECT_LIST, SHOW_PROJECT } from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case PROJECT_LIST:         
            return action.projectList
        case SHOW_PROJECT:            
            return action.project             
        default:
            console.log(state)                
            return state;    
    }
};     


