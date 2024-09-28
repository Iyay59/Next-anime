import Image from 'next/image'
import Link from 'next/link'
const AnimList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`/${anime.id}`} className="cursor-pointer" key="anime.index">
            <Image src={anime.image} alt="" width={350} height={350} className="w-full max-h-64 object-cover" />
            <h3 className="font-bold md:text-xl text-md p-4">{anime.judul}</h3>
          </Link>
        )
      })}
    </div>
  )
};

export default AnimList
