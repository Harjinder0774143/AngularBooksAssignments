import { Component, OnInit } from '@angular/core';
import { Book} from '../helper-files/book.interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  bookList!: Book[];

  constructor() {
    this.bookList = [
      {
        id: 0,
        title: "A Burning in My Bones",
        description: "This essential authorized biography of Eugene Peterson offers unique insights into the experiences and spiritual convictions of the iconic American pastor and beloved translator of The Message.",
        imgURL:  'https://images-na.ssl-images-amazon.com/images/I/81GyfzThWZL.jpg',
        writer: "Winn Collier",
        genre: ["Biography", "Reality"],
        price: "$16.99",
    }, {
      id: 1,
      title: "Steve Jobs",
      description:'Steve Jobs is the authorized self-titled biography of American business magnate and Apple co-founder Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and TIME who has written best-selling biographies of Benjamin Franklin and Albert Einstein.',
      imgURL:  'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
      writer: "Walter Isaacson",
      genre: ["Biography", "Reality"],
      price: "$24.99",
    }, {
      id: 2,
      title: "The Subtle Art of Not Giving a F*ck",
      description:'The Subtle Art of Not Giving a Fuck is a book about finding meaning in important things  in life and only having those values that an individual can control.',
      imgURL:  'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg',
      writer: "Mark Manson",
      genre: ["Mindset", "Positive Thinking"],
      price: "$19.99",
    }, {
      id:3,
      title: "The Monk Who Sold His Ferrari",
      description:'The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and  motivational speaker. The book is a business fable derived from Sharma personal experiences after leaving his career as a litigation lawyer at the age of 25.',
      imgURL:  'https://upload.wikimedia.org/wikipedia/en/3/34/The_Monk_Who_Sold_His_Ferrari.jpg',
      writer: "Robin Sharma",
      genre: ["Mindset", "Positive Thinking"],
      price: "$19.99",
    }, {

      id:4,
      title: "The Power of Now",
      description:'Eckhart Tolles message is simple: living in the now is the truest path to happiness and enlightenment. And while this message may not seem stunningly original or fresh, Tolles clear writing, supportive voice and enthusiasm make this an excellent manual for anyone whos ever wondered what exactly "living in the now" means',
      imgURL:  'https://m.media-amazon.com/images/I/4108V6JJ+jL.jpg',
      writer: "Eckhart Tolle",
      genre: ["Mindset", "Positive Thinking"],
    }, {
      id:5,
      title: "TThe Last Wish: Introducing the Witcher",
      description:'Geralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent. He roams the country seeking assignments, but gradually comes to realise that while some of his quarry are unremittingly vile, vicious grotesques, others are the victims of sin, evil or simple naivety.',
      imgURL:  'https://m.media-amazon.com/images/I/51H9T3jvcZL.jpg',
      writer: "Andrzej Sapkowski",
      price: "$69.09",
    }
  ];
   }

  ngOnInit(): void {
  }

}
