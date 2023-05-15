/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'oV89d80FS41Jbtz2Ux3IhIbLMoSsiN27';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private http = inject(HttpClient);

  constructor() {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTags(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeTags(tag);

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '8').set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params }).subscribe(resp => {
      this.gifsList = resp.data;
      // console.log({ gifs: this.gifsList });
    });
  }
}
