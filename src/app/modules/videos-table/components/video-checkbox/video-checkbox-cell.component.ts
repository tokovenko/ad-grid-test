import { Component } from '@angular/core';
import { VideoItem } from '../../services/data.service';
import { SelectedStateService } from '../../services/selected-state.service';

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
