import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import bg from "./assets/bookBackground.jpg"
import { getBookList } from "./data/book-data";
import { useState } from "react";
export default function App() {
  const books = getBookList();
  const [bookList, setBookList] = useState(books);
  return (
    <div style={{backgroundImage:`url('${bg}')`}} className="h-full w-full bg-cover bg-no-repeat">
      <div className="flex flex-col gap-[30px]  py-[20px]">
        <Nav />
        <Hero setBookList={setBookList} bookList={bookList} />
        <BookList bookList={bookList} />
      </div>
    </div>
  );
}
