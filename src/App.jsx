import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import bg from "./assets/bookBackground.jpg"
export default function App() {
  return (
    <div style={{backgroundImage:`url('${bg}')`}} className="h-full w-full bg-cover bg-no-repeat">
      <div className="flex flex-col gap-[30px]  py-[20px]">
        <Nav />
        <Hero />
        <BookList />
      </div>
    </div>
  );
}
