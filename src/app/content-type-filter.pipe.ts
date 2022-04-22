import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './helper-files/book.interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(bookList: Book[], filterByThisType?: string): Book[] {
    console.log("filter value: ", filterByThisType);
    return bookList.filter(c => {
      if (filterByThisType) {
        return c.type == filterByThisType;
      } else { // filterByThisType is not set
        return !c.type; // keep items where type is not set as well
      }
    });
  }

}
