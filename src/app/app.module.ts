import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistAdminComponent } from './playlist/playlist-admin/playlist-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { LayoutMainComponent } from './page/layout-main/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCreateComponent,
    PlaylistAdminComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
