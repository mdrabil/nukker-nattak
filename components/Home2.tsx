// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home2 = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLHeadingElement | null>(null);
//   const imgRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     // Title animation
//     gsap.from(titleRef.current, {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: "top 85%",
//       },
//     });

//     // Images animation
//     gsap.from(imgRef.current?.children || [], {
//       y: 60,
//       opacity: 0,
//       scale: 0.9,
//       duration: 1,
//       stagger: 0.15,
//       scrollTrigger: {
//         trigger: imgRef.current,
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <div ref={sectionRef}>
//       <div
//         style={{
//           width: "100%",
//           padding: "40px 20px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "35px",
//         }}
//       >
//         {/* HEADING */}
//         <h2
//           ref={titleRef}
//           style={{
//             margin: 0,
//             textAlign: "center",
//             fontSize: "clamp(20px, 4vw, 42px)",
//             fontWeight: 800,
//           }}
//         >
//           Trusted Partner for Impactful{" "}
//           <span className="" style={{ color: "#F26A21" }}>Awareness Campaigns</span>
//         </h2>

//         {/* GRID */}
//         <div ref={imgRef} className="responsiveGrid">
//           {[1, 2, 3, 4].map((item) => (
//             <div key={item}>
//               <img
//                 src={`/images/home${item}.png`}
//                 style={{ width: "100%", }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .responsiveGrid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 50px;
//            align-items: end;
//         }

//         @media (min-width: 1024px) {
//           .responsiveGrid {
//             grid-template-columns: repeat(4, 1fr);
//               align-items: end;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home2;




// "use client";

// import React, { useEffect, useRef } from "react";


// const Home2 = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);



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
//           padding: "40px 0px",

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",

//           gap: "35px",
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

//         <div className="responsiveGrid gsap-stagger-wrap">
//           {[1, 4, 3, 2].map((item) => (
//             <div
//               key={item}
//               className="gridItem gsap-box"
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

//           display: flex;
//           flex-wrap: wrap;

//           justify-content: center;
//           align-items: center;

//           gap: 20px;
//         }

//         .gridItem {
//           width: calc(50% - 10px);

//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .gridImage {
//           width: 70%;
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
//             gap: 60px;
//           }

//           .gridItem {
//             width: auto;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home2;



"use client";

import React, { useRef } from "react";

const Home2 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // separate array
  const campaigns = [
    1, 4, 3, 2,1,4,3
  ];

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
          className="gsap-heading"
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

        {/* GRID */}

        <div className="responsiveGrid">
          {campaigns.map((item) => (
            <div
              key={item}
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
      </div>

      {/* CSS */}

      <style jsx>{`
        .responsiveGrid {
          width: 100%;
padding-top:20px;
          display: flex;
          flex-wrap: nowrap;

            justify-content: flex-start;
          align-items: center;

          gap: 40px;

          overflow-x: auto;
          overflow-y: hidden;

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
        }
      `}</style>
    </div>
  );
};

export default Home2;