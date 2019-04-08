import { PROJECT_LIST } from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case PROJECT_LIST:
            return action.payload       
        default:
            return state;    
    }
};     


