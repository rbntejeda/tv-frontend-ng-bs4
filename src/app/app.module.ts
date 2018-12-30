import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistAdminComponent } from './playlist/playlist-admin/playlist-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { LayoutMainComponent } from './page/layout-main/layout-main.component';
import { EntryAdminComponent } from './entry/entry-admin/entry-admin.component';
import { EntryCreateComponent } from './entry/entry-create/entry-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCreateComponent,
    PlaylistAdminComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LayoutMainComponent,
    EntryAdminComponent,
    EntryCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
