import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export interface Restaurant {
  id: number;
  name: string;
  orderNumber: number;
  url: string;
}

export interface CreateRestaurant {
  create: boolean;
}

export interface DeleteRestaurant {
  delete: boolean;
}

@Injectable()
export class ApiconnectionService {
  private createUrl = "api/create/";
  private listUrl = "api/list/";
  private deleteUrl = "api/delete/";
  constructor(private http: HttpClient) {}

  doList(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.listUrl);
  }

  doCreate(lunchData): Observable<CreateRestaurant> {
    return this.http.post<CreateRestaurant>(this.createUrl, lunchData);
  }

  doDelete(lunchData): Observable<DeleteRestaurant> {
    return this.http.post<DeleteRestaurant>(this.deleteUrl, lunchData);
  }
}
