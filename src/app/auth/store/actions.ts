import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";

// Imports from other files
import { RegsiterRequestInterface } from "../types/registerRequest.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegsiterRequestInterface}>()
)