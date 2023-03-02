import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DummyData } from "../../components/UserNames/DummyData";
const index = () => {
  const router = useRouter();
  const { user } = router.query;

  const [data, setData] = useState({});

  useEffect(() => {
    console.log("this works");
    if (user) {
      const findData = DummyData.find((item) => item.userName === user);
      setData(findData);
    }
  }, [user]);

  return (
    <div>
      <h1>Username: {data?.minimumBid}</h1>
    </div>
  );
};

export default index;
