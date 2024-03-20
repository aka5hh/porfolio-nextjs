import Image from "next/image";
import Me from "@/public/akash.png";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900
         dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>


      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">

          <Image alt="Picture of Abu Bakar Siddique" src={Me} 
          className="h-48 w-48 rounded-full object-cover object-top" />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Abu Bakar Siddique</h3>

        </div>

      </div>
    </div>

  );
}
