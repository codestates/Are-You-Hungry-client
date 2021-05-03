import React from "react";
import "../styles/MyPage.css";

const MyPage = (props) => {
  return (
    <main className="main mypage">
      <h1>This is you</h1>
      <section className="wrapper">
        <div className="userprop">
          <span className="userkey">USERNAME</span>
          <span className="uservalue">{props.userInfo.username}</span>
        </div>
        <div className="userprop">
          <span className="userkey">EMAIL</span>
          <span className="uservalue">{props.userInfo.email}</span>
        </div>
        <div className="userprop">
          <span className="userkey">PHONE No.</span>
          <span className="uservalue">{props.userInfo.phone}</span>
        </div>
      </section>
    </main>
  );
};

export default MyPage;
