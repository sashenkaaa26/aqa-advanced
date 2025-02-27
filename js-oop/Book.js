export class Book{
  constructor(bookName,author,year){
    this.bookName = bookName;
    this.author = author;
    this.year = year;
  }
  get bookName() {
    return this._bookName;
  }
  set bookName(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва книги повинна бути рядком.");
    }
    this._bookName = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор повинен бути рядком.");
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("Рік має бути додатним цілим числом.");
    }
    this._year = value;
  }

  printInfo(){
    console.log(`Name: ${this.bookName}, Author: ${this.author} , Year: ${this.year}.`)
  }
  static getOldestBook(books) {
    return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
  }
}

// const book1 = new Book("bookName1","author1",1998);
// book1.printInfo();
// const book2 = new Book("bookName2", "",1996);
// book2.printInfo();
// const book3 = new Book("","author3",1993);
// book3.printInfo();
