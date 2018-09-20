import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpParams, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable()

export class ProductserviceService {
    Products;
    productPath:string  = 'http://0.0.0.0:3000/products.json'
    
    constructor(private httpClient: HttpClient) {}
  
    getProducts(categoryId: string, name: string, sortColumn: string, sortValue: string): Observable <any> {
  let params = new HttpParams()
        .set('category_id', categoryId)
        .set('name', name)
        .set('sort_column', sortColumn)
        .set('sort_value', sortValue);
       // http://0.0.0.0:3000/products.json?category_id=1&sort_column=desc&sort_value=name
        return this.httpClient.get<any>(this.productPath, {params} );
    }
  }