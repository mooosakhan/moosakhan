import React from 'react';

const WorksItems = ({ item }) => {
  return (
    <div className="bg-zinc-900  transition-all">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h1 className="text-yellow-500 text-xl md:text-xl font-extrabold font-poppins">

        {item.title}
      </h1>
      <h1 className="text-teal-300 font-bold text-sm font-poppins self-center lg:text-left md:self-start">
        {item.category}
      </h1>
    </div >
  );
};

export default WorksItems;
