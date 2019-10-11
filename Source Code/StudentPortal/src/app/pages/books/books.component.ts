import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookUrl: any;
  bookImg: any;
  bookTitle: any;
  bookAuthor: any;
  bookList: any[] = [];
  bookValue: any;
  constructor(private _http: HttpClient) { }

  private productsObservable: Observable<any[]>;
  ngOnInit() {
  }
  whenSearch() {
    // @ts-ignore
    this._http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.bookTitle)
      .subscribe((data: any) => {
        for (let i = 0; i < 5; i++) {
          this.bookList[i] = {
            title: data.items[i].volumeInfo.title,
            author: data.items[i].volumeInfo.authors,
            image: data.items[i].volumeInfo.infoLink,
            url: data.items[i].volumeInfo.imageLinks.thumbnail
          };
        }
        console.log(data);
      });
  }
}
