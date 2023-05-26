import { ADD_LIST, REMOVE_LIST, EDIT_LIST, DONE_LIST } from "../action/todoAction";

const initialState = {
    completed: ["Group Project","Landing Page Project","BMI Calculator", "Personal Portofolio"],
    active: ["Final Group Project","To do list Project"],
}

function todoReducer(state = initialState, action) {
    console.log(action)

    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                active: [...state.active, action.add]
            }
        case DONE_LIST:
            console.log("Done Task", action.index)
            console.log("Done : ", state.active[action.index])
            const doneTask = state.active[action.index]
            const newTodo = state.active.filter((item, index) => index != action.index)
            return {
                ...state,
                active: newTodo,
                completed: [...state.completed, doneTask]
            }
        case REMOVE_LIST:
            console.log("Delete Task")
            console.log("Delete : ", action.index)
            const deletedTodo = state.active.filter((item, index) => index != action.index)
            return {
                ...state,
                active: deletedTodo
            }
        case EDIT_LIST:
            console.log("Edit Task")
            console.log("Edit: ", state.active[action.index])
            console.log("Edited to: ", action.input)
            const editedTodo = state.active.map((item, index) => {
                if (index == action.index)
                    return action.input
                return item
            })
            console.log("edited: ", editedTodo)
            return {
                ...state,
                active: editedTodo
            }
        default:
            return state;
    }
}

export default todoReducer