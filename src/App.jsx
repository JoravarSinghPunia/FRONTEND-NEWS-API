import React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import View_Article from "./pages/view_article";

import { TopicArticles } from "./components/TopicArticles";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
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
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<TopicArticles />} />
        <Route
          path="/articles/:article_id/comments"
          element={<ArticleList />}
        />
        <Route path="/:article_id" element={<View_Article />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
