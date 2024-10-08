import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, techStacks = [], gitUrl, liveUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-b-xl bg-[#FAF9F6] px-4 py-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-700">{description}</p>

        <div className="flex space-x-2 mt-4">
          {techStacks.map((item, index) => (
            <div key={index} className="w-10 h-10 rounded-full relative border-1 border-black">
              <Image 
                src={`/images/${item}`} 
                alt={`${item}-icon`} 
                width={22} 
                height={22} 
                className="w-10 h-10 absolute transform rounded-full"
              />
            </div>
          ))}
        </div>
      </div>  
    </div>
    
  );
};

export default ProjectCard;