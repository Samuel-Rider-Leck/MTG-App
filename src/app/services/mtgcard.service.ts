import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MTGCard, MTGCardResponse } from '../classes/mtgcard';


@Injectable({
  providedIn: 'root'
})
export class MTGCardService {
  constructor(private httpClient: HttpClient) { }

  private cardarray: any

  configURL = "https://api.magicthegathering.io/v1/cards?random=true"

  getCards(): Observable<MTGCardResponse> {
    return this.httpClient.get<MTGCardResponse>(this.configURL)
  }

}
