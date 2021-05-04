import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import "../../styles/AddRecipe.css";

function AddRecipe() {
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
  const [addstep, setaddstep] = useState(false);
  const [foodname, setfoodname] = useState("");
  const [level, setlevel] = useState("");
  const [cooking_time, settime] = useState("");
  const [nation, setnation] = useState("");
  const [type, settype] = useState("");
  const [qnt, setqnt] = useState("");
  const [calorie, setcalorie] = useState("");
  const [name, setname] = useState("");
  const [itype, setitype] = useState("");
  const [cap, setcap] = useState("");
  const [step, setstep] = useState("");
  const [summary, setsummary] = useState("");

  function Writeigr() {
    return (
      <div className="InputIgr">
        <InputBox
          type={"재료명"}
          placeholder={"재료명"}
          objkey={"foodname"}
          value={name}
          func={setname}
        />
        <InputBox
          type={"종류"}
          placeholder={"종류"}
          objkey={"level"}
          value={itype}
          func={setitype}
        />
        <InputBox
          type={"용량"}
          placeholder={"용량"}
          objkey={"cooking_time"}
          value={cap}
          func={setcap}
        />
      </div>
    );
  }
  function getigr() {
    SetIngrdients([...Ingredients, { name, type: itype, cap }]);
    setname("");
    setitype("");
    setcap("");
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
    setstep("");
    setaddstep(!addstep);
  }

  function get() {
    let Food_info = {
      foodname,
      level,
      cooking_time,
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
          <InputBox
            type={"레시피 명"}
            placeholder={"레시피명을 입력 하세요."}
            value={foodname}
            func={setfoodname}
          />
          <InputBox
            type={"난이도"}
            placeholder={"요리 난이도를 입력하세요."}
            value={level}
            func={setlevel}
          />
          <InputBox
            type={"요리 시간"}
            placeholder={"소요되는 시간을 입력하세요."}
            value={cooking_time}
            func={settime}
          />
          <InputBox
            type={"국적"}
            placeholder={"어느나라 음식입니까?"}
            value={nation}
            func={setnation}
          />
          <InputBox
            type={"종류"}
            placeholder={"요리의 종류는 무엇입니까? (ex: 밥,국,...."}
            value={type}
            func={settype}
          />
          <InputBox
            type={"양"}
            placeholder={"몇 인분입니까?"}
            value={qnt}
            func={setqnt}
          />
          <InputBox
            type={"칼로리"}
            placeholder={"칼로리는 어떻습니까?"}
            value={calorie}
            func={setcalorie}
          />
        </div>
      </div>
      <div className="Area2">
        <div className="Row">
          <span className="Span">설명 </span>
          <textarea
            className="DecsBox"
            placeholder="음식에 대한 설명을 적어 주세요"
            value={summary}
            onChange={(e) => {
              setsummary(e.target.value);
            }}
          />
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
        {!addstep ? (
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
                setstep(e.target.value);
              }}
            />
            <button className="Addigr" onClick={getrecipe}>
              추가
            </button>
          </div>
        )}
        <button
          className="RecipebuttonArea"
          onClick={() => setaddstep(!addstep)}
        >
          {!addstep ? "요리과정 추가" : "요리과정 입력 취소"}
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

export default AddRecipe;
