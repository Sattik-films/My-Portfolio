import { ArrowUp } from 'lucide-react'
import React from 'react'

const Top = () => {
  return (
    <div
      className="hidden md:block fixed right-0 bottom-0 border rounded-full m-10 z-999"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="text-white cursor-pointer" size={40} />
    </div>
  );
}

export default Top
