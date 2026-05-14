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
  const iconRef = useIconHover();


  const [activeFilter, setActiveFilter] = useState("All");

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



  return (
    <div ref={sectionRef} className="website-container">

    <div >
        {/* <Heading title="Our Recent Campaigns"  /> */}

          <HeadingUpdate
                    title="Why Street Plays"
                    color="black"
                    title2={true}
                    title2Text="Work So Well"
                    mobileSize="20px"
                    desktopSize="50px"
                  />
      </div>

{/* done  */}
<div className="filterWrapper">
  <div className="filterScroll">
    {filters.map((item, index) => {
      const isLast = index === filters.length - 1;

      return (
        <div key={index} className="filterCard gsap-box">
          {/* <img src={item.image} className="filterImg" /> */}

          {/* <div className="filterImg">

          </div > */}

     <div className="gsap-icon">

{item.icon}
</div>

          <h2 className="gsap-hover-text">{item.title}</h2>

       <p className="gsap-text">
            {item.desc}</p>

   
          {!isLast && <span className="borderLine" />}
        </div>
      );
    })}
  </div>

 <div >
        {/* <Heading title="Our Recent Campaigns"  /> */}

          <HeadingUpdate
                    title="Be a Part of the"
                    color="black"
                    title2={true}
                    title2Text="Change"
                    mobileSize="20px"
                    desktopSize="50px"
                  />
<div style={{ marginBottom: "50px" }}>
  <h3
    style={{
      fontSize: "clamp(16px, 3vw, 30px)", // 👈 mobile 18px, desktop 30px
      fontWeight: "700",
    }}
  >
    Join hands with us to create awareness, inspire communities, and drive meaningful
    social impact through powerful street performances and engaging public campaigns.
  </h3>
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
  // margin:0px 0px 50px 0px;

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


       

        @media (min-width: 1024px) {
        

          .filterScroll {
            justify-content: center;
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Home5;