// "use client";

// import Heading from "@/components/common/Heading";
// import gsap from "gsap";
// import { Circle, MapPin, Search } from "lucide-react";
// import React, { useEffect, useRef } from "react";

// const GalleryItems = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const imgRef = useRef<HTMLDivElement | null>(null);
//   const items = [
//     {
//       image: "/images/home9.png",
//       bgImage: "/images/homeblack1.png",
//       title: "Swachh Bharat Drive",
//       category:"Government Campaigns",
//       location: "Bangalore",
//       buttonTitle: "View More",
//       icon: <Circle size={14} />,
//     },
//     {
//       image: "/images/home10.png",
//       bgImage: "/images/homeblack1.png",
//       title: "BSES Energy Awareness",
//       location: "Delhi",
//       buttonTitle: "View More",
//          category:"Government Campaigns",
//       icon: <Circle size={14} />,
//     },
//     {
//       image: "/images/home11.png",
//       bgImage: "/images/homeblack1.png",
//       title: "Election Awareness Drive",
//          category:"Government Campaigns",
//       location: "Mumbai",
//       buttonTitle: "View More",
//       icon: <Circle size={14} />,
//     },

//       {
//       image: "/images/home11.png",
//       bgImage: "/images/homeblack1.png",
//       title: "Election Awareness Drive",
//          category:"Government Campaigns",
//       location: "Mumbai",
//       buttonTitle: "View More",
//       icon: <Circle size={14} />,
//     },
//   ];

//   useEffect(() => {
//     if (!gridRef.current || !headingWrapRef.current || !sectionRef.current)
//       return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         headingWrapRef.current,
//         { y: 40, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
//       );

//       gsap.fromTo(
//         gridRef.current!.children,
//         { y: 60, opacity: 0, scale: 0.95 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.9,
//           stagger: 0.15,
//           ease: "power2.out",
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={sectionRef} className="">
//    {/* HEADER FILTER */}
// <div className="filterWrapper">
//   {[
//     {
//       title: "All",
//       image: null,
//       active: true,
//     },
//     {
//       title: "Government Campaigns",
//       image: "/images/gallery2.png",
//     },
//     {
//       title: "Corporate Awareness",
//       image: "/images/gallery3.png",
//     },
//     {
//       title: "CSR & College Activations",
//       image: "/images/gallery2.png",
//     },
//     {
//       title: "Election Awareness",
//       image: "/images/gallery3.png",
//     },
//   ].map((item, index) => (
//     <div
//       key={index}
//       className={`filterCard ${item.active ? "activeFilter" : ""}`}
//     >
//       {item.image ? (
//         <img src={item.image} alt={item.title} className="filterImg" />
//       ) : (
//         <button className="allBtn">All</button>
//       )}

//       {!item.active && <h3>{item.title}</h3>}
//     </div>
//   ))}
// </div>

//       <div className="main-box">
//         <div ref={gridRef} className="responsiveGrid">
//           {items.map((item, index) => (
//             <div key={index} className="gridItem">
//               <div className="content">
//                 <img src={item.image} alt={item.title} className="cardImg" />

//                 {/* OVERLAY */}
//                 <div className="overlay">
//                   <Search size={34} />
              
//   <button className="overlay-btn main-background-primary">View More</button>
            
//                 </div>

//                 {/* BOTTOM BOX */}
//                 <div
//                   className="bottomBox"
//                   style={{
//                     backgroundImage: `url(${item.bgImage})`,
//                   }}
//                 >
//                   <div className="title">
//                     <h2>{item.title}</h2>
//                    <div className="flex items-center gap-2">
//                      <MapPin  size={10} color="white"/>
//                      <h4>  {item.location}</h4>
//                    </div>
//                   </div>

//                   <div className="buttonWrap main-background-primary">
//                     {/* {item.icon} */}
//                     <button className="btn">{item.category}</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
     
// .main-box{
// padding:50px  0px 50px 0px}
//         .responsiveGrid {
//           width: 100%;
//           display: grid;
//           grid-template-columns: repeat(1, 1fr);
//           gap: 30px;
//         }

//         .content {
//           position: relative;
//           overflow: hidden;
//           border-radius: 16px;
//         }

//         .cardImg {
//           width: 100%;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         /* ✅ FIXED OVERLAY ANIMATION */
//         .overlay {
//           position: absolute;
//           inset: 0;

//         //   background: linear-gradient(
//         //     to top,
//         //     rgba(235, 99, 29, 0.95),
//         //     rgba(235, 99, 29, 0.6)
//         //   );

//         background: linear-gradient(
//   to top,
//   rgba(43, 31, 13, 0.95),
//   rgba(43, 31, 13, 0.6)
// );

