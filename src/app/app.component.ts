import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductserviceService } from './productservice.service'
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  products;
  categoryId;
  name;
  sortColumn;
  sortValue;
  constructor(private productService: ProductserviceService) {
  }
    public getProducts() {
      this.productService.getProducts(this.categoryId,this.name,this.sortColumn,this.sortValue)
      .subscribe((response)=> { this.products = response;}
    )
    }
  }