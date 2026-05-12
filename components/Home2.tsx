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

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !imgRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {

      // TITLE ANIMATION
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power2.out",
          force3D: true,

          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // IMAGE GRID ANIMATION
      gsap.fromTo(
       imgRef.current!.children,
        {
          y: 70,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
          force3D: true,

          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();

  }, []);

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
          padding: "40px 0px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          gap: "35px",
        }}
      >
        {/* HEADING */}
        <h2
          ref={titleRef}
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
        <div
          ref={imgRef}
          className="responsiveGrid"
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="gridItem"
            >
              <img
                src={`/images/home${item}.png`}
                alt={`Campaign ${item}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .responsiveGrid {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 30px;

          align-items: end;
        }

        .gridItem {
          will-change: transform, opacity;

          transform: translateZ(0);
          backface-visibility: hidden;
        }

        @media (min-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: repeat(4, 1fr);

            gap: 50px;

            align-items: end;
          }
        }
      `}</style>
    </div>
  );
};

export default Home2;