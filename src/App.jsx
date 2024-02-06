import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import View_Article from "./pages/view_article";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentArticle, setCurrentArticle] = useState({});

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
          path="/"
          element={<ArticleList />}
          setCurrentArticle={setCurrentArticle}
        />
        <Route
          path="/:article_id"
          element={<View_Article />}
          component={View_Article}
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
