import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "../styles/Delete.css";
import "../styles/TestPassword.css";

const Delete = ({ initUserState, userInfo, history }) => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

  const [passed, setPassed] = useState(false);
  const [password, setPassword] = useState("");

  const testPassword = () => {
    axios
      .post(
        "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user/password",
        { password: password },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((res) => {
        setPassed(true);
      })
      .catch((e) => console.log(e));
  };

  const deleteUser = () => {
    axios
      .delete(
        "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((res) => {
        initUserState();
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <main className="main ">
      {passed ? (
        <div className="delete-page deleteUser">
          <h2>정말로 계정을 삭제 하시겠습니까?</h2>
          <p>
            계정을 삭제하더라도, 업로드한 게시물은 익명의 아이디로 남아있게
            됩니다.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="비밀번호를 입력하세요"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={deleteUser}>삭제</button>
          </form>
        </div>
      ) : (
        <div className="passwordTest">
          <h1>Enter your password</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-field">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
              />
            </div>
            <button onClick={testPassword} className="testPasswordBtn">
              Submit
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default withRouter(Delete);