//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;

//           color: white;

//           /* START POSITION */
//           transform: translateY(100%);
//           opacity: 0;

//           transition: all 0.4s ease-in-out;
//         }

//         /* HOVER SMOOTH FROM BOTTOM */
//         .content:hover .overlay {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         .content:hover .cardImg {
//           transform: scale(1.06);
//         }

//         .overlay button {
        
//           color: #fff;
//           border: none;
//           padding: 5px 30px;
//           border-radius: 8px;
//           font-weight: 700;
//           cursor: pointer;
//         }

//         .bottomBox {
//           width: 100%;
//           background-size: cover;
//           background-position: center;

//           display: flex;
//           justify-content: space-between;
//           align-items: end;

//           padding: 16px 10px;
//         }

//         .title h2 {
//           font-size: 14px;
//           font-weight: 700;
//           margin: 0;
//           color: #fff;
//         }

//         .title h4 {
//           font-size: 10px;
//           margin: 0;
//           opacity: 0.8;
//           color: #fff;
//         }

//         .buttonWrap {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 8px 15px;
//           border-radius: 6px;
//           font-size: 9px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .buttonWrap:hover {
//           transform: translateY(-2px);
//         }

//         .btn {
//           background: transparent;
//           border: none;
//              font-size: 9px;
//           color: white;
//         }

//             .btn-2 {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: px 20px;
//           border-radius: 6px;
//           font-size: 9px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

     

//         .btn {
//           background: transparent;
//           border: none;
//              font-size: 9px;
//           color: white;
//         }
// /* ================= HEADER FILTER ================= */

// .filterWrapper {
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;
//   align-items: center;
//   padding: 20px 0;
// }

// .filterCard {
//   position: relative;
//   text-align: center;
//   padding: 10px 14px;
// }

// .filterCard::after {
//   content: "";
//   position: absolute;
//   right: -10px;
//   top: 10%;
//   height: 80%;
//   width: 1px;
//   background: #999;
// }

// .filterCard:last-child::after {
//   display: none;
// }

// .filterImg {
//   width: 100%;
//   max-width: 140px;
//   height: auto;
//   object-fit: contain;
//   margin: auto;
//   display: block;
// }

// .filterCard h3 {
//   font-size: 14px;
//   font-weight: 700;
//   line-height: 18px;
//   margin-top: 10px;
//   color: #111;
// }

// .allBtn {
//   background: #f97316;
//   color: white;
//   border: none;
//   padding: 14px 30px;
//   border-radius: 10px;
//   font-size: 18px;
//   font-weight: 700;
//   cursor: pointer;
// }

// /* ================= TABLET ================= */

// @media (min-width: 768px) {
//   .filterWrapper {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   .filterCard h3 {
//     font-size: 16px;
//   }
// }

// /* ================= DESKTOP ================= */

// @media (min-width: 1024px) {
//   .filterWrapper {
//     grid-template-columns: repeat(5, 1fr);
//     gap: 0;
//   }

//   .filterCard {
//     padding: 0 20px;
//   }

//   .filterImg {
//     max-width: 170px;
//   }

//   .filterCard h3 {
//     font-size: 18px;
//     line-height: 22px;
//   }
// }
//         @media (min-width: 768px) {
//           .responsiveGrid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
          

//         @media (min-width: 1024px) {
//           .responsiveGrid {
//             grid-template-columns: repeat(4, 1fr);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GalleryItems;


"use client";

