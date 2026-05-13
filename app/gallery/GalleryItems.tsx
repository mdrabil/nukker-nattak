// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { Circle, MapPin, Search } from "lucide-react";

// const GalleryItems = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = [
//     { title: "All", image: "/images/gallery2.png" },
//     { title: "Government Campaigns", image: "/images/gallery2.png" },
//     { title: "Corporate Awareness", image: "/images/gallery3.png" },
//     { title: "CSR & College Activations", image: "/images/gallery2.png" },
//     { title: "Election Awareness", image: "/images/gallery3.png" },
//   ];

//   const items = [
//     {
//       image: "/images/home9.png",
//       bgImage: "/images/homeblack1.png",
//       title: "Swachh Bharat Drive",
//       category: "Government Campaigns",
//       location: "Bangalore",
//     },
//     {
//       image: "/images/home10.png",
//       bgImage: "/images/homeblack1.png",
//       title: "BSES Energy Awareness",
//       category: "Government Campaigns",
//       location: "Delhi",
//     },
//     {
//       image: "/images/home11.png",
//       bgImage: "/images/homeblack1.png",
//       title: "Election Awareness Drive",
//       category: "Government Campaigns",
//       location: "Mumbai",
//     },
//     {
//       image: "/images/home11.png",
//       bgImage: "/images/homeblack1.png",
//       title: "Election Awareness Drive 2",
//       category: "Government Campaigns",
//       location: "Mumbai",
//     },
//   ];

//   // ✅ GSAP ANIMATION (REUSABLE STYLE)
//   useEffect(() => {
//     if (!gridRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         gridRef.current.children,
//         { y: 50, opacity: 0, scale: 0.95 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.12,
//           ease: "power3.out",
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [activeFilter]);

//   // ✅ FILTER LOGIC
//   const filteredItems =
//     activeFilter === "All"
//       ? items
//       : items.filter((i) => i.category === activeFilter);

//   return (
//     <div ref={sectionRef} className="wrapper">
//       {/* ================= FILTER BAR ================= */}
//       <div className="filterWrapper">
//         <div className="filterScroll">
//           {filters.map((item, index) => {
//             const isActive = activeFilter === item.title;

//             return (
//               <div
//                 key={index}
//                 className={`filterCard ${isActive ? "active" : ""}`}
//                 onClick={() => setActiveFilter(item.title)}
//               >
//                 <img src={item.image} className="filterImg" />
//                 <div className={`filterTitle ${isActive ? "activeTitle" : ""}`}>
//                   {item.title}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= GRID ================= */}
//       <div className="mainBox">
//         <div ref={gridRef} className="grid">
//           {filteredItems.map((item, index) => (
//             <div key={index} className="card">
//               <div className="cardInner">
//                 <img src={item.image} className="cardImg" />

//                 {/* OVERLAY */}
//                 <div className="overlay">
//                   <Search size={34} />
//                   <button className="viewBtn">View More</button>
//                 </div>

//                 {/* BOTTOM */}
//                 <div
//                   className="bottom"
//                   style={{ backgroundImage: `url(${item.bgImage})` }}
//                 >
//                   <div>
//                     <h3>{item.title}</h3>
//                     <p>
//                       <MapPin size={12} /> {item.location}
//                     </p>
//                   </div>

//                   <span className="tag">
//                     <Circle size={10} /> {item.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= STYLE ================= */}
//       <style jsx>{`
//         .wrapper {
//           width: 100%;
//         }

//         /* ===== FILTER MOBILE SCROLL ===== */
//         .filterWrapper {
//           width: 100%;
//           padding: 15px 0;
//         }

//         .filterScroll {
//           display: flex;
//           gap: 12px;
//           overflow-x: auto;
//           padding: 10px 15px;
//           scrollbar-width: none;
//         }

//         .filterScroll::-webkit-scrollbar {
//           display: none;
//         }

//         .filterCard {
//           flex: 0 0 auto;
//           text-align: center;
//           cursor: pointer;
//           padding: 10px;
//           border-radius: 12px;
//           transition: 0.3s;
//         }

//         .filterImg {
//           width: 90px;
//           height: auto;
//         }

//         .filterTitle {
//           font-size: 13px;
//           margin-top: 8px;
//           font-weight: 600;
//         }

//         .activeTitle {
//           background: #f97316;
//           color: #fff;
//           padding: 6px 10px;
//           border-radius: 8px;
//         }

//         /* ===== GRID ===== */
//         .mainBox {
//           padding: 30px 15px;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 20px;
//         }

//         .cardInner {
//           position: relative;
//           overflow: hidden;
//           border-radius: 14px;
//         }

//         .cardImg {
//           width: 100%;
//           transition: 0.4s;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(0, 0, 0, 0.8),
//             rgba(0, 0, 0, 0.2)
//           );
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: #fff;
//           transform: translateY(100%);
//           transition: 0.4s;
//         }

//         .cardInner:hover .overlay {
//           transform: translateY(0);
//         }

//         .cardInner:hover .cardImg {
//           transform: scale(1.05);
//         }

//         .viewBtn {
//           margin-top: 10px;
//           padding: 6px 18px;
//           background: #f97316;
//           border: none;
//           color: #fff;
//           border-radius: 8px;
//           cursor: pointer;
//         }

//         .bottom {
//           display: flex;
//           justify-content: space-between;
//           align-items: end;
//           padding: 10px;
//           background-size: cover;
//           color: #fff;
//         }

//         .bottom h3 {
//           font-size: 14px;
//         }

//         .bottom p {
//           font-size: 11px;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }

//         .tag {
//           font-size: 10px;
//           background: #f97316;
//           padding: 6px 10px;
//           border-radius: 6px;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }

//         /* ===== RESPONSIVE ===== */
//         @media (min-width: 768px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (min-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(4, 1fr);
//           }

//           .filterScroll {
//             justify-content: center;
//             overflow-x: hidden;
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