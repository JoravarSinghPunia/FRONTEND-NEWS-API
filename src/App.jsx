import React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import View_Article from "./pages/view_article";
import { getUserByUsername } from "../utils/api";
import { CurrentUserContext } from "./Contexts/CurrentUser";
// import TopicArticles from "./components/TopicArticles";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentArticle, setCurrentArticle] = useState({});
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const selectedUser = "grumpy19";
    getUserByUsername(selectedUser).then((userData) => {
      setCurrentUser(userData);
    });
  }, []);

  return (
    <div>
      <div className="Header-nav">
        <div className="Header">
          <Header />
        </div>
        <div className="Nav">
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route
          path="/articles/:topic_name"
          element={<Home setCurrentArticle={setCurrentArticle} />}
        />
        {/* <Route path="/topics/:topic" element={<TopicArticles />} /> */}
        <Route
          path="/"
          element={<ArticleList setCurrentArticle={setCurrentArticle} />}
        />
        <Route path="/:article_id" element={<View_Article />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
