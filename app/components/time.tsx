import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "March 20, 2025",
      content: (
        <div>
          <h2 className="text-xl">
            Jamming
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 06:00 PM - 10:30 PM </p><br />
          </div>
        </div>
      ),
    },
    {
      title: "March 21, 2025",
      content: (
        <div>
          <h2 className="text-xl">
            First Day of CodeStorm
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 10:00 AM - PPT & Training Session</p><br />
            <p>🕝 2:30 - 3:00 PM - Problem Statement Release</p>
          </div>
        </div>
      ),
    },{
          title: "March 21, 2025",
      content: (
        <div>
          <h2 className="text-xl">
            Cultural Night
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 06:00 PM - 10:30 PM </p><br />
          </div>
        </div>
      ),
    },
    {
      title: "March 22, 2025",
      content: (
        <div>
          <h2 className="text-xl">Second Day of CodeStorm</h2> <br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕣 9:30 - 10:00 AM - Top 10 Announcement</p><br />
            <p>🕜 1:30 - 3:00 PM - Final Round & Prize Distribution</p>
          </div>
        </div>
      ),
    },
    {
      title: "March 22, 2025",
      content: (
        <div>
          <h2 className="text-xl">
            Celebrity Night
          </h2><br />
          <div className="grid grid-cols-2 gap-4">
            <p>🕙 07:00 PM - 11:00 PM</p><br />
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div  className="w-full bg-transparent">
      <Timeline data={data} />
    </div>
  );
}
