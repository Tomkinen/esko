import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ApiconnectionService {
  private createUrl = "api/create/";
  private listUrl = "api/list/";
  private deleteUrl = "api/delete/";

  constructor(private http: HttpClient) {}

  doList(): Promise<any> {
    return this.http
      .get(this.listUrl)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(response => {
        return response;
      });
  }
  doCreate(lunchData): Promise<any> {
    return this.http
      .post(this.createUrl,lunchData)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(response => {
        return response;
      });
  }
  doDelete(lunchData): Promise<any> {
    return this.http
      .post(this.deleteUrl,lunchData)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(response => {
        return response;
      });
  }
}
