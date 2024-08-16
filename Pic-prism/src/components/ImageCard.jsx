import React from 'react'

const ImageCard = ({id,image,price,tittle,author,icon1,icon2}) => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-2">
      <div className="w-full   h-[43vh] overflow-hidden rounded-2xl ">
        <img
          src={image}
          alt=""
          className="w-full h-full hover:scale-105 cursor-pointer    transition-all ease-linear duration-300 transform"
        />
      </div>
      <p className="font-semibold text-white bg-black w-fit mt-2 text-xs  px-2 py-1 rounded-xl">
        {"@"+author.charAt(0).toUpperCase()+author.slice(1)}
      </p>
      <div>
        <div className=" flex justify-between items-center mt-2">
          <div>
            <h3 className="text-lg font-semibold  ">{tittle}</h3>
            <p className="text-gray-500 font-semibold ">price : ${price}</p>
          </div>
          <div className="gap-3 flex justify-between items-end mt-5 ">
           
           {icon1}
           {icon2}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
