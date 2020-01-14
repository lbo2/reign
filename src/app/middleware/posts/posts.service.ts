import { Injectable } from '@angular/core';
import { DataServiceService } from '../../core/data-service/data-service.service';
import * as moment from 'moment';
import { UtilsService } from '../../shared/utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private data: DataServiceService, private utils: UtilsService) { }

  async getPosts() {
    let dataFormatted = [];
    let data: any = await this.data.getPosts();
    data.hits.forEach(post => {
      post.created_at_modified = this.utils.formatDisplayDate(post.created_at);
      dataFormatted.push(post);
    });
    return dataFormatted;
  }
}
