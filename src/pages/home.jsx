import ArticleList from "../components/ArticleList";

export default function Home(props) {
  const { setCurrentArticle } = props;

  return (
    <>
      <ArticleList setCurrentArticle={setCurrentArticle} />
    </>
  );
}
