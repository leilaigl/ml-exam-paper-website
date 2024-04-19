"use client";
import Navigation from ".././components/Navigation";
import { useRouter } from "next/navigation";

export default function FlashCards() {
  const router = useRouter();

  const updateRecentlyViewed = (itemId, itemLink, itemPaperId) => {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const now = new Date();
    recentlyViewed.unshift({ id: itemId, link: itemLink, itemPaperId, timestamp: now });
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  };

  const papers = [
    {
      id: 46021,
      topics: "Geography Paper 2 - Rivers",
      questionList: [460211, 460212, 460213],
      paperId: "0460",
      preview: "Lorem ipsum dolor sit amet...",
      status: "View",
    }
  ];

  function handleRowClick(listName, list, paperId) {
    sessionStorage.setItem('listName', listName);
    sessionStorage.setItem('questionList', JSON.stringify(list));
    sessionStorage.setItem('questionCounter', 0);
    const chapterLink = `/flash-cards/${papers[0].questionList[0]}` + ".png";
    updateRecentlyViewed(listName, chapterLink, paperId);
    router.push(chapterLink, 'push');
  };

  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/flash-cards" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <div className="rounded-lg overflow-hidden border border-gray-300">
          <table className="w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 font-light"># </th>
                <th className="py-2 px-4">Topic </th>
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
                  <td className="py-2 px-4">
                    <button onClick={() => handleRowClick(paper.topics, paper.questionList, paper.paperId)}>
                      {paper.topics}
                    </button>
                  </td>
                  <td className="py-2 px-4 text-center">{paper.paperId}</td>
                  <td className="py-2 px-4">{paper.preview}</td>
                  <td className="py-2 px-4">
                    <button
                      className={`inline-flex items-center px-3 py-1 rounded-full text-white font-medium ${
                        paper.status === "Viewed"
                          ? "bg-gray-500"
                          : paper.status === "View"
                          ? "bg-green-600"
                          : "bg-red-500"
                      }`}
                      onClick={() => handleRowClick(paper.topics, paper.questionList, paper.paperId)}
                    >
                        {paper.status}
                    </button>
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
