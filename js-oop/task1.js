import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Moby-Dick","Herman Melville",1851);
book1.printInfo();
const book3 = new Book("Pride and Prejudice","Jane Austen",1813);
book3.printInfo();

const ebook1 = new EBook("1984","George Orwell", 1949, "PDF");
ebook1.printInfo()

const books = [book1, book3, ebook1];
console.log("The Oldest Book:");
Book.getOldestBook(books).printInfo();


const ebook2 = EBook.createEBookFromBook(book1, "JPEG");
ebook2.printInfo();
