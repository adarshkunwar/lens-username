import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DummyData } from "../../components/UserNames/DummyData";
import { IoSearch } from "react-icons/io5";
import Layout from "../../components/nav/Layout";
import Link from "next/link";

const index = () => {
  const router = useRouter();
  const { user } = router.query;

  const [data, setData] = useState({});

  useEffect(() => {
    // console.log("this works");
    if (user) {
      const findData = DummyData.find((item) => item.userName === user);
      setData(findData);
    }
  }, [user]);

  return (
    <div>
      <Layout>
        <div className="flex justify-center bg-primary ">
          <div className="bg-primary w-[50rem] text-white text-center px-2 flex flex-col gap-5 pt-4">
            <div className="bg-secondary flex items-center text-xl px-3">
              <div className="px-2">
                <IoSearch />
              </div>
              <input
                type="text"
                name="Search"
                id="Search"
                className="py-2  px-2 border-0 focus:outline-none bg-transparent text-white"
                placeholder="Enter a Lens username"
              />
            </div>
            <div className="flex w-full flex-col">
              {/* the upper section starts here */}
              <div className="flex justify-between items-baseline w-full bg-secondary rounded-t-3xl px-5 py-1">
                <div className="flex text-4xl mt-10 ">
                  <div className="font-bold">{data?.userName}</div>
                  <div className="text-secondary_light">.lens</div>
                </div>
                <div className="text-blue-400 underline cursor-pointer">
                  Switch to Updates
                </div>
              </div>

              {/* upper section ends here */}

              {/* middle section starts here */}
              <div className="flex w-full mt-5 items-center gap-2">
                <div className="flex-1">
                  <div className="">
                    <div className="bg-secondary flex justify-evenly pt-3 pb-1">
                      <div>current bid</div>
                      <div>minimum bid</div>
                    </div>
                    <div className="flex justify-evenly">
                      <div>{data.currentBid}</div>
                      <div>{Math.round((data.currentBid / 10) * 20) / 5}</div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-400 mt-3 py-2 rounded-lg">
                    place bid
                  </button>
                </div>
                {/* left section ends here */}
                {/* right section starts here */}
                <div className="flex-1 border border-secondary h-full rounded-md flex flex-col gap-2">
                  <div className="flex">
                    <div>lens handle: </div>
                    <div>{data.userName}</div>
                  </div>
                  <div className="flex">
                    <div>account: </div>
                    <Link href="#">
                      <div className="text-blue-400">{data.userName}.lens</div>
                    </Link>
                  </div>
                </div>
                {/* right section ends here */}
              </div>
              {/* middle section ends here */}
              {/* lower section contains the bid history */}
              <div>
                <div className="text-xl flex justify-start mt-9">
                  Bid History
                </div>
                {/* titles */}
                <div className="flex justify-between px-20 text-lg bg-secondary mt-5 py-2">
                  <div>userName</div>
                  <div>bid placed</div>
                </div>
                <div className="flex flex-col gap-1 divide-y divide-secondary">
                  {data.history?.map((bid, index) => (
                    <div key={index} className="flex justify-between px-20">
                      <div>{bid.userName}</div>
                      <div>{bid.bidPlaced}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* lower section ends here */}
              {/* <div className="flex flex-col items-start w-full rounded-b-3xl px-5 mt-10">
                <div className="flex gap-2 items-baseline">
                  <div className="text-lg">Bid:</div>
                  <div className="text-2xl font-bold">
                    {data?.minimumBid}
                    <span className="text-xl text-secondary_light">
                      &nbsp;LENS
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold">Auction Ends In</div>
                  <div className="text-2xl font-bold">
                    {data?.days} Days {data?.hours} Hours
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold">Current Bid</div>
                  <div className="text-2xl font-bold">{data?.currentBid}</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="text-white">{data.userName}</div> */}
      </Layout>
    </div>
  );
};

export default index;
