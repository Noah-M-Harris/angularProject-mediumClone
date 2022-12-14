import { createFeatureSelector, createSelector } from '@ngrx/store'

// Imports from other files
//import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { AuthStateInterface } from '../types/authState.interface'

//export const authFeatureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth') -- does not work v13, deprecated & overloaded
export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => authState.isSubmitting)