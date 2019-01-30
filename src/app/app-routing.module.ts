import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistAdminComponent } from './playlist/playlist-admin/playlist-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LayoutMainComponent } from './page/layout-main/layout-main.component';
import { EntryAdminComponent } from './entry/entry-admin/entry-admin.component';
import { EntryCreateComponent } from './entry/entry-create/entry-create.component';
import { PlaylistViewComponent } from './playlist/playlist-view/playlist-view.component';
import { ConfigComponent } from './page/config/config.component';
import { PlaylistUpdateComponent } from './playlist/playlist-update/playlist-update.component';
import { PlaylistChangeEntryComponent } from './playlist/playlist-change-entry/playlist-change-entry.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"playlist",
    pathMatch:"full"
  },
  {
    path:"playlist",
    component:LayoutMainComponent,
    children:[
      { path:"", component:PlaylistAdminComponent },
      { path:"create", component:PlaylistCreateComponent },
      { path:":id", component:PlaylistViewComponent },
      { path:":id/entry", component:PlaylistChangeEntryComponent },
      { path:"update/:id", component:PlaylistUpdateComponent },
    ]
  },
  {
    path:"entry",
    component:LayoutMainComponent,
    children:[
      { path:"", component:EntryAdminComponent },
      { path:"create", component:EntryCreateComponent }
    ]
  },
  {
    path:"config",
    component:LayoutMainComponent,
    children:[
      { path:"", component: ConfigComponent }
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
