import React, { useState, useEffect } from "react";
import Spinner from "./common/Spinner";

function Picture({ currentUser }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Object.keys(currentUser.data) == 0 ? setLoading(true) : setLoading(false);
  }, [currentUser]);

  if (loading) return <Spinner loading={loading} />;
  return (
    <div className=" flex justify-start items-center h-fit">
      <img
        className=" rounded-full w-1/6"
        src={
          currentUser && currentUser.data.profile
            ? currentUser.data.profile.url
            : ""
        }
        alt=""
      />
    </div>
  );
}

export default Picture;
