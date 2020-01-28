import { Component } from '@angular/core';
import { VideoItem } from '../../services/data.service';

@Component({
  selector: 'app-video-link-cell',
  templateUrl: `./video-link-cell.component.html`
})
export class VideoLinkCellComponent {
  video: VideoItem;

  agInit(item) {
    this.video = item.data;
    console.log('this.video: ', this.video);
  }
}
