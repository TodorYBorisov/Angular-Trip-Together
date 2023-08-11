import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthActivate } from "../shared/guards/authActivate";
import { NonAuthActivated } from "../shared/guards/nonAuthActivate";


const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [NonAuthActivated],
                title: 'Login Page'
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [NonAuthActivated],
                title: 'Sign Up',
            },
            {
                path: 'logout',
                component: LogoutComponent,
                title: 'Logout Page',
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthActivate],
                title: 'Profile Page',
            }
        ]
    }
]


export const AuthRoutingModule = RouterModule.forChild(routes);