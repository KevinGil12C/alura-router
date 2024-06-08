import ListPosts from "../components/ListPosts"
import ListCategorias from "../components/ListCategorias"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategorias/>
      <ListPosts url={"/posts"} />
    </main>
  )
}

export default Home