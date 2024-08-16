import React from "react";
import ImageCard from "./ImageCard";
import { MdShoppingCart } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center  items-center">
      <h3 className="my-14 text-3xl font-semibold">Photos</h3>
      {/* image card component */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
        <ImageCard
          title="The Parliment"
          author="dev-ahsan-zahid"
          image="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg"
          price={10}
          icon1={ <MdShoppingCart className="text-2xl text-black transition-all ease-linear cursor-pointer hover:scale-110  duration-200" />}
          icon2={ <IoHeart className="text-2xl text-red-500 transition-all ease-linear cursor-pointer hover:scale-110  duration-200" />}
        />
        <ImageCard
          title="Beautiful Girl"
          author="ali arshad"
          image="https://images.pexels.com/photos/20359974/pexels-photo-20359974/free-photo-of-portrait-of-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price={2000}
          icon1={ <MdShoppingCart className="text-2xl text-black transition-all ease-linear cursor-pointer hover:scale-110  duration-200" />}
          icon2={ <IoHeart className="text-2xl text-red-500 transition-all ease-linear cursor-pointer hover:scale-110  duration-200" />}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
