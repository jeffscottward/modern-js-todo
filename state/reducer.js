import useNotification from '../hooks/useNotification'

function taskReducer(state, action) {
  console.log("taskReducer", state, action)
  switch (action.type) {

    case "REMOVE_SPECIFIC_TASK":
      state.splice(action.payload,1)
      localStorage.setItem("tasks", JSON.stringify([...state]))
      return [...state];

    case "TOGGLE_COMPLETION_OF_TASK":
      state[action.payload].complete = !state[action.payload].complete
      localStorage.setItem("tasks", JSON.stringify([...state]))
      if([...state].filter(item => item.complete === false).length === 0){
        useNotification('Congrats - You finished all the tasks')
      }
      return [...state];

    case "EDIT_TASK":
      state[action.payload.idx].title = action.payload.title
      localStorage.setItem("tasks", JSON.stringify([...state]));
      return [...state];

    case "ADD_NEW_TASK":
      //check for duplicates
      let checkDupes = state.filter(item => item.title === action.payload)
      if (checkDupes.length === 0){
        state.unshift(
          {title:action.payload,
           state: "incomplete"}
        )
      }
      localStorage.setItem("tasks", JSON.stringify([...state]))
      return [...state];

      default:
      return state;
  }
}

export default function mainReducer ({ tasks }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    tasks: taskReducer(tasks, action)
  };
}
