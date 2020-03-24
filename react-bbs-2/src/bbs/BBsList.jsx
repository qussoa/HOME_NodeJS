import React from "react";
import BBsListItem from "./BBsListItem";

/*
bbsList를 매개변수로 받아서
<li>BBS1</li>
<li>BBS2</li>
<li>BBS3</li>
<li>BBS4</li>

*/
const BBsList = ({ bbsList, bbs_main_url }) => {
  const bbsMap = bbsList.map(bbs => {
    return <BBsListItem bbs={bbs} key={bbs._id} bbs_main_url={bbs_main_url} />;
  });
  return (
    <table className="w3-table w3-table-all">
      <tr>
        <th>날짜</th>
        <th>시간</th>
        <th colSpan="2">제목</th>
      </tr>
      {bbsMap}
    </table>
  );
};

export default BBsList;
