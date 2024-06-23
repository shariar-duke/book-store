import React from "react";
import { useState } from "react";
import { getBookList } from "../data/book-data.js";
import Book from "./Book.jsx";
export default function BookList({bookList}) {

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bookList.map((b, index) => (
        <Book key={b.id} bookDetails={b} />
      ))}
    </div>
  );
}
