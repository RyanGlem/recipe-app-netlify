import axios from 'axios'




// Action Types
const GOT_USERS = 'GOT_USERS'
const GOT_RECIPES = 'GOT_RECIPES'
const CREATE_USER = 'CREATE_USER'


//Initial state
const init = {
    users: [],
    recipes: [],
    newUser: []
}

// Action Creatures
const gotUsers = (data) => ({
    type: GOT_USERS,
    data,
})

const gotRecipes = (data) => ({
    type: GOT_RECIPES,
    data,
})

const userCreation = (data) => ({
    type: CREATE_USER,
    data,
})

// Thunks unwraps functions and returns objects (Middleware)
export const getUsers = () => {
    return async (dispatch) => {
        try {
            
            const response = await axios.get('https://capstone-recipe-db.herokuapp.com/users')
            dispatch (gotUsers(response.data))
            console.log (response.data.users)
        } catch (error) {
            console.error(error)
    
        }
    }
}

export const getRecipes = () => {

    return async (dispatch) => {
        try {
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=b0f4c33cd03e43d7b3e88a79cbc8e06c')
                dispatch (gotRecipes(response.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const createUser = (body) => {
    return async (dispatch) => {
    try {
        const response = await axios.post('https://capstone-recipe-db.herokuapp.com/users/', body)
        dispatch (userCreation(response.data))
    } catch (error) {
        console.error(error)
        }
    }
}

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case CREATE_USER:
            let newState = [action.data, ...state]
            return newState
        case GOT_USERS:
            return action.data
        case GOT_RECIPES:
            return action.data
        default:
            return state;
    }
}

export default rootReducer;