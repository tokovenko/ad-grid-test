import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, VideoItem } from './services/data.service';
import { Subject } from 'rxjs';
import { ImageCellComponent } from './components/video-thumb/image-cell.component';
import { VideoLinkCellComponent } from './components/video-link/video-link-cell.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();

  isSelecTable = true;
  gridApi;
  gridColumnApi;

  columns = [{
    headerCheckboxSelection: this.isSelecTable,
    checkboxSelection: this.isSelecTable,
    headerName: ' ',
    field: 'Image',
    width: 130,
    autoHeight: true,
    lockPosition: true,
    cellRendererFramework: ImageCellComponent
  }, {
    width: 120,
    headerName: 'Published on',
    field: 'snippet.publishedAt',
    lockPosition: true,
    filter: 'agDateColumnFilter',
    valueFormatter: (data) => (new Date(data.value)).toLocaleDateString()
  }, {
    headerName: 'Video Title',
    lockPosition: true,
    field: 'snippet.title',
    cellRendererFramework: VideoLinkCellComponent
  }, {
      // width: 'auto',
      headerName: 'Description',
      lockPosition: true,
      field: 'snippet.description'
  }];

  videos: VideoItem[] = [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleSelectable() {
    this.isSelecTable = !this.isSelecTable;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


  getContextMenuItems({column, node}) {
    let result: any[] = [
      'copy',
      'separator',
      'export'
    ];

    if (column.colId === 'snippet.title') {
      result = [{
        name: 'Open in new tab',
        action: () => {
          window.open(`https://www.youtube.com/watch?v=${node.data.id.videoId}`, '_blank');
        },
      }, 'separator', ...result];
    }

    return result;
  }
}
