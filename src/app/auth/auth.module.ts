import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from "@ngrx/effects/src";

// Imports from Files
import { RegisterComponent } from "./components/register/register.component";
import { reducers } from "./store/reducers";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";


const routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes), 
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect])
    ],
    declarations: [RegisterComponent],
    providers: [AuthService]
})


export class AuthModule {}