const books = [
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "To Kill a Mockingbird",
    writer: "Harper Lee",
    price: 10.99,
    isFavourite:true,
    year:2008,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "1984",
    writer: "George Orwell",
    price: 8.99,
    isFavourite:false,
    year:2009,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Pride and Prejudice",
    writer: "Jane Austen",
    price: 9.99,
    isFavourite:false,
    year:2010,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "The Great Gatsby",
    writer: "F. Scott Fitzgerald",
    price: 7.99,
    isFavourite:false,
    year:2012,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Moby Dick",
    writer: "Herman Melville",
    price: 11.99,
    isFavourite:false,
    year:2013,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "War and Peace",
    writer: "Leo Tolstoy",
    price: 12.99,
    isFavourite:false,
    year:2014,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "The Catcher in the Rye",
    writer: "J.D. Salinger",
    price: 10.49,
    isFavourite:false,
    year:2006
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Crime and Punishment",
    writer: "Fyodor Dostoevsky",
    price: 9.49,
    isFavourite:false,
    year:2016
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "The Lord of the Rings",
    writer: "J.R.R. Tolkien",
    price: 14.99,
    isFavourite:false,
    year:2009
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "The Hobbit",
    writer: "J.R.R. Tolkien",
    price: 8.49,
    isFavourite:false,
    year:2019
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Brave New World",
    writer: "Aldous Huxley",
    price: 7.49,
    isFavourite:false,
    year:2001
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "The Brothers Karamazov",
    writer: "Fyodor Dostoevsky",
    price: 13.49,
    isFavourite:false,
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Jane Eyre",
    writer: "Charlotte Brontë",
    price: 9.99,
    isFavourite:false,
    year:2001
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Wuthering Heights",
    writer: "Emily Brontë",
    price: 8.99,
    isFavourite:false,
    year:2008
  },
  {
    id: crypto.randomUUID(),
    image: "../assets/book.png",
    bookName: "Great Expectations",
    writer: "Charles Dickens",
    price: 7.99,
    isFavourite:false,
    year:2007
  },
];

export function getBookList() 
{
    return books
}
