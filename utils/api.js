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
  return api
    .post(
      `https://backend-news-api-rzxs.onrender.com/api/articles/${articleId}/comments`,
      requestBody
    )
    .then((response) => {
      return response.data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserByUsername = (username) => {
  return api
    .get(`https://backend-news-api-rzxs.onrender.com/api/users/`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchTopics = () => {
  return api
    .get(`/topics`)
    .then((response) => {
      return response.data.topics;
    })
    .catch((err) => {
      console.log(err);
    });
};
