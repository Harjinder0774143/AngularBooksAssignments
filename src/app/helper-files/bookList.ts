import {Book} from "./book.interface";

export class BookList{
  private _data: Book[];

  constructor(){this._data = [];}


  get data(): Book[] {
    return this._data;
  }

  addBook(singleData: Book): void{
    this._data.push(singleData);
  }


  numberOfData(): number{
    return this._data.length;
  }

  getBookDetails(index: number): string{
    if (index >= this._data.length || index < 0)
    {
      return "<div>No Book found.</div>"
    }
    let dataAtIndex = this._data[index]
    return `<div class="title"><b>Title: </b>${dataAtIndex.title}</div>
            <div class="description"><b>Description: </b>${dataAtIndex.description}</div>
            <div class="image"><img src="${dataAtIndex.imgURL}" width="200"></div>
            <div class="writer"><b>Writer: </b>${dataAtIndex.writer}</div>
            <div class="price"><b>Price: </b>${dataAtIndex.price}</div>
            <div class="genre"><b>Genre: </b>${dataAtIndex.genre}</div>`;
  }
}