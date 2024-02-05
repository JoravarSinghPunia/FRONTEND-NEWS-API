import React from "react";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Header-nav">
        <div className="Header">
          <Header />
        </div>
        <ArticleList />
      </div>
      <Footer />
    </div>
  );
}
export default App;
