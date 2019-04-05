import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {path: 'vagas', loadChildren: './pages/vagas/vagas.module#VagasPageModule'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  {
    path: 'github-auth',
    loadChildren: './github-auth/github-auth.module#GithubAuthPageModule'
  },
  {
    path: 'cadastro-vaga',
    loadChildren:
      './pages/cadastro-vaga/cadastro-vaga.module#CadastroVagaPageModule'
  },
  {
    path: 'cadastro-vaga/:id',
    loadChildren:
      './pages/cadastro-vaga/cadastro-vaga.module#CadastroVagaPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
