import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'category',component:CategoryComponent},
    {path:'**',component:HomeComponent}
];
