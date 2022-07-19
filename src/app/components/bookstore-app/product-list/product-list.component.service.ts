import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService 
{
  private url = 'https://sheet.best/api/sheets/dcf48b89-cb2c-4a2e-b407-c0e8c34f6ed7';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http:HttpClient){

  }

  getBook(){

    return this.http.get(this.url)
  }
  
}
