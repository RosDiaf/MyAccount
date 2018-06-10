import { constants } from '../../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerProfileApiService {

  private serviceEndpoint = constants.serviceEndPoints.customerProfile;

  constructor(private http: Http) { }

  public getCustomerProfile() {
    return this.http.get(this.serviceEndpoint)
      .map(response => response.json());
  }
}
