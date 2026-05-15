// "use client";

// import React, { useEffect, useRef } from "react";
// import Heading from "./common/Heading";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home3 = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!gridRef.current || !headingWrapRef.current) return;

//     // Heading animation
//     gsap.from(headingWrapRef.current, {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: headingWrapRef.current,
//         start: "top 80%",
//       },
//     });

//     // Grid items animation
//     gsap.from(gridRef.current.children, {
//       y: 80,
//       opacity: 0,
//       scale: 0.95,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: gridRef.current,
//         start: "top 85%",
//       },
//     });
//   }, []);

//   return (
//     <div>
//       {/* wrap heading only for animation (UI SAME) */}
//       <div ref={headingWrapRef}>
//         <Heading />
//       </div>

//       <div
//         className="website-container"
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "35px",
//         }}
//       >
//         {/* GRID */}
//         <div ref={gridRef} className="responsiveGrid">
//           {[5, 6, 7, 8].map((item) => (
//             <div key={item} className="gridItem">
//               <img
//                 src={`/images/home${item}.png`}
//                 alt="Partner"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS (UNCHANGED) */}
// <style jsx>{`
//   .responsiveGrid {
//     width: 100%;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//   }

//   .gridItem {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 10px;
//   }

//   /* ❌ MOBILE: no border at all */
//   .gridItem::after {
//     display: none;
//   }

//   /* ✅ DESKTOP */
//   @media (min-width: 1024px) {
//     .responsiveGrid {
//       grid-template-columns: repeat(4, 1fr);
//     }

//     .gridItem::after {
//       content: "";
//       position: absolute;
//       right: 0;
//       top: 0;
//       width: 5px;
//       height: 100%;
//       background: linear-gradient(
//         to bottom,
//         black 0%,
//         black 30%,
//         black 100%
//       );
//       display: block;
//     }

//     /* remove border from last item */
//     .gridItem:last-child::after {
//       display: none;
//     }

//     /* remove border from last column items */
//     .gridItem:nth-child(4n)::after {
//       display: none;
//     }
//   }
// `}</style>
//     </div>
//   );
// };

// export default Home3;



// "use client";

// import React, { useEffect, useRef } from "react";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// gsap.registerPlugin(ScrollTrigger);

// const Home3 = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const headingWrapRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   // SERVICES DATA
//   const services = [
//     {
//       id: 1,
//       image: "/images/service1.png",
//       title: "Street Play Campaigns",
//     },
//     {
//       id: 2,
//       image: "/images/service2.png",
//       title: "Social Awareness Drives",
//     },
//     {
//       id: 3,
//       image: "/images/service3.png",
//       title: "Election Awareness",
//     },
//     {
//       id: 4,
//       image: "/images/service4.png",
//       title: "Health Awareness",
//     },
//     {
//       id: 5,
//       image: "/images/service5.png",
//       title: "Women Empowerment",
//     },
//     {
//       id: 6,
//       image: "/images/service6.png",
//       title: "Environmental Campaigns",
//     },
//     {
//       id: 7,
//       image: "/images/service7.png",
//       title: "Youth Engagement",
//     },
//     {
//       id: 8,
//       image: "/images/service8.png",
//       title: "Education Awareness",
//     },
//     {
//       id: 9,
//       image: "/images/service9.png",
//       title: "CSR Activities",
//     },
//     {
//       id: 10,
//       image: "/images/service10.png",
//       title: "Public Interaction Programs",
//     },
//     {
//       id: 11,
//       image: "/images/service11.png",
//       title: "Brand Promotions",
//     },
//   ];

//   useEffect(() => {
//     if (
//       !gridRef.current ||
//       !headingWrapRef.current ||
//       !sectionRef.current
//     ) {
//       return;
//     }

//     const ctx = gsap.context(() => {
//       // HEADING ANIMATION
//       gsap.fromTo(
//         headingWrapRef.current,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",

//           scrollTrigger: {
//             trigger: headingWrapRef.current,
//             start: "top 85%",
//             once: true,
//           },
//         }
//       );

//       // CARD ANIMATION
//       gsap.fromTo(
//         gridRef.current!.children,
//         {
//           y: 60,
//           opacity: 0,
//           scale: 0.96,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.9,
//           stagger: 0.12,
//           ease: "power2.out",

//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 88%",
//             once: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       {/* HEADING */}
//       <div ref={headingWrapRef}>
//            <HeadingUpdate
//                          title="Our"
//                          color="black"
//                          title2={true}
//                          title2Text="Services"
//                          mobileSize="24px"
//                          desktopSize="50px"
//                        />
//       </div>

//       <div className="website-container">
//         {/* ROW 1 */}
//         <div className="row row3 " ref={gridRef}>
//           {services.slice(0, 3).map((item) => (
//             <div key={item.id} className="gridItem ">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="image"
//               />

//               <h2 className="title">{item.title}</h2>
//             </div>
//           ))}
//         </div>

//         {/* ROW 2 */}
//         <div className="row row2 ">
//           {services.slice(3, 5).map((item) => (
//             <div key={item.id} className="gridItem ">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="image"
//               />

//               <h2 className="title">{item.title}</h2>
//             </div>
//           ))}
//         </div>

//         {/* ROW 3 */}
//         <div className="row row3 ">
//           {services.slice(5, 8).map((item) => (
//             <div key={item.id} className="gridItem ">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="image"
//               />

//               <h2 className="title">{item.title}</h2>
//             </div>
//           ))}
//         </div>

