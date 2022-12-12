import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'

// Imports from Files
import { RegisterComponent } from "./components/register/register.component";

const routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
    declarations: [RegisterComponent]
})


export class AuthModule {}