export interface Book{
    id: number,
    title: string,
    description: string,   
    imgURL?:  string,
    writer: string,
    genre?: string[],
    tags?:string,
    type?: string;
    price?: string,
  }