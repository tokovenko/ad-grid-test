import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { ImageCellComponent } from './components/video-thumb/image-cell.component';
import { VideoLinkCellComponent } from './components/video-link/video-link-cell.component';
import { VideoCheckboxCellComponent } from './components/video-checkbox/video-checkbox-cell.component';
import { VideoSelectAllCheckboxCellComponent } from './components/video-select-all-checkbox/video-select-all-checkbox-cell.component';
import { VideosTableComponent } from './components/videos-table/videos-table.component';
import { DataService } from './services/data.service';
import { SelectedStateService } from './services/selected-state.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ImageCellComponent,
    VideoLinkCellComponent,
    VideoCheckboxCellComponent,
    VideoSelectAllCheckboxCellComponent,
    VideosTableComponent
  ],
  exports: [
    VideosTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([
      ImageCellComponent,
      VideoLinkCellComponent,
      VideoCheckboxCellComponent,
      VideoSelectAllCheckboxCellComponent
    ])
  ],
  providers: [
    DataService,
    SelectedStateService
  ]
})
export class VideosTableModule { }
