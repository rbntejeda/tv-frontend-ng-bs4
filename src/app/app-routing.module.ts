import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistAdminComponent } from './playlist/playlist-admin/playlist-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LayoutMainComponent } from './page/layout-main/layout-main.component';

const routes: Routes = [
  {
    path:"playlist",
    component:LayoutMainComponent,
    children:[
      { path:"", component:PlaylistAdminComponent },
      { path:"create", component:PlaylistCreateComponent }
    ]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
