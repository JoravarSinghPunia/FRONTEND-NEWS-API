import axios from "axios";

export function getAllArticles() {
  return axios
    .get("https://backend-news-api-rzxs.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

export const getArticleById = (articleId) => {
  return axios
    .get(`https://backend-news-api-rzxs.onrender.com/api/articles/${articleId}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCommentsByID = (articleId) => {
  return axios
    .get(
      `https://backend-news-api-rzxs.onrender.com/api/articles/${articleId}/comments`
    )
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};
