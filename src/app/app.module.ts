import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistAdminComponent } from './playlist/playlist-admin/playlist-admin.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { LayoutMainComponent } from './page/layout-main/layout-main.component';
import { EntryAdminComponent } from './entry/entry-admin/entry-admin.component';
import { EntryCreateComponent } from './entry/entry-create/entry-create.component';
import { PlaylistViewComponent } from './playlist/playlist-view/playlist-view.component';
import { ConfigComponent } from './page/config/config.component';
import { PlaylistUpdateComponent } from './playlist/playlist-update/playlist-update.component';
import { PlaylistChangeEntryComponent } from './playlist/playlist-change-entry/playlist-change-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCreateComponent,
    PlaylistAdminComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LayoutMainComponent,
    EntryAdminComponent,
    EntryCreateComponent,
    PlaylistViewComponent,
    ConfigComponent,
    PlaylistUpdateComponent,
    PlaylistChangeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
