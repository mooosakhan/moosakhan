// import React from 'react';

// const WorksItems = ({ item }) => {
//   return (
//     // <div className="bg-zinc-900  transition-all">
//     //   <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
//     //   <h1 className="text-yellow-500 text-xl md:text-xl font-extrabold font-poppins">

//     //     {item.title}
//     //   </h1>
//     //   <h1 className="text-teal-300 font-bold text-sm font-poppins self-center lg:text-left md:self-start">
//     //     {item.category}
//     //   </h1>
//     // </div >
    
//   );
// };

// export default WorksItems;
import React from 'react';

const WorksItems = ({ item }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg transition-all hover:scale-105">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h1 className="text-yellow-500 text-xl md:text-xl font-extrabold font-poppins mb-2">
        {item.title}
      </h1>
      <p className="text-zinc-400 mb-3">{item.description}</p>
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-teal-300 font-bold text-sm font-poppins hover:text-teal-400"
      >
        View Project →
      </a>
      <span className="block mt-2 text-zinc-500 text-sm">{item.category}</span>
    </div>
  );
};

export default WorksItems;