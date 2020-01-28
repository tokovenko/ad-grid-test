import { Component } from '@angular/core';
import { SelectedStateService } from 'src/app/modules/videos-table/services/selected-state.service';
import { VideoItem } from 'src/app/modules/videos-table/services/data.service';

@Component({
  selector: 'app-video-checkbox-cell',
  templateUrl: `./video-checkbox-cell.component.html`
})
export class VideoCheckboxCellComponent {
  video: VideoItem;

  get checked() {
    return this.selectedStateService.isSelected(this.video.id.videoId);
  }

  set checked(state: boolean) {
    this.selectedStateService.toggle(this.video.id.videoId, state);
  }

  constructor(
    private selectedStateService: SelectedStateService
  ) {}

  agInit(item) {
    this.video = item.data;
  }
}
