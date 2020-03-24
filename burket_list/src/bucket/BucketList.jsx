import React from "react";
import BucketListItem from "./BucketListItem";
import "../bucket/css/BucketList.css";

const BucketList = ({ bucketList, bucket_main_url }) => {
  const bucketMap = bucketList.map(bucket => {
    return (
      <BucketListItem
        bucket={bucket}
        key={bucket._id}
        bucket_main_url={bucket_main_url}
      />
    );
  });
  return (
    <table className="table">
      <tr>
        <th></th>
        <th>시작날짜</th>
        <th>목표</th>
        <th>달성날짜</th>
      </tr>
      {bucketMap}
    </table>
  );
};

export default BucketList;
