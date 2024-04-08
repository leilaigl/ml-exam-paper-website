"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from "next/navigation";
import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function QuestionId() {
  const params = useParams();
  const router = useRouter();
  const questionId = params.questionId;
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  useEffect(() => {
    const questionIdWithoutExtension = questionId.split('png')[0];
    const questionIdAsInteger = parseInt(questionIdWithoutExtension);
    setCurrentQuestionId(questionIdAsInteger);
  }, [questionId]);

  const goToNextQuestion = () => {
    const nextQuestionId = getNextQuestionId(currentQuestionId);
    console.log('reach2');
    router.push(`/flash-cards/${nextQuestionId}` + ".png", 'push');
  };

  const removeQuestion = () => {
    goToNextQuestion();
  };

  const goToPreviousQuestion = () => {
    const previousQuestionId = getPreviousQuestionId(currentQuestionId);
    console.log('reach3');
    router.push(`/flash-cards/${previousQuestionId}` + ".png", 'push');
  };

  const getNextQuestionId = (currentId) => {
    console.log(currentId + 1);
    return currentId + 1;
  };

  const getPreviousQuestionId = (currentId) => {
    return currentId - 1;
  };

  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/flash-cards" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <div>
          <div className="text-xl text-gray-500 font-bold">Topic Name</div>
          <div className="text-sm text-gray-500">Subject (0000)</div>
        </div>
        <div className="w-full bg-gray-200 rounded-md p-12">
          <div className="flex justify-center">
            <Image
              src={`/questions/${params.questionId}`}
              alt={"Question"}
              width="600"
              height="500"
            />
          </div>
          <div className="text-gray-600 underline">View Solution</div>
          {/*eye icon*/}
        </div>
        <div className="flex w-full justify-between">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" onClick={goToPreviousQuestion}>
            Back {/*arrow right icon*/}
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={removeQuestion}>
            I can do this question. {/*tick icon*/}
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={goToNextQuestion}>
            My answer is incorrect. {/*x icon*/}
          </button>
        </div>
      </div>
    </main>
  );
}
