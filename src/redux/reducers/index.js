import axios from 'axios'




// Action Types
const GOT_USERS = 'GOT_USERS'
const GOT_RECIPES = 'GOT_RECIPES'
const CREATE_USER = 'CREATE_USER'
const LOGIN_USER = 'LOGIN_USER'
const INVALID_LOGIN = 'INVALID_LOGIN'
const GET_ME = 'GET_ME'
const LOGOUT = 'LOGOUT'
const CREATE_RECIPE = 'CREATE_RECIPE'

//Initial state
const init = {
    users: [],
    recipes: [],
    newUser: [],
    user: {},
    loginError: false,
    isLoggedIn: false
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

const getMe = (data) => ({
    type: GET_ME,
    data
})

const userLogin = (data) => ({
    type: LOGIN_USER,
    data
})

const invalidLogin = () => ({
    type: INVALID_LOGIN
})

const userLogout = () => ({
    type: LOGOUT
})

const recipeCreation = (data) => ({
    type: CREATE_RECIPE,
    data
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

export const getRecipes = (term) => {
    term = "bagel"
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${term}`)
                dispatch (gotRecipes(response.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const createRecipe = (body) => {
    return async (dispatch) => {
    try {
        const response = await axios.post('https://capstone-recipe-db.herokuapp.com/recipes/', body, { withCredentials: true })
        
  
        dispatch (recipeCreation(response.data))
    } catch (error) {
        console.error(error)
        }
    }
}


export const createUser = (body) => {
    return async (dispatch) => {
    try {
        const response = await axios.post('https://capstone-recipe-db.herokuapp.com/auth/signup', body, {withCredentials: true})
        dispatch (userCreation(response.data))
    } catch (error) {
        console.error(error)
        }
    }
}

export const sessionCheck = () => async dispatch => {
    try {
        const res = await axios.get('https://capstone-recipe-db.herokuapp.com/auth/me', {withCredentials: true})
        console.log('SESS CHECK: ', res.data)
        dispatch(getMe(res.data))
    } catch (err) {
        console.log('No active session, default logged out')
    }
}

export const loginUser = (body) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://capstone-recipe-db.herokuapp.com/auth/login', body, {withCredentials: true})
            dispatch(userLogin(response.data))
        } catch (err) {
            dispatch(invalidLogin())
            //console.error(JSON)    
        }
    }
}

export const logoutUser = () => async dispatch => {
    try {
        const res = await axios.delete('https://capstone-recipe-db.herokuapp.com/auth/logout')
        dispatch(userLogout())
    } catch (err) {
        console.error('Failed to logout')
    }
}

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case GOT_USERS:
            return action.data
        case GOT_RECIPES:
            return {...state, recipes: [action.data]}
        case CREATE_RECIPE:
            return {...state, recipes: [...state.recipes, action.data.recipe ]}
        case LOGOUT:
            return {...state, loginError: false, isLoggedIn: false }
        case GET_ME:
        case CREATE_USER:
        case LOGIN_USER:
            return {...state, user: action.data, loginError: false, isLoggedIn: true }
        case INVALID_LOGIN: 
            return {...state, loginError: true, isLoggedIn: false }
        default:
            return state;
    }
}

export default rootReducer;