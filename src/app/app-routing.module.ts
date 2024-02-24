import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent, //aqui ele encaminha para o componente home, aqui como o path não tem nada ele vai ser a pagina inicial so com o http://localhost:4200
  },
  {
    path:'content/:id',
    component:ContentComponent, //aqui encaminha para o componente content,basta colocar na barra de pesquisa http://localhost:4200/content
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
