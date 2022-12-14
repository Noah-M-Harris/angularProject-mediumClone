import { createReducer, on, Action } from '@ngrx/store'

// Imports from other files
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from './actions/register.action';



// Initial State
const initialState: AuthStateInterface = {
    isSubmitting: false
}

// Reducer Function - changes our state
const authReducer = createReducer(
    initialState, 
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true
    }))
)

// Preparing for production
export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}