// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   MessageCircle,
//   Users,
//   Clock3,
//   Wallet,
//   HeartHandshake,
// } from "lucide-react";
// import { useIconHover } from "@/hooks/useIconHover";
// import { HeadingUpdate } from "./common/HeadingUpdate";

// const Home5 = () => {
//   const gridRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const iconRef = useIconHover();


//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = [
//     {
//       title: "Direct Communication",
//       image: "/images/team1.png",
//       desc: "Connects directly with people in their own environment.",
//       icon: <MessageCircle size={80} color="#EB631D" />,
//     },
//     {
//       title: "High Engagement",
//       image: "/images/team1.png",
//       desc: "Interactive, entertaining and easy to understand.",
//       icon: <Users size={80} color="#EB631D" />,
//     },
//     {
//       title: "Better Retention",
//       image: "/images/team1.png",
//       desc: "Messages are remembered for a long time.",
//       icon: <Clock3 size={80} color="#EB631D" />,
//     },
//     {
//       title: "Cost Effective",
//       image: "/images/team1.png",
//       desc: "Maximum impact with minimal resources.",
//       icon: <Wallet size={80} color="#EB631D" />,
//     },
//     {
//       title: "Social Impact",
//       image: "/images/team1.png",
//       desc: "Encourages positive behavior and community participation.",
//       icon: <HeartHandshake size={80} color="#EB631D" />,
//     },
//   ];



//   // ✅ GSAP ANIMATION (REUSABLE STYLE)
//   useEffect(() => {
//     if (!gridRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         gridRef.current!.children,
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

//   useEffect(() => {
//   if (!sectionRef.current) return;

//   gsap.fromTo(
//     ".divider",
//     { scaleY: 0, opacity: 0 },
//     {
//       scaleY: 1,
//       opacity: 1,
//       duration: 0.6,
//       stagger: 0.1,
//       ease: "power3.out",
//       transformOrigin: "center",
//     }
//   );
// }, []);



//   return (
//     <div ref={sectionRef} className="website-container">

//     <div >
//         {/* <Heading title="Our Recent Campaigns"  /> */}

//           <HeadingUpdate
//                     title="Why Street Plays"
//                     color="black"
//                     title2={true}
//                     title2Text="Work So Well"
//                     mobileSize="24px"
//                     desktopSize="50px"
//                   />
//       </div>

// {/* done  */}
// <div className="filterWrapper">
//   <div className="filterScroll">
//     {filters.map((item, index) => {
//       const isLast = index === filters.length - 1;

//       return (
//         <div key={index} className="filterCard">
    

//      <div className="gsap-icon">

// {item.icon}
// </div>

//           <h2 className="gsap-hover-text">{item.title}</h2>

//        <p className="">
//             {item.desc}</p>

   
//           {/* {!isLast && <span className="borderLine" />} */}
//           {!isLast && (
//   <img
//     src="/images/borderline.png"
//     alt="divider"
//     className="borderLine"
//   />
// )}
//         </div>
//       );
//     })}
//   </div>

//  <div >
//         {/* <Heading title="Our Recent Campaigns"  /> */}

//           <HeadingUpdate
//                     title="Be a Part of the"
//                     color="black"
//                     title2={true}
//                     title2Text="Change"
//                     mobileSize="24px"
//                     desktopSize="50px"
//                   />
// <div style={{ marginBottom: "50px" }}>
//   <span className=""
//     style={{
//       fontSize: "clamp(16px, 3vw, 20px)", // 👈 mobile 18px, desktop 30px
//       fontWeight: "500",
//     }}
//   >
//     Join hands with us to create awareness, inspire communities, and drive meaningful
//     social impact through powerful street performances and engaging public campaigns.
//   </span>
// </div>
//                     </div>
//       </div>
     

//       {/* ================= STYLE ================= */}
//       <style jsx>{`
//         .wrapper {
//           width: 100%;
//         }

// .filterScroll {
//   display: flex;
//   gap: 0;
//   overflow-x: auto;
//   padding: 10px 15px;
//   scrollbar-width: none;
// }

// .filterScroll::-webkit-scrollbar {
//   display: none;
// }

// /* ===== CARD ===== */
// .filterCard {
//   flex: 0 0 auto;
//   width: 280px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   gap: 12px;
//   padding: 0px 20px;
//   // margin:0px 0px 50px 0px;

//   position: relative;
//   text-align: center;
// }

// /* ===== FULL HEIGHT BORDER ===== */
// // .borderLine {
// //   position: absolute;
// //   right: 0;
// //   top: 50%;
// //   transform: translateY(-50%);

// //   width: 4px;
// //   height: 100%;

// //   background: linear-gradient(
// //     to bottom,
// //     transparent,
// //     rgba(0, 0, 0, 0.15),
// //     rgba(0, 0, 0, 0.8),
// //     rgba(0, 0, 0, 0.15),
// //     transparent
// //   );

// //   border-radius: 999px;
// // }

// .borderLine {
//   position: absolute;
//   right: -8px;
//   top: 50%;
//   transform: translateY(-50%);

//   width: 16px;   /* image width */
//   height: 100%;

//   object-fit: fill;
//   pointer-events: none;
// }

// /* REMOVE BORDER ON LAST */
// .filterCard:last-child .borderLine {
//   display: none;
// }

// /* IMAGE */
// .filterImg {
//   width: 100%;
//   max-width: 140px;
//   object-fit: contain;
// }

// /* TEXT */
// .filterCard h2 {
//   font-size: 20px;
//   font-weight: 700;
// }

