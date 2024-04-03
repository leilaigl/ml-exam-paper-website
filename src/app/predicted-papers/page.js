import Navigation from ".././components/Navigation";

export default function PredictedPapers() {
  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/predicted-papers" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <div className="rounded-lg overflow-hidden border border-gray-300">
          <table className="w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 font-light"> # </th>
                <th className="py-2 px-4">Topic </th>
                <th className="py-2 px-4">Paper ID </th>
                <th className="py-2 px-4">Preview </th>
                <th className="py-2 px-4">Status </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300 text-gray-600">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Topic 1, Topic 2, Topic 3</td>
                <td className="py-2 px-4">1234</td>
                <td className="py-2 px-4">Preview content</td>
                <td className="py-2 px-4">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
