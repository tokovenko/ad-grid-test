import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideosTableModule } from './modules/videos-table/videos-table.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VideosTableModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
