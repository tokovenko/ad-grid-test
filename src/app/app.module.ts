import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { ImageCellComponent } from './components/video-thumb/image-cell.component';
import { VideoLinkCellComponent } from './components/video-link/video-link-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCellComponent,
    VideoLinkCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([
      ImageCellComponent,
      VideoLinkCellComponent
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
