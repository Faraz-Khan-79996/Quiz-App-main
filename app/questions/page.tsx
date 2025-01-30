import Questions from "@/components/questions";
import { categoryOptions, difficultyOptions } from "@/constants";
import { redirect } from "next/navigation";
import "./questions.css";


export const fetchCache = "force-no-store";

// type Props = {
//   searchParams: {
//     category: string;
//     difficulty: string;
//     limit: string;
//   };
// };

async function getData() {
  const res = await fetch(
    `https://api.jsonserve.com/Uw5CrX`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  // const QuestionData = {
  //   category: string;
  //   id: string;
  //   correctAnswer: string;
  //   incorrectAnswers: string[];
  //   question: string;
  //   tags: string[];
  //   type: string;
  //   difficulty: string;
  //   regions: [];
  //   isNiche: boolean;
  // }

  // const QuestionsArray:UsableQuestions;
  const quizData:Quiz = await res.json();
  const questions = quizData.questions;
  //these are the array of questions received from the API.

  function mapQuizToUsableQuestions(quiz: Quiz): UsableQuestion[] {
    return quiz.questions.map((question) => ({
      category: quiz.topic, // Use quiz topic as category
      id: question.id.toString(), // Convert ID to string
      correctAnswer: question.options.find((opt) => opt.is_correct)?.description || "No correct answer", 
      incorrectAnswers: question.options
        .filter((opt) => !opt.is_correct)
        .map((opt) => opt.description),
      question: question.description,
      tags: question.tag ? question.tag.split(",") : [], // Split tags into an array if it's a comma-separated string
      type: question.type,
      difficulty: question.difficulty_level ?? "unknown", // Default to "unknown" if null
      regions: [], // No data available, so set an empty array
      isNiche: false, // No field available, setting default to false
    }));
  }
  const usableQuestions = mapQuizToUsableQuestions(quizData);
  return usableQuestions;
}

const QuestionsPage = async () => {
  // const category = searchParams.category as string;
  // const difficulty = searchParams.difficulty;

  // const validateCategory = (category: string) => {
  //   const validCategories = categoryOptions.map((option) => option.value);
  //   return validCategories.includes(category);
  // };

  // const validateDifficulty = (difficulty: string) => {
  //   const validDifficulties = difficultyOptions.map((option) => option.value);
  //   return validDifficulties.includes(difficulty);
  // };

  // const validateLimit = (limit: string) => {
  //   const parsedLimit = parseInt(limit, 10);
  //   return !isNaN(parsedLimit) && parsedLimit >= 5 && parsedLimit <= 50;
  // };

  // if (
  //   !validateCategory(category) ||
  //   !validateDifficulty(difficulty) ||
  //   !validateLimit(limit)
  // ) {
  //   return redirect("/");
  // }

  const queestionsArray:UsableQuestion[] = await getData();
  // console.log(queestionsArray);
  const limit = queestionsArray.length
  const category = queestionsArray[0].category;
  

  return (
    <Questions
      questions={queestionsArray}
      limit={limit}
      category={category}
    />
  );
};

export default QuestionsPage;
