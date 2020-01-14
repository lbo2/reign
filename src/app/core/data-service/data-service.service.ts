import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url: string = 'http://hn.algolia.com/api/v1/search_by_date?query=nodejs';

  constructor(public httpService: HttpServiceService) { }

  async getPosts() {
    return await this.httpService.httpGet(this.url);
  }
}
