import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
export default function App() {
  return (
    <div>
   <div className="flex flex-col gap-[30px]  py-[20px]">
      <Nav />
      <Hero />
      <BookList />
    </div>
    </div>
 
  );
}
