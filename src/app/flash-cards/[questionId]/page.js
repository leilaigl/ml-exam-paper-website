"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navigation from "../../components/Navigation";
import Image from "next/image";

export default function QuestionId() {
  const params = useParams();
  const router = useRouter();
  const [questionCounter, setQuestionCounter] = useState(0);
  const [listName, setListName] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [button1, setButton1] = useState(false);

  useEffect(() => {
    setListName(sessionStorage.getItem("listName"));
    setQuestionList(JSON.parse(sessionStorage.getItem("questionList")));
    if (params.questionId == "0.svg") {
      setButton1(true);
    };
    setQuestionCounter(sessionStorage.getItem("questionCounter"));
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
    if (questionList.length === 1) {
      router.push(`/flash-cards/0.svg`, "push");
    } else {
      setQuestionList(questionList.splice(questionCounter, 1));
      sessionStorage.setItem("questionList", JSON.stringify(questionList));
      const nextQuestionId = questionList[questionCounter];
      router.push(`/flash-cards/${nextQuestionId}` + ".png", "push");
    }
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
          <div className="flex justify-center max-h-96 mb-6">
            <Image
              src={`/questions/${params.questionId}`}
              alt={"Question"}
              width="600"
              height="500"
              priority={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          {button1 ? 
            <div className="text-gray-600 text-center font-semibold">Chapter complete! Return to homepage.</div> : 
            <div className="text-gray-600 underline">View Solution</div>}
          {/*eye icon*/}
        </div>
        <div className="flex w-full justify-between">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
            onClick={goToPreviousQuestion}
          >
            Back {/*arrow right icon*/}
          </button>
          <button
            className={`bg-green-500 text-white py-2 px-4 rounded-md ${
              button1 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            }`}
            onClick={removeQuestion}
            disabled={button1}
          >
            I can do this question. {/*tick icon*/}
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
            onClick={goToNextQuestion}
          >
            My answer is incorrect. {/*x icon*/}
          </button>
        </div>
      </div>
    </main>
  );
}
