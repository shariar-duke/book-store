import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import bg from "./assets/bookBackground.jpg";
import { getBookList } from "./data/book-data";
import { useState } from "react";
export default function App() {
  const books = getBookList();
  const [bookList, setBookList] = useState(books);



  const handleFavourite = (bookId) => {
    const newBookList = bookList.map((book) =>
      book.id == bookId ? { ...book, isFavourite: !isFavourite } : book
    );

    setBookList(newBookList);
  };

  return (
    <div className="h-screen w-full bg-cover bg-no-repeat bg-[#F1F1F3]">
      <div className="flex flex-col gap-[30px]  py-[20px]">
        <Nav />
        <Hero setBookList={setBookList} bookList={bookList} />
        <BookList bookList={bookList} handleFavourite={handleFavourite} />
      </div>
    </div>
  );
}
