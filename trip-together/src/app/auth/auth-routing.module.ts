import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthActivate } from "../shared/guards/authActivate";


const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                title: 'Login Page'
            },
            {
                path: 'register',
                component: RegisterComponent,
                title: 'Sing Up',
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