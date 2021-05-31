import * as types from "../actions/actionTypes"


export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // state.push(action.course) ----// dont do this> this mutates state
            //take a copy and create a new array of all the exisiting courses 
            //and update with the one additional course passed in
            return [...state, { ...action.course }];
        //important to return default incase the reducer receives an action that it doesn't care about
        //it should return the unchanged state
        default:
            return state;
    }
}

// you can store by ID instead:
//To arrange by ID, you can declare an objectg instead of an array. Each key is the items id.
//This can provide a faster look up on larger data sets since you can access an element directly by id
//--------------------------------------------
//for example:
// const courses =[
//     {id: 1, title: "Course 1"},
//     {id: 2, title: "Course 2"},
// ]
//-----you would need to use a tool like 'find' to get the course with an ID of '2':
//   course.find(c=>c.id ==2)

// -----OR-------
// We can reference course id directly if we wrote it like the following:
// const courses ={
//     1:{id: 1, title: "Course 1"},
//     2: {id: 2, title: "Course 2"},
// }
//----- courses[2]

//for more inforamtion: https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape 