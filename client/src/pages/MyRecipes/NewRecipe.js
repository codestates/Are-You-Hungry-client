import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "../../components/AddIngredients";
import AddIngredients from "../../components/AddIngredients";
import AddRecipes from "../../components/AddRecipes";
import "../../styles/NewRecipe.css";

function NewRecipe({ initUserState, history }) {
  const accessToken = sessionStorage.getItem("accessToken");
  if (!accessToken) {
    initUserState();
    history.push("/");
  }

  const [foodName, setFoodName] = useState("");
  const [level, setLevel] = useState("초보환영");
  const [time, setTime] = useState("5분");
  const [nation, setNation] = useState("한식");
  const [type, setType] = useState("밥");
  const [qnt, setQnt] = useState("");
  const [calorie, setCalorie] = useState("");
  const [summary, setSummary] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState([]);

  const uploadData = {
    Food_info: {
      foodName,
      level,
      time,
      nation,
      type,
      qnt: qnt + "인분",
      calorie: calorie + "Kcal",
      summary,
    },
    Recipe: recipe,
    Ingredients: ingredients,
  };

  const initRecipe = () => {
    setFoodName("");
    setLevel("초보환영");
    setTime("5분");
    setNation("한식");
    setType("밥");
    setQnt("");
    setCalorie("");
    setSummary("");
    setIngredients([]);
    setRecipe([]);
  };

  const uploadRecipe = () => {
    if (
      foodName &&
      level &&
      time &&
      nation &&
      type &&
      qnt &&
      calorie &&
      summary
    ) {
      axios
        .post(
          "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/user/recipe",
          uploadData,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then((res) => {
          history.push("/");
        })
        .catch((e) => console.log("Error in uploadRecipe!"));
    }
  };

  return (
    <main className="Main">
      <div className="Area">
        <div className="Image" />
        <div className="UpperInputBox">
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="foodName">요리 이름</label>
            </div>
            <div className="input-area">
              <input
                type="text"
                id="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="time">요리 시간</label>
            </div>
            <div className="input-area">
              <select
                id="time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
              >
                <option value="5분">5분</option>
                <option value="10분">10분</option>
                <option value="15분">15분</option>
                <option value="20분">20분</option>
                <option value="25분">25분</option>
                <option value="30분">30분</option>
                <option value="35분">35분</option>
                <option value="40분">40분</option>
                <option value="50분">50분</option>
                <option value="60분">60분</option>
                <option value="70분">70분</option>
                <option value="80분">80분</option>
                <option value="90분">90분</option>
                <option value="100분">100분</option>
                <option value="120분">120분</option>
                <option value="150분">150분</option>
                <option value="180분">180분</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="difficulties">요리 난이도</label>
            </div>
            <div className="input-area">
              <select
                id="difficulties"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="초보환영">초보환영</option>
                <option value="보통">보통</option>
                <option value="어려움">어려움</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="nation">국적</label>
            </div>
            <div className="input-area">
              <select
                id="nation"
                onChange={(e) => setNation(e.target.value)}
                value={nation}
              >
                <option value="한식">한식</option>
                <option value="일본">일본</option>
                <option value="중국">중국</option>
                <option value="동남아시아">동남아시아</option>
                <option value="이탈리아">이탈리아</option>
                <option value="서양">서양</option>
                <option value="퓨전">퓨전</option>
                <option value="기타">기타</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="qnt">양</label>
            </div>
            <div className="input-area">
              <input
                type="number"
                id="qnt"
                value={qnt}
                min="1"
                onChange={(e) => setQnt(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="type">종류</label>
            </div>
            <div className="input-area">
              <select
                id="type"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="밥">밥</option>
                <option value="떡/한과">떡/한과</option>
                <option value="만두/면류">만두/면류</option>
                <option value="국">국</option>
                <option value="나물/생채/샐러드">나물/생채/샐러드</option>
                <option value="구이">구이</option>
                <option value="볶음">볶음</option>
                <option value="밑반찬/김치">밑반찬/김치</option>
                <option value="조림">조림</option>
                <option value="찜">찜</option>
                <option value="튀김/커틀릿">튀김/커틀릿</option>
                <option value="찌개/전골/스튜">찌개/전골/스튜</option>
                <option value="도시락/간식">도시락/간식</option>
                <option value="부침">부침</option>
                <option value="양식">양식</option>
                <option value="샌드위치/햄버거">샌드위치/햄버거</option>
                <option value="빵/과자">빵/과자</option>
                <option value="양념장">양념장</option>
                <option value="음료">음료</option>
                <option value="피자">피자</option>
                <option value="그라탕">그라탕</option>
                <option value="기타">기타</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label htmlFor="calorie">칼로리</label>
            </div>
            <div className="input-area">
              <input
                type="number"
                id="calorie"
                value={calorie}
                min="1"
                onChange={(e) => setCalorie(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="summary-ingredient-area">
        <div className="summary-box">
          <div className="summary-label">
            <label htmlFor="summary">설명</label>
          </div>
          <div className="summary-area">
            <textarea
              id="summary"
              value={summary}
              placeholder="음식에 대한 설명을 적어 주세요"
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <div className="ingredient-box">
          <AddIngredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </div>
      </div>
      <div className="recipe-area">
        <AddRecipes recipe={recipe} setRecipe={setRecipe} />
      </div>
      <div className="buttons">
        <button id="submit-recipe-btn" onClick={uploadRecipe}>
          레시피 제출
        </button>
        <button id="init-recipe-btn" onClick={initRecipe}>
          레시피 초기화
        </button>
      </div>
    </main>
  );
}

export default withRouter(NewRecipe);
