import React from "react";
import "./LayoutBody.css";

const LayoutBody = () => {
  return (
    <section className="main-body">
      <article className="main-left">
        <p>여긴 본문 왼쪽 부분</p>
      </article>
      <article className="main-right">
        <p>여긴 본문 오른쪽 부분</p>
      </article>
    </section>
  );
};

export default LayoutBody;
