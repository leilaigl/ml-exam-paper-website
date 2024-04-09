"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function QuestionId() {
  const params = useParams();
  const router = useRouter();
  const [questionCounter, setQuestionCounter] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [listName, setListName] = useState("");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    setListName(sessionStorage.getItem("listName"));
    setQuestionList(JSON.parse(sessionStorage.getItem("questionList")));
    setQuestionCounter(sessionStorage.getItem("questionCounter"));
    setTotalQuestions(questionList.length);
    console.log(listName, questionList);
  }, []);


  const goToPreviousQuestion = () => {
    if (questionCounter === -1) {
      setQuestionCounter(questionList.length - 1);
    } else {
      setQuestionCounter(parseInt(questionCounter) - 1);
      sessionStorage.setItem("questionCounter", questionCounter);
      const previousQuestionId = questionList[questionCounter];
      router.push(`/flash-cards/${previousQuestionId}` + ".png", "push");
    }
  };
  
  const removeQuestion = () => {
    if (questionList.length === 0) {
      return;
    }
    setQuestionList(questionList.splice(questionCounter, 1));
    sessionStorage.setItem("questionList", JSON.stringify(questionList));
    const nextQuestionId = questionList[questionCounter];
    console.log(nextQuestionId);
    console.log(questionList);
    console.log(sessionStorage.getItem("questionList"));
    router.push(`/flash-cards/${nextQuestionId}` + ".png", "push");
    // };
  };
  
  const goToNextQuestion = () => {
    if (questionCounter === questionList.length) {
      setQuestionCounter(0);
    } else {
      setQuestionCounter(parseInt(questionCounter) + 1);
      sessionStorage.setItem("questionCounter", questionCounter);
      const nextQuestionId = questionList[questionCounter];
      router.push(`/flash-cards/${nextQuestionId}` + ".png", "push");
    }
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
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            onClick={goToPreviousQuestion}
          >
            Back {/*arrow right icon*/}
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={removeQuestion}
          >
            I can do this question. {/*tick icon*/}
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={goToNextQuestion}
          >
            My answer is incorrect. {/*x icon*/}
          </button>
        </div>
      </div>
    </main>
  );
}
