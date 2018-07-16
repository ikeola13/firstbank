
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupsComponent } from './signups/signups.component';
import { NewComponent } from './new/new.component';





export const appRoutes : Routes=[
    {path:'', component: NewComponent},
    {path:'home', component: NewComponent},
    {path: 'former', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'signups', component: SignupsComponent}
    
    
];