import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white px-6">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-wide text-center uppercase">
          Welcome to the Quizzzzzz 🗿
        </h1>
        <Separator className="my-6 border-gray-500" />
        
        <div className="mt-6">
          <QuizSettings />
        </div>
      </div>
    </div>
  );
}
