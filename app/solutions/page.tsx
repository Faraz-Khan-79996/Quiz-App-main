// app/solutions/page.tsx or your existing SolutionsPage component

import React from 'react';
import ReactMarkdown from 'react-markdown';
import BackButton from '@/components/ui/BackButton';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

async function getData() {
  const res = await fetch(`https://api.jsonserve.com/Uw5CrX`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const quizData: Quiz = await res.json();

  function mapQuizToUsableQuestions(quiz: Quiz): UsableQuestion[] {
    return quiz.questions.map((question) => ({
      category: quiz.topic,
      id: question.id.toString(),
      correctAnswer:
        question.options.find((opt) => opt.is_correct)?.description ||
        "No correct answer",
      incorrectAnswers: question.options
        .filter((opt) => !opt.is_correct)
        .map((opt) => opt.description),
      question: question.description,
      tags: question.tag ? question.tag.split(",") : [],
      type: question.type,
      difficulty: question.difficulty_level ?? "unknown",
      regions: [],
      isNiche: false,
      detailed_solution: question.detailed_solution,
    }));
  }

  return mapQuizToUsableQuestions(quizData);
}

const SolutionsPage = async () => {
  const questionsArray: UsableQuestion[] = await getData();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <BackButton />

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold text-center mb-8">Solutions</h1>
            {questionsArray.map((q, index) => (
              <div key={q.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">
                  Q{index + 1}. {q.question}
                </h2>
                <p className="text-green-400 font-medium">
                  <span className="font-semibold text-white">Correct Answer:</span>{" "}
                  {q.correctAnswer}
                </p>
                <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Detailed Solution</h3>
                  <div className="prose prose-invert max-w-none text-gray-300">
                    <ReactMarkdown>{q.detailed_solution}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
