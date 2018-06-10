import { constants } from '../../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CmsApiService {
  private serviceEndpoint = constants.serviceEndPoints.cmsData;

  constructor(private http: Http) {}

  getContent() {
    return this.http.get(this.serviceEndpoint)
        .map(response => response.json());
  }
}
