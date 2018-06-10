import { constants } from '../../constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioSummaryApiService {

  private serviceEndpoint = constants.serviceEndPoints.potfolioSummary;

  constructor(private http: Http) { }

  public getPortfolioSummaryData() {
    return this.http.get(this.serviceEndpoint)
      .map(response => response.json());
  }
}
