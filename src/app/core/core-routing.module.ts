import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';

const routes: Routes= [
  {
    path:'',
    component: CoreComponent,
    children:[ 
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'token',
        component: TokenComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
