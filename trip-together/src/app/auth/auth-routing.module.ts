import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";


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
                title: 'Home Page',
            },
            {
                path: 'profile',
                component: ProfileComponent,
                title: 'Profile Page',
            }
        ]
    }
]


export const AuthRoutingModule = RouterModule.forChild(routes);