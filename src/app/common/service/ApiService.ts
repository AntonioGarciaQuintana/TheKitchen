import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {

  options: RequestOptions;
  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: headers });

  }

  addElement(obj: any) {
    return this.http.post('http://localhost:8080/save', JSON.stringify(obj), this.options);
  }
}
