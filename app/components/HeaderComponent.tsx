import Image from "next/image";

export default function HeaderComponent(){
  return(
    <header className="flex justify-between items-center px-2">
        <Image
          src="/logo.png"
          alt="goal tracker logo"
          width={100}
          height={100}
          >
        </Image>
        <p className="text-sm font-semibold text-gray-700">Welcome Felipe !</p>
      </header>
  )
}