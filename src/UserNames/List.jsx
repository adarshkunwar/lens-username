import React, { useState } from "react";
import BidData from "./BidData";
import { DummyData } from "./DummyData";
const titles = ["Username", "Minimum Bid", "Auction ends in"];

const List = () => {
  const [passngUserName, setPassingUserName] = useState("6 Name");
  const [passingMinimumBid, setPassingMinimumBid] = useState("3 Name");
  const [passingDays, setPassingDays] = useState("Random 2");
  const [passingHours, setPassingHours] = useState("Random 1");

  const [passData, setPassData] = useState(false);

  return (
    <div>
      {passData ? (
        <div>
          <BidData
            userName={passngUserName}
            minimumBid={passingMinimumBid}
            days={passingDays}
            hours={passingHours}
          />
        </div>
      ) : (
        <div>
          {/* titles */}
          <div className="grid grid-cols-3 bg-secondary py-2 rounded-t-lg ">
            {titles.map((val, i) => (
              <div key={i}>{val}</div>
            ))}
          </div>

          {/* data here */}
          <div className="flex flex-col mt-0.5 divide-y-[0.1rem] divide-secondary">
            {DummyData.map((val, i) => (
              <div key={i}>
                <div
                  onClick={() => {
                    setPassingDays(val.days);
                    setPassingHours(val.hours);
                    setPassingMinimumBid(val.minimumBid);
                    setPassingUserName(val.userName);
                    setPassData(true);
                  }}
                  className="grid grid-cols-3 py-2  hover:bg-secondary"
                >
                  <div>{val.userName}</div>
                  <div>{val.minimumBid}</div>
                  <div>{`${val.days} days ${val.hours} hours `}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