import Heading from "@/components/common/Heading";
import gsap from "gsap";
import { Circle, MapPin, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const GalleryItems = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ ACTIVE FILTER STATE
const [activeFilter, setActiveFilter] = useState("All");

const filters = [
  {
    title: "All",
    image: "/images/gallery2.png",
  },
  {
    title: "Government Campaigns",
    image: "/images/gallery2.png",
  },
  {
    title: "Corporate Awareness",
    image: "/images/gallery3.png",
  },
  {
    title: "CSR & College Activations",
    image: "/images/gallery2.png",
  },
  {
    title: "Election Awareness",
    image: "/images/gallery3.png",
  },
];

  const items = [
    {
      image: "/images/home9.png",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      category: "Government Campaigns",
      location: "Bangalore",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
    {
      image: "/images/home10.png",
      bgImage: "/images/homeblack1.png",
      title: "BSES Energy Awareness",
      location: "Delhi",
      buttonTitle: "View More",
      category: "Government Campaigns",
      icon: <Circle size={14} />,
    },
    {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive",
      category: "Government Campaigns",
      location: "Mumbai",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
      {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive",
      category: "Government Campaigns",
      location: "Mumbai",
      buttonTitle: "View More",
      icon: <Circle size={14} />,
    },
  ];

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* HEADER FILTER */}
  {/* HEADER FILTER */}
<div className="filterWrapper">
  {filters.map((item, index) => {
    const isActive = activeFilter === item.title;

    return (
      <div
        key={index}
        className={`filterCard ${isActive ? "activeFilter" : ""}`}
        onClick={() => setActiveFilter(item.title)}
      >
        {/* IMAGE */}
        <img
          src={item.image}
          alt={item.title}
          className="filterImg"
        />

        {/* TITLE */}
        <div className={`filterTitle ${isActive ? "activeTitle" : ""}`}>
          {item.title}
        </div>
      </div>
    );
  })}
</div>

      {/* GRID */}
      <div className="main-box">
        <div ref={gridRef} className="responsiveGrid">
          {items.map((item, index) => (
            <div key={index} className="gridItem">
              <div className="content">
                <img src={item.image} alt={item.title} className="cardImg" />

                {/* OVERLAY */}
                <div className="overlay">
                  <Search size={34} />

                  <button className="overlay-btn main-background-primary">
                    View More
                  </button>
                </div>

                {/* BOTTOM BOX */}
                <div
                  className="bottomBox"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                  }}
                >
                  <div className="title">
                    <h2>{item.title}</h2>

                    <div className="flex items-center gap-2">
                      <MapPin size={10} color="white" />
                      <h4>{item.location}</h4>
                    </div>
                  </div>

                  <div className="buttonWrap main-background-primary">
                    <button className="btn">{item.category}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .main-box {
          padding: 50px 0;
        }

        .responsiveGrid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 30px;
        }

        .content {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .cardImg {
          width: 100%;
          display: block;
          transition: transform 0.5s ease;
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(43, 31, 13, 0.95),
            rgba(43, 31, 13, 0.6)
          );

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;

          color: white;

          transform: translateY(100%);
          opacity: 0;

          transition: all 0.4s ease-in-out;
        }

        .content:hover .overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .content:hover .cardImg {
          transform: scale(1.06);
        }

        .overlay button {
          color: #fff;
          border: none;
          padding: 5px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }

        .bottomBox {
          width: 100%;
          background-size: cover;
          background-position: center;

          display: flex;
          justify-content: space-between;
          align-items: end;

          padding: 16px 10px;
        }

        .title h2 {
          font-size: 14px;
          font-weight: 700;
          margin: 0;
          color: #fff;
        }

        .title h4 {
          font-size: 10px;
          margin: 0;
          opacity: 0.8;
          color: #fff;
        }

        .buttonWrap {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 15px;
          border-radius: 6px;
          font-size: 9px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .btn {
          background: transparent;
          border: none;
          font-size: 9px;
          color: white;
        }

        /* ================= HEADER FILTER ================= */

     

        @media (min-width: 768px) {
          .filterWrapper {
            grid-template-columns: repeat(3, 1fr);
          }

          .responsiveGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .filterCard h3 {
            font-size: 16px;
          }
        }

        /* ================= HEADER FILTER ================= */

.filterWrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: stretch;
  padding: 20px 0;
}

.filterCard {
  position: relative;
  text-align: center;
  padding: 20px 14px;
  cursor: pointer;
  transition: 0.3s ease;
  border-radius: 14px;
}

.filterCard::after {
  content: "";
  position: absolute;
  right: -10px;
  top: 15%;
  height: 70%;
  width: 1px;
  background: #999;
}

.filterCard:last-child::after {
  display: none;
}

.filterImg {
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: contain;
  margin: auto;
  display: block;
}

/* TITLE BUTTON */

.filterTitle {
  margin-top: 14px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #111;
//   padding: 10px 30px;
  border-radius: 10px;
  transition: 0.3s ease;
  display: inline-block;
}

/* ACTIVE STATE */

.activeTitle {
  background: #f97316;
  padding: 10px 10px;
  color: #fff;
}

/* ================= TABLET ================= */

@media (min-width: 768px) {
  .filterWrapper {
    grid-template-columns: repeat(3, 1fr);
  }

  .filterTitle {
    font-size: 15px;
    padding: 10px 30px;
  }
}

/* ================= DESKTOP ================= */

@media (min-width: 1024px) {
  .filterWrapper {
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  .filterCard {
    padding: 10px 20px;
  }

  .filterImg {
    max-width: 170px;
  }

  .filterTitle {
    font-size: 16px;
    line-height: 22px;
    padding: 12px 20px;
  }
}

        @media (min-width: 1024px) {
       
          .responsiveGrid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryItems;