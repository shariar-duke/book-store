import React from "react";
import Search from "./Search";
import Sort from "./Sort";
export default function Hero({setBookList , bookList , handleFilter}) {
  return (
    <div className="mx-auto flex items-end  justify-between ustify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4 w-full container">
      <Search setBookList={setBookList} bookList={bookList} />
      <Sort handleFilter={handleFilter} setBookList={setBookList}  />
    </div>
  );
}
