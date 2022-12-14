import { createAction, props } from "@ngrx/store";


// Imports from other files
import { ActionTypes } from "../actionTypes";
import { RegsiterRequestInterface } from "../../types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegsiterRequestInterface}>()
)

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE
)