import { Component } from '@angular/core';
import { VideoItem } from '../../services/data.service';

@Component({
  selector: 'app-image-cell',
  templateUrl: `./image-cell.component.html`
})
export class ImageCellComponent {
  video: VideoItem;

  agInit(item) {
    this.video = item.data;
  }
}
