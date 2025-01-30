import QuizSettings from "@/components/quiz-settings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <>
<div className="flex flex-wrap">
  <div className="w-full sm:w-8/12 mb-10">
    <div className="container mx-auto h-full sm:p-10">
      <nav className="flex px-4 justify-between items-center">
        <div className="text-4xl font-bold mt-10 md:mt-0">
          Quizzzzz<span className="text-violet-500">.🗿</span>
        </div>
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/497/497348.svg"
            alt=""
            className="w-8"
          />
        </div>
      </nav>
      <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
        <div className="w-full">
          <h1 className="text-4xl lg:text-6xl font-bold">
          Welcome to <span className="text-primary">Quizzzzz</span> Test Your Knowledge 🧠
          </h1>
          <div className="w-20 h-2 bg-primary my-4" />
          <p className="text-xl mb-10">
          Get ready to challenge yourself and explore the world of quizzes! Whether you’re a casual learner, a trivia master, or someone just looking to kill time, Quizy has something for you. 
          </p>
        <div className="flex gap-4 items-center flex-wrap justify-center md:justify-start">
        <Link href={"/questions"} className="bg-primary text-white text-xl md:text-2xl font-medium px-4 py-2 rounded shadow">
            Take the quizzzzzz 🗿
          </Link>
          <Link href={"/solutions"} className="font-semibold">
            View Solutions
            </Link>
        </div>
        </div>
      </header>
    </div>
  </div>
  <img
    src="https://cdn.pixabay.com/photo/2018/09/22/12/31/cat-3695213_1280.jpg"
    alt="Leafs"
    className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
  />
</div>

    </>
  );
}
