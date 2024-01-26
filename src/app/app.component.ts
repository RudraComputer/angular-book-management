import { Component } from '@angular/core';
import { Book } from '../assets/models/book'
import { BOOK } from '../assets/models/book-mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-list-search';
  books: Book[] = BOOK;
  constructor() { }

  ngOnInit(): void {
    this.books = BOOK;
  }
}
