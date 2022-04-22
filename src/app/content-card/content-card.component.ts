import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../helper-files/book.interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() book?:Book;

  constructor(){}



  ngOnInit(): void {
  }

  imageClicked(): void {
    //console.log("ID: ", this.book?.id, ", Title: ", this.book?.title);
  }

}
