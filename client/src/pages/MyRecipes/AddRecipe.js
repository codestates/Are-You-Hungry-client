import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/AddRecipe.css";

function AddRecipe({ initUserState, history }) {
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    initUserState();
    history.push("/");
  }

  const [Recipe, SetRecipe] = useState([
    {
      cooking_no: 0,
      cooking_dc: "물을 끓이시오",
      step_image: "",
      step_tip: "",
    },
  ]);
  const [Ingredients, SetIngrdients] = useState([
    { name: "test", type: "test1", cap: "test2" },
  ]);
  const [Isaddigr, setisaddigr] = useState(false);
  const [addStep, setAddStep] = useState(false);
  const [name, setName] = useState("");
  const [itype, setItype] = useState("");
  const [cap, setCap] = useState("");
  const [step, setStep] = useState("");
  const [summary, setSummary] = useState("");

  const [foodName, setFoodName] = useState("");
  const [level, setLevel] = useState("");
  const [time, setTime] = useState("");
  const [nation, setNation] = useState("");
  const [type, setType] = useState("");
  const [qnt, setQnt] = useState("");
  const [calorie, setCalorie] = useState("");

  function Writeigr() {
    return (
      <div className="InputIgr">
        <InputBox
          type={"재료명"}
          placeholder={"재료명"}
          objkey={"foodname"}
          value={name}
          func={setName}
        />
        <InputBox
          type={"종류"}
          placeholder={"종류"}
          objkey={"level"}
          value={itype}
          func={setItype}
        />
        <InputBox
          type={"용량"}
          placeholder={"용량"}
          objkey={"cooking_time"}
          value={cap}
          func={setCap}
        />
      </div>
    );
  }
  function getigr() {
    SetIngrdients([...Ingredients, { name, type: itype, cap }]);
    setName("");
    setItype("");
    setCap("");
    setisaddigr(!Isaddigr);
  }
  function getrecipe() {
    SetRecipe([
      ...Recipe,
      {
        cooking_no: Recipe.langth,
        cooking_dc: step,
        step_image: "",
        step_tip: "",
      },
    ]);
    setStep("");
    setAddStep(!addStep);
  }

  function get() {
    let Food_info = {
      foodName,
      level,
      time,
      nation,
      type,
      qnt,
      calorie,
      summary,
    };
    let data = { Food_info, Recipe, Ingredients };
    console.log(data);
  }

  return (
    <main className="Main">
      <div className="Area">
        <div className="Image" />
        <div className="UpperInputBox">
          <div className="input-box">
            <div className="input-label">
              <label for="foodName">요리 이름</label>
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
              <label for="time">요리 시간</label>
            </div>
            <div className="input-area">
              <input
                type="text"
                id="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label for="difficulties">요리 난이도</label>
            </div>
            <div className="input-area">
              <select
                id="difficulties"
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
              <label for="nation">국적</label>
            </div>
            <div className="input-area">
              <input
                type="text"
                id="nation"
                onChange={(e) => setNation(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label for="qnt">양</label>
            </div>
            <div className="input-area">
              <input
                type="number"
                id="qnt"
                min="1"
                onChange={(e) => setQnt(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label for="type">종류</label>
            </div>
            <div className="input-area">
              <input
                type="text"
                id="type"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-label">
              <label for="calorie">칼로리</label>
            </div>
            <div className="input-area">
              <input
                type="number"
                id="calorie"
                min="1"
                onChange={(e) => setCalorie(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Area2">
        {/* <div className="Row">
          <span className="Span">설명 </span>
          <textarea
            className="DecsBox"
            placeholder="음식에 대한 설명을 적어 주세요"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
        </div> */}
        <div className="summary-box">
          <div className="summary-label">
            <label for="summary">설명</label>
          </div>
          <div className="summary-area">
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <div className="Row">
          <span className="Span">재료 </span>
          {!Isaddigr ? (
            <div className="IngredientsBox">
              {Ingredients.map((x, i) => (
                <IngreBox key={i} data={x} />
              ))}
            </div>
          ) : (
            <div className="IngredientsBox">
              <Writeigr></Writeigr>
              <button className="Addigr" onClick={getigr}>
                추가
              </button>
            </div>
          )}
          <button className="Addigr" onClick={() => setisaddigr(!Isaddigr)}>
            {!Isaddigr ? "추가" : "취소"}
          </button>
        </div>
      </div>
      <div className="Area3">
        {!addStep ? (
          <div className="RecipeArea">
            {Recipe.map((x, i) => (
              <RecipeBoxFrame key={i} data={x} />
            ))}
          </div>
        ) : (
          <div className="Row">
            <textarea
              className="DecsBox"
              placeholder="이번 단계의 요리과정을 적어주세요"
              value={step}
              onChange={(e) => {
                setStep(e.target.value);
              }}
            />
            <button className="Addigr" onClick={getrecipe}>
              추가
            </button>
          </div>
        )}
        <button
          className="RecipebuttonArea"
          onClick={() => setAddStep(!addStep)}
        >
          {!addStep ? "요리과정 추가" : "요리과정 입력 취소"}
        </button>
      </div>
      <button className="Button" onClick={get}>
        레시피 추가{" "}
      </button>
    </main>
  );
}

function IngreBox({ data }) {
  console.log(data);
  return (
    <div className="IboxFrame">
      <span className="Span">{data.name}</span>
      <span className="Span">{data.type}</span>
      <span className="Span">{data.cap}</span>
    </div>
  );
}

function InputBox({ type, placeholder, value, func }) {
  return (
    <div className="Row">
      <span className="Span">{`${type} :`}</span>
      <input
        className="Input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => func(e.target.value)}
      ></input>
    </div>
  );
}

function RecipeBoxFrame({ data }) {
  return (
    <div className="RecipeBox">
      <span className="Span">{data.cooking_no}</span>
      <span>{data.cooking_dc}</span>
    </div>
  );
}

// function uploadRecipe() {}

export default withRouter(AddRecipe);
