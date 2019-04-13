import { ADD_STEP_ONE_FORM, ADD_STEP_TWO_FORM, ADD_STEP_TRHEE_FORM, PROJECT_LIST, SHOW_PROJECT, ONE_CATEGORY } from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case ADD_STEP_ONE_FORM:
            return action.formValues
        case ADD_STEP_TWO_FORM:
            return action.formTwoValues
        case ADD_STEP_TRHEE_FORM:
            return action.formTrheeValues
        case PROJECT_LIST:         
            return action.projectList
        case SHOW_PROJECT:            
            return action.project
        case ONE_CATEGORY:            
            return action.payload                   
        default:  
        console.log(action.formValues)   
            return state;                
    }
};     


