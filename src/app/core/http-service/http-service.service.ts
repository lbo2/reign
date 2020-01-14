import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  async httpGet(url: string) {
    const data = await this.http.get(url).toPromise();
    return data;
  }

  async httpPost(url: string, body: any) {
    const data = await this.http.post(url, body, this.httpOptions).toPromise();
    return data;
  }

}
