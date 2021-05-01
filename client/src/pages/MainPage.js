import React from "react";
import RecipeList from "../components/RecipeList";
import SideBar from "../components/SideBar";
import "../styles/MainPage.css";

const Main = ({ isLoggedIn = true }) => {
  const recipes = [
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
    {
      name: "나물비빔밥",
      desc: "육수로 지은 밥에 야채를 듬뿍 넣은 영양만점 나물비빔밥!",
      link:
        "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    },
  ];

  return (
    <>
      <SideBar isLoggedIn={isLoggedIn} />
      <main class="main main-page">
        <form className="searchBar">
          <input type="text" />
        </form>
        <RecipeList recipes={recipes} className="recipeList" />
      </main>
    </>
  );
};

export default Main;
