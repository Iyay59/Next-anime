import Input from "./input"
import Link from "next/link"
const Navbar = () => {
  return (
    <header className="bg-yellow-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-white text-xl">IYAY</Link>
        <Input />
      </div>
    </header>
  )
};

export default Navbar
