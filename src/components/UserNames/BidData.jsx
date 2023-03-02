import React from "react";

const BidData = ({ userName, minimumBid, days, hours }) => {
  return (
    <div>
      userName : {userName}, minimumBid : {minimumBid}, days : {days}, hours :{" "}
      {hours}
    </div>
  );
};

export default BidData;
