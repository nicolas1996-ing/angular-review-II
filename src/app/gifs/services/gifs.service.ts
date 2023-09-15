import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetGifsResponse, Gif } from '../interfaces/getGifs.interface';

const GIPHY_API_KEY = 'vukjrIW3blc49jPIQrrWwH0AEbhiKVHB';
const BASE_URL = 'https://api.giphy.com/v1/gifs/';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];
  public _gifList: Gif[] = [];

  constructor(private httpClient: HttpClient) {
    this.getLocalStorage();
  }

  // getter para obtener el historial de tags
  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  get gifList(): Gif[] {
    return [...this._gifList];
  }

  // persistencia de información
  private saveLocalStorage(): void {
    localStorage.setItem(
      'GIF-APP-ANGULAR-HISTORY',
      JSON.stringify(this._tagHistory)
    );
  }

  private getLocalStorage(): void {
    const data = localStorage.getItem('GIF-APP-ANGULAR-HISTORY');
    if (data && data.length > 0) {
      this._tagHistory = JSON.parse(data);
      this.getGifs(this._tagHistory[0]).subscribe({
        next: ({ data }) => (this._gifList = data),
      });
    }
  }

  // añadir tags al historial de tags
  addSearchTag(tag: string) {
    if (tag.length === 0 || this._tagHistory.includes(tag)) return;
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
    /*
     const data = await this.searchWithFetch(tag);
     console.log(data)
    */
  }

  getGifs(tag: string): Observable<GetGifsResponse> {
    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', 10);

    return this.httpClient.get<GetGifsResponse>(`${BASE_URL}search/`, {
      params,
      headers: {},
    });
  }

  async searchWithFetch(term: string): Promise<any> {
    const resp = await fetch(
      `${BASE_URL}search/?api_key=${GIPHY_API_KEY}&q=${term}`
    );
    const data = await resp.json();
    return data;
  }
}
