"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Circle, MapPin, Search } from "lucide-react";

const WorkWithUs = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { title: "Meaningful Work", 
      image: "/images/team1.png" ,
      desc:"Use your skills to create awareness and bring positive change."
    },
    { title: "Meaningful Work",  image: "/images/team1.png",
       desc:"Use your skills to create awareness and bring positive change."
     },
    { title: "Meaningful Work",  image: "/images/team1.png",

          desc:"Use your skills to create awareness and bring positive change."
     },
    { title: "Meaningful Work",  image: "/images/team1.png",
          desc:"Use your skills to create awareness and bring positive change."
     },
    { title: "Meaningful Work",  image: "/images/team1.png",
          desc:"Use your skills to create awareness and bring positive change."
     },
  ];

  const items = [
    {
      image: "/images/home9.png",
      bgImage: "/images/homeblack1.png",
      title: "Swachh Bharat Drive",
      category: "Government Campaigns",
      location: "Bangalore",
    },
    {
      image: "/images/home10.png",
      bgImage: "/images/homeblack1.png",
      title: "BSES Energy Awareness",
      category: "Government Campaigns",
      location: "Delhi",
    },
    {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive",
      category: "Government Campaigns",
      location: "Mumbai",
    },
    {
      image: "/images/home11.png",
      bgImage: "/images/homeblack1.png",
      title: "Election Awareness Drive 2",
      category: "Government Campaigns",
      location: "Mumbai",
    },
  ];

  // ✅ GSAP ANIMATION (REUSABLE STYLE)
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
  }, [activeFilter]);

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

  // ✅ FILTER LOGIC
  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((i) => i.category === activeFilter);

  return (
    <div ref={sectionRef} className="wrapper">
      {/* ================= FILTER BAR ================= */}
{/* <div className="filterWrapper">
  <div className="filterScroll">
    {filters.map((item, index) => {
      const isLast = index === filters.length - 1;

      return (
        <div key={index} className="filterCard">
          <img src={item.image} className="filterImg" />

          <h2>{item.title}</h2>
          <p>{item.desc}</p>

        
          {!isLast && <span className="divider" />}
        </div>
      );
    })}
  </div>
</div> */}


{/* done  */}
<div className="filterWrapper">
  <div className="filterScroll">
    {filters.map((item, index) => {
      const isLast = index === filters.length - 1;

      return (
        <div key={index} className="filterCard">
          <img src={item.image} className="filterImg" />

          <h2>{item.title}</h2>
          <p>{item.desc}</p>

   
          {!isLast && <span className="borderLine" />}
        </div>
      );
    })}
  </div>
</div>

      {/* ================= GRID ================= */}
      {/* <div className="mainBox">
        <div ref={gridRef} className="grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="card">
              <div className="cardInner">
                <img src={item.image} className="cardImg" />
            

          
                <div className="overlay">
                  <Search size={34} />
                  <button className="viewBtn">View More</button>
                </div>

            
                <div
                  className="bottom"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      <MapPin size={12} /> {item.location}
                    </p>
                  </div>

                  <span className="tag">
                    <Circle size={10} /> {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

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

/* ===== FULL HEIGHT BORDER ===== */
.borderLine {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #000; /* black border */
  opacity: 0.4;
}

/* REMOVE BORDER ON LAST */
.filterCard:last-child .borderLine {
  display: none;
}

/* IMAGE */
.filterImg {
  width: 100%;
  max-width: 140px;
  object-fit: contain;
}

/* TEXT */
.filterCard h2 {
  font-size: 20px;
  font-weight: 700;
}

.filterCard p {
  font-size: 14px;
  font-weight: 300;
}

/* CENTER ON DESKTOP */
@media (min-width: 1024px) {
  .filterScroll {
    justify-content: center;
    overflow-x: hidden;
  }
}

     

        /* ===== GRID ===== */
        .mainBox {
          padding: 30px 15px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .cardInner {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
        }

        .cardImg {
          width: 100%;
          transition: 0.4s;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.2)
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          transform: translateY(100%);
          transition: 0.4s;
        }

        .cardInner:hover .overlay {
          transform: translateY(0);
        }

        .cardInner:hover .cardImg {
          transform: scale(1.05);
        }

        .viewBtn {
          margin-top: 10px;
          padding: 6px 18px;
          background: #f97316;
          border: none;
          color: #fff;
          border-radius: 8px;
          cursor: pointer;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: end;
          padding: 10px;
          background-size: cover;
          color: #fff;
        }

        .bottom h3 {
          font-size: 14px;
        }

        .bottom p {
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .tag {
          font-size: 10px;
          background: #f97316;
          padding: 6px 10px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ===== RESPONSIVE ===== */
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .filterScroll {
            justify-content: center;
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkWithUs;