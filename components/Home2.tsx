



// "use client";

// import React, { useRef } from "react";

// const Home2 = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   // separate array
//   const campaigns = [
//     1, 4, 3, 2,1,4,3
//   ];

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           padding: "40px 0px 0px 0px",

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",

//           gap: "0px",
//         }}
//       >
//         {/* HEADING */}

//         <h2
//           className="gsap-heading"
//           style={{
//             margin: 0,
//             textAlign: "center",
//             fontSize: "clamp(20px, 4vw, 42px)",
//             fontWeight: 800,
//             lineHeight: "1.3",
//           }}
//         >
//           Trusted Partner for Impactful{" "}
//           <span style={{ color: "#F26A21" }}>
//             Awareness Campaigns
//           </span>
//         </h2>

//         {/* GRID */}

//         <div className="responsiveGrid">
//           {campaigns.map((item) => (
//             <div
//               key={item}
//               className="gridItem"
//             >
//               <img
//                 src={`/images/home${item}.png`}
//                 alt={`Campaign ${item}`}
//                 className="gridImage gsap-hover-text"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS */}

//       <style jsx>{`
//         .responsiveGrid {
//           width: 100%;
// padding-top:20px;
//           display: flex;
//           flex-wrap: nowrap;

//             justify-content: flex-start;
//           align-items: center;

//           gap: 40px;

//           overflow-x: auto;
//           overflow-y: hidden;

//           scrollbar-width: none;
//         }

//         .responsiveGrid::-webkit-scrollbar {
//           display: none;
//         }

//         .gridItem {
//          width: calc(40% - 10px);

//           flex: 0 0 auto;

//           display: flex;
//           justify-content: flex-start;
//           align-items: center;
//         }

//         .gridImage {
//           width: 100%;
//           max-width: 220px;
//           height: 180px;

//           object-fit: contain;
//           display: block;

//           will-change: transform, opacity;
//           transform: translateZ(0);
//           backface-visibility: hidden;
//         }

//         @media (min-width: 1024px) {
//           .responsiveGrid {
//             gap: 0px;
//           }

//           .gridItem {
//             width: auto;
//           }
//              .gridImage {
//           width: 70%;
//           max-width: 220px;
//           height: 180px;

//           object-fit: contain;
//           display: block;

//           will-change: transform, opacity;
//           transform: translateZ(0);
//           backface-visibility: hidden;
//         }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home2;






"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Home2 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // separate array
  const campaigns = [1, 4, 3, 2, 1, 4, 3];

  // AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      const items = container.querySelectorAll(".gridItem");

      if (!items.length) return;

      const nextIndex = (activeIndex + 1) % items.length;

      const nextItem = items[nextIndex] as HTMLElement;

      container.scrollTo({
        left: nextItem.offsetLeft - 20,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // MANUAL ARROWS
  const scrollToItem = (index: number) => {
    const container = scrollRef.current;

    if (!container) return;

    const items = container.querySelectorAll(".gridItem");

    const item = items[index] as HTMLElement;

    container.scrollTo({
      left: item.offsetLeft - 20,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const nextSlide = () => {
    const next = (activeIndex + 1) % campaigns.length;
    scrollToItem(next);
  };

  const prevSlide = () => {
    const prev =
      activeIndex === 0
        ? campaigns.length - 1
        : activeIndex - 1;

    scrollToItem(prev);
  };

  return (
    <div
      ref={sectionRef}
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "40px 0px 0px 0px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          gap: "0px",
        }}
      >
        {/* HEADING */}

        <h2
          className=""
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "clamp(20px, 4vw, 42px)",
            fontWeight: 800,
            lineHeight: "1.3",
          }}
        >
          Trusted Partner for Impactful{" "}
          <span style={{ color: "#F26A21" }}>
            Awareness Campaigns
          </span>
        </h2>

        {/* MOBILE ARROWS */}

    <div className="mobileControls">
  <button onClick={prevSlide}>
    <ChevronLeft size={20} />
  </button>

  <button onClick={nextSlide}>
    <ChevronRight size={20} />
  </button>
</div>

        {/* GRID */}

        <div
          className="responsiveGrid"
          ref={scrollRef}
        >
          {campaigns.map((item, index) => (
            <div
              key={index}
              className="gridItem"
            >
              <img
                src={`/images/home${item}.png`}
                alt={`Campaign ${item}`}
                className="gridImage gsap-hover-text"
              />
            </div>
          ))}
        </div>

        {/* DOTS */}

        <div className="dotsWrapper">
          {campaigns.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                activeIndex === index ? "activeDot" : ""
              }`}
              onClick={() => scrollToItem(index)}
            />
          ))}
        </div>
      </div>

      {/* CSS */}

      <style jsx>{`
        .responsiveGrid {
          width: 100%;
          padding-top: 20px;

          display: flex;
          flex-wrap: nowrap;

          justify-content: flex-start;
          align-items: center;

          gap: 40px;

          overflow-x: auto;
          overflow-y: hidden;

          scroll-behavior: smooth;

          scrollbar-width: none;
        }

        .responsiveGrid::-webkit-scrollbar {
          display: none;
        }

        .gridItem {
          width: calc(40% - 10px);

          flex: 0 0 auto;

          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .gridImage {
          width: 100%;
          max-width: 220px;
          height: 180px;

          object-fit: contain;
          display: block;

          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .dotsWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          margin-top: 18px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d1d1;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .activeDot {
          width: 22px;
          border-radius: 20px;
          background: #f26a21;
        }

        .mobileControls {
          width: 100%;

          display: flex;
          justify-content: flex-end;
          gap: 10px;

          padding: 12px 20px 0px 20px;
        }

        .mobileControls button {
          width: 38px;
          height: 38px;
  display: flex;
          justify-content: center;
          align-items:center;
          border: none;
          border-radius: 50%;

          background: #f26a21;
          color: white;

          font-size: 18px;
          cursor: pointer;
        }

        @media (min-width: 1024px) {
          .responsiveGrid {
            gap: 0px;
          }

          .gridItem {
            width: auto;
          }

          .gridImage {
            width: 70%;
            max-width: 220px;
            height: 180px;

            object-fit: contain;
            display: block;

            will-change: transform, opacity;
            transform: translateZ(0);
            backface-visibility: hidden;
          }

          .mobileControls {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home2;