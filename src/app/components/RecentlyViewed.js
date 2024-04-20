import React from "react";
import Link from "next/link";
import { Papers, FlashCards } from "./Icons";

const RecentlyViewed = ({ recentlyViewed }) => {
  const uniqueItems = recentlyViewed.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );
  const top5Items = uniqueItems.slice(0, 5);

  return (
    <div className="w-full">
      <table className="table-auto w-full">
        <thead className="sr-only">
          <tr>
            <th>Item</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {top5Items.map((item, index) => (
            <tr className="border-b border-gray-200 text-gray-600" key={index}>
              <td className="py-2">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-200 text-white">
                    {item.link.startsWith("/flash-cards") ? (
                      <FlashCards />
                    ) : (
                      <Papers />
                    )}
                  </div>
                  <Link
                    href={`${item.link}`}
                    className="ml-4 text-sm font-semibold"
                  >
                    {item.id}
                  </Link>
                </div>
              </td>
              <td className="text-right">
                <div className="text-sm text-gray-500">
                  {new Date(item.timestamp).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentlyViewed;
