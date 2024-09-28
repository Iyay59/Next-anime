import Header from "@/app/component/AnimList/Header"
import AnimList from "@/app/component/AnimList"
import Player from "@/app/Player/Player"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}read.php`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="lihat semua" linkHref="/Populer" />
        <AnimList api={topAnime} />
        <Player />
      </section>
    </>
  )
};

export default Home
