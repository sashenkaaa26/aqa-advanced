import { Book } from "./Book.js"
export class EBook extends Book{
  constructor(bookName,author,year,fileFormat){
    super(bookName,author,year);
    this.fileFormat = fileFormat;
  }
  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Формат файлу має бути рядком.");
    }
    this._fileFormat = value;
  }

  printInfo(){
    console.log(`Name: ${this.bookName}, Author: ${this.author} , Year: ${this.year}, File Format: ${this.fileFormat}`)
  }
  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.bookName, book.author, book.year, fileFormat);
  }
}

// const ebook1 = new EBook("EBookName1","EBookAuthor1", 2001, "PDF");
// ebook1.printInfo()