import { Injectable } from '@angular/core';
import { DataServiceService } from '../../core/data-service/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private data: DataServiceService) { }

  async getPosts() {
    let data: any = await this.data.getPosts();
    console.log(data);
    return data.hits;
  }
}
