import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { SelectedStateService } from 'src/app/modules/videos-table/services/selected-state.service';

@Component({
  selector: 'app-video-select-all-checkbox-cell',
  templateUrl: `./video-select-all-checkbox-cell.component.html`
})
export class VideoSelectAllCheckboxCellComponent implements IHeaderAngularComp {
  gridApi;

  get rowsCount() {
    return this.gridApi ? this.gridApi.getDisplayedRowCount() : 0;
  }

  get selectedCount() {
    return this.selectedStateService.getSelectedCount();
  }

  get checked() {
    return this.rowsCount > 0 && this.rowsCount === this.selectedCount;
  }

  set checked(state: boolean) {
    const rows = this.gridApi.rowModel.rowsToDisplay || [];
    rows.forEach(({data}) => this.selectedStateService.toggle(data.id.videoId, state));
  }

  constructor(
    private selectedStateService: SelectedStateService
  ) {}

  agInit({api}) {
    this.gridApi = api;
  }
}
