import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { VideoSelectAllCheckboxCellComponent } from '../video-select-all-checkbox/video-select-all-checkbox-cell.component';
import { VideoCheckboxCellComponent } from '../video-checkbox/video-checkbox-cell.component';
import { ImageCellComponent } from '../video-thumb/image-cell.component';
import { VideoLinkCellComponent } from '../video-link/video-link-cell.component';
import { VideoItem, DataService } from '../../services/data.service';
import { SelectedStateService } from '../../services/selected-state.service';


@Component({
  selector: 'app-videos-table',
  templateUrl: './videos-table.component.html',
  styleUrls: ['./videos-table.component.scss']
})
export class VideosTableComponent implements OnInit, OnDestroy {
  @Input() searchText: string;

  destroy$ = new Subject<boolean>();

  isSelecTable = true;
  gridApi;
  gridColumnApi;
  selected = new Map<string, boolean>();
  modules = [ClipboardModule];

  columns = [{
    headerComponentFramework: VideoSelectAllCheckboxCellComponent,
    width: 45,
    lockPosition: true,
    cellRendererFramework: VideoCheckboxCellComponent
  }, {
    headerName: ' ',
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
      headerName: 'Description',
      lockPosition: true,
      field: 'snippet.description'
  }];

  videos: VideoItem[] = [];

  get rowsCount() {
    return this.gridApi ? this.gridApi.getDisplayedRowCount() : 0;
  }

  get selectedCount() {
    return this.selectedStateService.getSelectedCount();
  }

  constructor(
    private dataService: DataService,
    private selectedStateService: SelectedStateService
  ) {}

  ngOnInit() {
    this.dataService.getVideos(this.searchText)
      .subscribe(videos => this.videos = videos);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();

    this.selectedStateService.clear();
  }

  toggleSelectable() {
    this.isSelecTable = !this.isSelecTable;
    this.selectedStateService.clear();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


  getContextMenuItems({column, node}) {
    let result: any[] = [
      'copy',
      'paste',
      'copyWithHeadersCopy',
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