//         {/* ROW 4 */}
//         <div className="row row3 ">
//           {services.slice(8, 11).map((item) => (
//             <div key={item.id} className="gridItem">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="image"
//               />

//               <h2 className="title">{item.title}</h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
    

//         .row {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           margin-bottom: 30px;
//           flex-wrap: wrap;
//           padding:0px 100px
//         }

//         .row3 .gridItem {
//           width: calc(33.33% - 20px);
//         }

//         .row2 .gridItem {
//           width: calc(50% - 20px);
//         }

//         .gridItem {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           border-radius: 20px;
//           overflow: hidden;
//           will-change: transform, opacity;
//         }

//      .image {
//   width:100%;
//   height: 80%;

//   object-fit: contain;
//   display: block;
//   border-radius: 20px;

// }

//         .title {
//           font-size: 18px;
//           font-weight: 700;
//           line-height: 1.4;
//           text-align: center;
//         }

//         /* MOBILE */
//         @media (max-width: 767px) {

//           .row {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           gap: 30px;
//           margin-bottom: 30px;
//           flex-wrap: wrap;
//           padding:0px 0px
//         }

//           .row3 .gridItem,
//           .row2 .gridItem {
//             width: 100%;
//           }

//           .image {
//             height: auto;
//           }

//           .row {
//             gap: 20px;
//             margin-bottom: 20px;
//           }

//           .title {
//             font-size: 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home3;



"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadingUpdate } from "./common/HeadingUpdate";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // SERVICES DATA
  const services = [
    {
      id: 1,
      image: "/images/service1.png",
      title: "Street Play Campaigns",
    },
    {
      id: 2,
      image: "/images/service2.png",
      title: "Social Awareness Drives",
    },
    {
      id: 3,
      image: "/images/service3.png",
      title: "Election Awareness",
    },
    {
      id: 4,
      image: "/images/service4.png",
      title: "Health Awareness",
    },
    {
      id: 5,
      image: "/images/service5.png",
      title: "Women Empowerment",
    },
    {
      id: 6,
      image: "/images/service6.png",
      title: "Environmental Campaigns",
    },
    {
      id: 7,
      image: "/images/service7.png",
      title: "Youth Engagement",
    },
    {
      id: 8,
      image: "/images/service8.png",
      title: "Education Awareness",
    },
    {
      id: 9,
      image: "/images/service9.png",
      title: "CSR Activities",
    },
    {
      id: 10,
      image: "/images/service10.png",
      title: "Public Interaction Programs",
    },
    {
      id: 11,
      image: "/images/service11.png",
      title: "Brand Promotions",
    },
  ];

  useEffect(() => {
    if (
      !gridRef.current ||
      !headingWrapRef.current ||
      !sectionRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // HEADING ANIMATION
      gsap.fromTo(
        headingWrapRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",

          scrollTrigger: {
            trigger: headingWrapRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // ENTRY ANIMATION
      gsap.fromTo(
        ".gridItem",
        {
          y: 60,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",

          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

   
      gsap.utils.toArray<HTMLElement>(".gridItem").forEach((card) => {
        gsap.to(card, {
          scale: 1.06,
          duration: 0.4,
          ease: "power2.out",

          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: 1,

            onEnter: () => {
              gsap.to(card, {
                scale: 1.06,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onLeave: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onEnterBack: () => {
              gsap.to(card, {
                scale: 1.06,
                duration: 0.4,
                ease: "power2.out",
              });
            },

            onLeaveBack: () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            },
          },
        });
      });
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
      {/* HEADING */}
      <div ref={headingWrapRef}>
        <HeadingUpdate
          title="Our"
          color="black"
          title2={true}
          title2Text="Services"
          mobileSize="25px"
          desktopSize="30px"
        />
      </div>

      <div className="">
        {/* ROW 1 */}
        <div className="row row3" ref={gridRef}>
          {services.slice(0, 3).map((item) => (
            <div key={item.id} className="gridItem ">
              <img  src={item.image} alt={item.title} className="image gsap-hover-text" />

              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="row row2">
          {services.slice(3, 5).map((item) => (
            <div key={item.id} className="gridItem">
              <img src={item.image} alt={item.title} className="image gsap-hover-text" />

              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="row row3">
          {services.slice(5, 8).map((item) => (
            <div key={item.id} className="gridItem">
              <img src={item.image} alt={item.title} className="image gsap-hover-text" />

              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </div>

        {/* ROW 4 */}
        <div className="row row3">
          {services.slice(8, 11).map((item) => (
            <div key={item.id} className="gridItem ">
              <img src={item.image} alt={item.title} className="image gsap-hover-text" />

              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .row {
          width: 90%;
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: auto;
          flex-wrap: wrap;
          padding: 0px 100px;
        }

        .row3 .gridItem {
          width: calc(33.33% - 20px);
        }

        .row2 .gridItem {
          width: calc(50% - 20px);
        }

        .gridItem {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border-radius: 20px;
          overflow: hidden;
          will-change: transform, opacity;
          transition: transform 0.4s ease;
        }

        .image {
          width: 100%;
          height: 80%;
          object-fit: contain;
          display: block;
          border-radius: 20px;
        }

        .title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          text-align: center;
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .row {
            width: 90%;
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: auto;
            flex-wrap: nowrap;
            padding: 0px 0px;
          }

          .row3 .gridItem,
          .row2 .gridItem {
            width: 100%;
          }

          .image {
            height: auto;
          }

          .row {
            gap: 30px;
            margin-bottom: 20px;
          }

          .title {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;