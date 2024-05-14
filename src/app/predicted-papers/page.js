"use client";
import Navigation from ".././components/Navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PredictedPapers() {
  const router = useRouter();
  const [recentlyViewedData, setRecentlyViewedData] = useState(null);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      let storedViewedData = localStorage.getItem("recentlyViewed");
      setRecentlyViewedData(storedViewedData);
    } else {
      console.log("Local storage is not available.");
    }
  }, []);


  const papers = [
    {
      id: "0460_w24_qp_1.pdf",
      topics: "Geography Paper 2 Variant 1",
      paperId: "0460",
      preview: "Study Figs 5 and 6, which give information on tropical...",
      status: "View",
    },
    {
      id: "0460_w24_qp_2.pdf",
      topics: "Geography Paper 2 Variant 2",
      paperId: "0460",
      preview: "Study the map extract, which is for Rosenfels, Zimbabwe...",
      status: "View",
    },
  ];

  const updateRecentlyViewed = (itemId, itemLink, itemPaperId) => {
    let recentlyViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const now = new Date();
    recentlyViewed.unshift({
      id: itemId,
      link: itemLink,
      itemPaperId,
      timestamp: now,
    });
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  };

  function handleRowClick(listName, list, paperId) {
    sessionStorage.setItem("listName", listName);
    sessionStorage.setItem("questionList", JSON.stringify(list));
    sessionStorage.setItem("questionCounter", 0);
    const chapterLink = `/predicted-papers/${paperId}`;
    updateRecentlyViewed(listName, chapterLink, paperId);
    router.push(chapterLink, "push");
  }

  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/predicted-papers" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <div className="rounded-lg overflow-hidden border border-gray-300">
          <table className="w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 font-light"># </th>
                <th className="py-2 px-4">Exam </th>
                <th className="py-2 px-4">Code </th>
                <th className="py-2 px-4">Preview </th>
                <th className="py-2 px-4">Status </th>
              </tr>
            </thead>
            <tbody>
              {papers.map((paper, index) => (
                <tr
                  className="border-t border-gray-300 text-gray-600"
                  key={index}
                >
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4 hover:text-black">
                    <button
                      onClick={() =>
                        handleRowClick(
                          paper.topics,
                          paper.questionList,
                          paper.id
                        )
                      }
                    >
                      {paper.topics}
                    </button>
                  </td>
                  <td className="py-2 px-4 text-center">{paper.paperId}</td>
                  <td className="py-2 px-4">{paper.preview}</td>
                  <td className="py-2 px-4">
                    {recentlyViewedData && (
                      <button
                        className={`inline-flex items-center px-3 py-1 rounded-full text-white font-medium ${
                          recentlyViewedData.includes(paper.paperId)
                            ? "bg-gray-500"
                            : "bg-green-600"
                        }`}
                        onClick={() =>
                          handleRowClick(
                            paper.topics,
                            paper.questionList,
                            paper.paperId
                          )
                        }
                      >
                        {recentlyViewedData.includes(paper.paperId)
                          ? "Viewed"
                          : "View"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
