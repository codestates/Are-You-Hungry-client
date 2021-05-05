import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/MyPage.css";
import "../styles/UserInfoEdit.css";
import "../styles/TestPassword.css";

import axios from "axios";

const MyPage = ({ userInfo, initUserState, history }) => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

  const [passed, setPassed] = useState(false);
  const [password, setPassword] = useState("");

  const { username = "", email = "", phone = "" } = userInfo;

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");

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

  const onEdit = () => {
    if (newUsername && newPassword && newEmail && newPhone) {
      axios.patch(
        "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user",
        {
          username: newUsername,
          password: newPassword,
          email: newEmail,
          phone: newPhone,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
    }
  };

  return (
    <main className="main">
      {passed ? (
        <div className="mypage">
          <form onSubmit={(e) => e.preventDefault()} id="editUserInfo">
            <h2>회원정보 수정</h2>
            <input
              type="text"
              placeholder={`현재 아이디: ${username}`}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={`현재 비밀번호: ${password}`}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={`현재 이메일: ${email}`}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder={`현재 전화번호: ${phone}`}
              onChange={(e) => setNewPhone(e.target.value)}
              required
            />
            <button className="userEditBtn" onClick={() => onEdit()}>
              수정
            </button>
          </form>

          <button className="userDeleteBtn">
            <Link to="/delete">회원탈퇴</Link>
          </button>
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

export default withRouter(MyPage);
