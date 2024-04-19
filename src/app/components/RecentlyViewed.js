import React from 'react';
import Link from 'next/link';

const RecentlyViewed = ({ recentlyViewed }) => {
const uniqueItems = recentlyViewed.filter((item, index, self) =>
index === self.findIndex((t) => (
    t.id === item.id
))
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
                <tr
                  className="border-b border-gray-200 text-gray-600"
                  key={index}
                >
              <td className="py-2">
                <Link href={`${item.link}`}>{item.id}
                </Link>
              </td>
              <td className='text-right'>
                <div className="text-sm text-gray-500">
                  {new Date(item.timestamp).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
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
