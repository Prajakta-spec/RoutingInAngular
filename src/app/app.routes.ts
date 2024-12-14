import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { NgTempletComponent } from './components/directive/ng-templet/ng-templet.component';
import { GetApiComponent } from './components/apiintegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiintegration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { ViewChildComponent } from './decorator/view-child/view-child.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

    //default route - there is nothing in url the it divert to empty route path
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path:'login',
        component: LoginComponent
    },

    {
        path:'',
        component:LayoutComponent,
        children:[

            {
                path:'add-employee',
                component: AddEmployeeComponent
            },  
        
            {
                path:'data-binding',
                component: DataBindingComponent
            },
        
            {
                path:'employee-list',
                component: EmployeeListComponent
            },
        
            {
                path:'structural-directive',
                component: StructuralDirectiveComponent
            },
        
            {
                path:'attribute-directive',
                component: AttributeDirectiveComponent
            },
        
            {
                path:'directive',
                component: DirectiveComponent,
                children: [
                    {
                        path: 'ng-templet',
                        component : NgTempletComponent
                    }
                ]
            },
        
            {
                path: 'get-api',
                component: GetApiComponent
            },
        
            {
                path: 'post-api',
                component: PostApiComponent
            },
        
            {
                path:'lifecycle-event',
                component: LifecycleEventComponent
            },
            
            {
                path:'view-child',
                component: ViewChildComponent
        
            }

        ]
    }

    
];
