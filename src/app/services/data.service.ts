import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


export interface DataStructure {
  items: VideoItem[];
}

export interface VideoItem {
  snippet: {
    publishedAt: string,
    title: string,
    description: string,
    thumbnails: {
      default: VideoItemThumbnail,
      medium: VideoItemThumbnail
      high: VideoItemThumbnail
    }
  };
}

export interface VideoItemThumbnail {
  url: string;
  width: number;
  height: number;
}

const DATA_LINK = `https://www.googleapis.com/youtube/v3/search?key=${environment.dataKey}&maxResults=50&type=video&part=snippet&q=john`;

@Injectable()
export class DataService {
  constructor(
    private http: HttpClient
  ) {}

  getVideos() {
    return this.http.get(DATA_LINK)
      .pipe(map((data: DataStructure) => data.items));
  }
}
