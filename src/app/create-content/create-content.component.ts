import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../helper-files/book.interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Book>();
  newBook: Book = {
    id: -1, title:'', description: '', writer: '', price:'', type: undefined
  };
  tempId: string = '';
  tempTags:string = '';
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addBookFromChild(): void {

    let bookPromise = new Promise((success, fail) => {
      if (!this.tempId || !this.newBook.title || !this.newBook.description || !this.newBook.writer)
      {
        fail("Book detail is missing");
        return;
      }
      // part of the promise
      console.log("child is working");
      this.newBook.genre = this.tempTags.split(';');
      this.newBook.id = parseInt(this.tempId);
      this.newContentEvent.emit(this.newBook);
      success("Book added successfully " + this.newBook.id + ", title is: " + this.newBook.title);      
    });
    bookPromise.then((successMessage) => { 
      console.log(successMessage);
      this.newBook = {
        id: -1, title: "", description: '', writer: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      this.errorMessage = "";
    }).catch(failMessage => {
      this.errorMessage = "Something went wrong! - " + failMessage;
    });
  }

}
