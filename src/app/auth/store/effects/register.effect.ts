import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { Actions, ofType } from "@ngrx/effects/src";
import { switchMap, catchError, map } from 'rxjs/operators'
import { of } from 'rxjs'



// Imports from other files
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";


@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => 
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({request}) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return registerSuccessAction({currentUser})
                    }),

                    catchError(() => {
                        return of(registerFailureAction())
                    })
                )
            })
        ))


    constructor(private actions$: Actions, private authService: AuthService) {}
}