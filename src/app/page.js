"use client";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import TimeSpent from "./components/TimeSpent";
import Countdown from "./components/Countdown";
import RecentlyViewed from "./components/RecentlyViewed";

export default function Home() {
  const events = [
    {
      date: "2024-04-20T09:00:00",
      label: "Cambridge IGCSE Music Paper 1 (0410)",
    },
    {
      date: "2024-04-25T14:30:00",
      label: "Cambridge IGCSE Geography Paper 2 (0460)",
    },
  ];
  const [timeData, setTimeSpentData] = useState(null);
  const [recentlyViewedData, setRecentlyViewedData] = useState(null);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      let storedTimeSpentData = localStorage.getItem("timeData");
      let storedViewedData = localStorage.getItem("recentlyViewed");
      if (!storedTimeSpentData) {
        storedTimeSpentData = {
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
          Sunday: 0,
        };
        localStorage.setItem("timeData", JSON.stringify(storedTimeSpentData));
      } else {
        storedTimeSpentData = JSON.parse(storedTimeSpentData);
      }

      window.addEventListener("beforeunload", function () {
        const now = new Date();
        const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
        const timeSpent = (now.getTime() - startTime.getTime()) / (1000 * 60);
        storedTimeSpentData[dayOfWeek] += timeSpent;
        localStorage.setItem("timeData", JSON.stringify(storedTimeSpentData));
      });
      storedViewedData = JSON.parse(storedViewedData);

      const startTime = new Date();
      setTimeSpentData(storedTimeSpentData);
      setRecentlyViewedData(storedViewedData);
    } else {
      console.log("Local storage is not available.");
    }
  }, []);

  return (
    <main className="flex min-h-screen">
      <Navigation activePage="/" />
      <div className="flex flex-col flex-1 m-8 justify-center gap-y-5">
        <div>
          <div className="text-md text-gray-500 font-bold mb-2">
            Study well!
          </div>
          <Countdown events={events} />
        </div>
        <div className="mb-4">
          <div>
            {recentlyViewedData && (
              <>
                <div className="text-md text-gray-500">Recently Viewed</div>
                <RecentlyViewed recentlyViewed={recentlyViewedData} />
              </>
            )}
          </div>
        </div>
        <div>
          <div className="text-md text-gray-500 mb-2">Study Time (Minutes)</div>
          {timeData && <TimeSpent timeData={timeData} />}
        </div>
      </div>
    </main>
  );
}
