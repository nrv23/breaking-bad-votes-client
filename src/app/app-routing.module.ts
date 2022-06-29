import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", // pagina de los personajes
    //aplicar lazy loading
    // para cargar usando lazy loading se debe crear un modulo por cada componente 
    // para cargar el modulo principal del componente y poder usar el lazy loading
    // las rutas que se van a cargar con lazy loading, se les debe crear un routing module y dejar sus rutas 
    // vacías
    loadChildren: () => import('./@pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: "votes", // pagina de los votos
    loadChildren: () => import('./@pages/votes/votes.module').then(({VotesModule}) => VotesModule)
  },
  {
    path: "details/:id", // pagina de los votos
    loadChildren: () => import('./@pages/details/details.module').then(({DetailsModule}) => DetailsModule)
  },
  {
    path: "**", // Si la ruta no existe redireccionar a character
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, //
    scrollPositionRestoration: 'enabled' // siempre va estar arriba
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
