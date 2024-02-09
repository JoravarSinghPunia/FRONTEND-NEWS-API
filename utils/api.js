import axios from "axios";
const api = axios.create({
  baseURL: "https://backend-news-api-rzxs.onrender.com/api",
});

export function getAllArticles() {
  return api
    .get("https://backend-news-api-rzxs.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
}

export const getArticleById = (articleId) => {
  return api
    .get(`https://backend-news-api-rzxs.onrender.com/api/articles/${articleId}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCommentsByID = (articleId) => {
  return api
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

export const patchArticlesByID = (articleId, votes) => {
  return api
    .patch(
      `https://backend-news-api-rzxs.onrender.com/api/articles/${articleId}`,
      { inc_votes: votes }
    )
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCommentOnArticleById = (articleId, user, comment) => {
  const requestBody = {
    username: user,
    body: comment,
  };
  console.log(requestBody);
  return api
    .post(`/articles/${articleId}/comments`, requestBody)
    .then((response) => {
      console.log(response);
      return response.data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchUsers = () => {
  return fetch(`https://backend-news-api-rzxs.onrender.com/api/users`)
    .then((response) => {
      return response.json();
    })
    .then((data) => data.user);
};

export const fetchTopics = (topic) => {
  return api
    .get(`/articles?topic=${topic}`)
    .then((response) => {
      console.log(response.data);
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
      throw error;
    });
};