// .filterCard p {
//   font-size: 14px;
//   font-weight: 300;
// }




     

//         /* ===== GRID ===== */
//         .mainBox {
//           padding: 30px 15px;
//         }


       

//       @media (min-width: 1024px) {
//   .filterScroll {
//     justify-content: center;
//     overflow-x: visible; /* change this */
   
//   }

//   .filterCard {
//     width: 260px; /* slightly flexible */
//   }
// }
//       `}</style>
//     </div>
//   );
// };

// export default Home5;




import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Users,
  Clock3,
  Wallet,
  HeartHandshake,
} from "lucide-react";

import { useIconHover } from "@/hooks/useIconHover";
import { HeadingUpdate } from "./common/HeadingUpdate";

const Home5 = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const iconRef = useIconHover();

  const [activeIndex, setActiveIndex] = useState(0);

  const filters = [
    {
      title: "Direct Communication",
      image: "/images/team1.png",
      desc: "Connects directly with people in their own environment.",
      icon: <MessageCircle size={80} color="#EB631D" />,
    },
    {
      title: "High Engagement",
      image: "/images/team1.png",
      desc: "Interactive, entertaining and easy to understand.",
      icon: <Users size={80} color="#EB631D" />,
    },
    {
      title: "Better Retention",
      image: "/images/team1.png",
      desc: "Messages are remembered for a long time.",
      icon: <Clock3 size={80} color="#EB631D" />,
    },
    {
      title: "Cost Effective",
      image: "/images/team1.png",
      desc: "Maximum impact with minimal resources.",
      icon: <Wallet size={80} color="#EB631D" />,
    },
    {
      title: "Social Impact",
      image: "/images/team1.png",
      desc: "Encourages positive behavior and community participation.",
      icon: <HeartHandshake size={80} color="#EB631D" />,
    },
  ];

  // AUTO SCROLL + REVERSE
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let current = 0;
    let direction = 1;

    const items = container.querySelectorAll(".filterCard");

    const interval = setInterval(() => {
      current += direction;

      // REVERSE
      if (current >= items.length - 1) {
        direction = -1;
      }

      if (current <= 0) {
        direction = 1;
      }

      const target = items[current] as HTMLElement;

      container.scrollTo({
        left: target.offsetLeft - 20,
        behavior: "smooth",
      });

      setActiveIndex(current);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // GSAP
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".divider",
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        transformOrigin: "center",
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="website-container">
      <div>
        <HeadingUpdate
          title="Why Street Plays"
          color="black"
          title2={true}
          title2Text="Work So Well"
          mobileSize="24px"
          desktopSize="50px"
        />
      </div>

      {/* done */}
      <div className="filterWrapper">
        <div className="filterScroll" ref={scrollRef}>
          {filters.map((item, index) => {
            const isLast = index === filters.length - 1;

            return (
              <div key={index} className="filterCard">
                <div className="gsap-icon">{item.icon}</div>

                <h2 className="gsap-hover-text">{item.title}</h2>

                <p>{item.desc}</p>

                {!isLast && (
                  <img
                    src="/images/borderline.png"
                    alt="divider"
                    className="borderLine"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="dotsWrapper">
          {filters.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                activeIndex === index ? "activeDot" : ""
              }`}
            />
          ))}
        </div>

        <div>
          <HeadingUpdate
            title="Be a Part of the"
            color="black"
            title2={true}
            title2Text="Change"
            mobileSize="24px"
            desktopSize="50px"
          />

          <div style={{ marginBottom: "50px" }}>
            <span
              style={{
                fontSize: "clamp(16px, 3vw, 20px)",
                fontWeight: "500",
              }}
            >
              Join hands with us to create awareness, inspire communities, and
              drive meaningful social impact through powerful street
              performances and engaging public campaigns.
            </span>
          </div>
        </div>
      </div>

      {/* ================= STYLE ================= */}
      <style jsx>{`
        .wrapper {
          width: 100%;
        }

        .filterScroll {
          display: flex;
          gap: 0;
          overflow-x: auto;
          padding: 10px 15px;
          scrollbar-width: none;

          scroll-behavior: smooth;
        }

        .filterScroll::-webkit-scrollbar {
          display: none;
        }

        /* ===== CARD ===== */
        .filterCard {
          flex: 0 0 auto;
          width: 280px;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 12px;
          padding: 0px 20px;

          position: relative;
          text-align: center;
        }

        .borderLine {
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);

          width: 16px;
          height: 100%;

          object-fit: fill;
          pointer-events: none;
        }

        .filterCard:last-child .borderLine {
          display: none;
        }

        .filterImg {
          width: 100%;
          max-width: 140px;
          object-fit: contain;
        }

        .filterCard h2 {
          font-size: 20px;
          font-weight: 700;
        }

        .filterCard p {
          font-size: 14px;
          font-weight: 300;
        }

        /* ===== DOTS ===== */

        .dotsWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;

          margin-top: 20px;
          margin-bottom: 10px;
        }

        .dot {
          width: 8px;
          height: 8px;

          border-radius: 999px;
          background: #d1d1d1;

          transition: all 0.3s ease;
        }

        .activeDot {
          width: 22px;
          background: #eb631d;
        }

        .mainBox {
          padding: 30px 15px;
        }

        @media (min-width: 1024px) {
          .filterScroll {
            justify-content: center;
            overflow-x: visible;
          }

          .filterCard {
            width: 260px;
          }

          .dotsWrapper {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home5;