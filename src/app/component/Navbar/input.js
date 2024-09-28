"use client"
const Input = () => {
  return (
    <div className="relative">
      <input placeholder="Cari..."
        className="w-full p-2 rounded" />
      <button className="absolute top-2 end-2">
        go
      </button>
    </div>
  )
};

export default Input
