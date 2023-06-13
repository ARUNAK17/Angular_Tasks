import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderImageComponent } from './header-image/header-image.component';
import { BoxComponent } from './box/box.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { NavigateComponent } from './navigate/navigate.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeaderImageComponent,
    BoxComponent,
    FooterComponent,
    ContentComponent,
    SubheaderComponent,
    NavigateComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
