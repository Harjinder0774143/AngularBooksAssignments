import { Component, OnInit } from '@angular/core';
import { BookList } from '../helper-files/bookList';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  bookList!: BookList;

  constructor(){

    this.bookList = new BookList();
    console.log("my list contains these items: ", this.bookList.data);

    this.bookList.addBook({
      id: 0,
      title: "A Burning in My Bones",
      description: "This essential authorized biography of Eugene Peterson offers unique <br/> insights into the experiences and spiritual convictions of the iconic American pastor and beloved translator of The Message.",
      imgURL:  'https://images-na.ssl-images-amazon.com/images/I/81GyfzThWZL.jpg',
      writer: "Winn Collier",
      genre: ["Biography", "Reality"],
      price: "$16.99",
    });
    this.bookList.addBook({
      id: 1,
      title: "Steve Jobs",
      description:'Steve Jobs is the authorized self-titled biography of American business <br/> magnate and Apple co-founder Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and TIME who has written best-selling biographies of Benjamin Franklin and Albert Einstein.',
      imgURL:  'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
      writer: "Walter Isaacson",
      genre: ["Biography", "Reality"],
      price: "$24.99",
    });
    this.bookList.addBook({
      id: 2,
      title: "The Subtle Art of Not Giving a F*ck",
      description:'The Subtle Art of Not Giving a Fuck is a book about finding meaning in important things <br/> in life and only having those values that an individual can control.',
      imgURL:  'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg',
      writer: "Mark Manson",
      genre: ["Mindset", "Positive Thinking"],
      price: "$19.99",
    });
    this.bookList.addBook({
      id:3,
      title: "The Monk Who Sold His Ferrari",
      description:'The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and <br/> motivational speaker. The book is a business fable derived from Sharma personal experiences after leaving his career as a litigation lawyer at the age of 25.',
      imgURL:  'https://upload.wikimedia.org/wikipedia/en/3/34/The_Monk_Who_Sold_His_Ferrari.jpg',
      writer: "Robin Sharma",
      genre: ["Mindset", "Positive Thinking"],
      price: "$19.99",
    
    });


    // console.log("my book list : ", this.bookList.data);

    // console.log("The number of books are:  ", this.bookList.numberOfData());

    // console.log("THe book details is: ", this.bookList.getBookDetails(0));


  }



  ngOnInit(): void {
  }

}
