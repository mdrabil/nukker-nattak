"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  const quickLinks = [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Join Our Team",
      link: "/career",
    },
    {
      title: "Inquiry",
      link: "/inquiry",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  const services = [
    "Government Campaigns",
    "Corporate Awareness",
    "CSR & College Activations",
    "Election Awareness",
    "And Many More...",
  ];

  const socials = [
    {
      icon: <TiSocialFacebook size={18} />,
      link: "#",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      link: "#",
    },
    {
      icon: <FaPlay size={18} />,
      link: "#",
    },
    {
      icon: <IoIosPause size={18} />,
      link: "#",
    },
  ];

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundImage: "url('/images/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
      className="website-container main-padding-top"
        style={{
          position: "relative",
          zIndex: 10,
        //   width: "100%",
        //   maxWidth: "1400px",
        //   marginInline: "auto",
        //   paddingTop: "60px",
        //   paddingBottom: "60px",
        //   paddingLeft: "24px",
        //   paddingRight: "24px",
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
            paddingBottom: "10px",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={180}
              height={80}
              style={{
                objectFit: "contain",
                height: "auto",
              }}
            />

            <p
              style={{
                color: "white",
                fontSize: "14px",
                lineHeight: "30px",
                maxWidth: "450px",
              }}
            >
              India's #1 Street Play Agency for Awareness Campaigns,
              Brand Activations, Corporate Promotions & Social
              Awareness Programs.
            </p>

            {/* CONTACT */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* PHONE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexShrink: 0,
                  }}
                >
                  <Phone
                    size={18}
                    style={{
                      color: "#EB631D",
                    }}
                  />
                </div>

                <span
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                  }}
                >
                  +91 98765 43210
                </span>
              </div>

              {/* EMAIL */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexShrink: 0,
                  }}
                >
                  <Mail
                    size={18}
                    style={{
                      color: "#EB631D",
                    }}
                  />
                </div>

                <span
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                    wordBreak: "break-all",
                  }}
                >
                  info@nukkadnatak.com
                </span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "28px",
              }}
            >
              Quick Links
            </h2>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      width: "fit-content",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const target =
                        e.currentTarget as HTMLElement;

                      target.style.color = "#EB631D";

                      const line = target.querySelector(
                        ".footer-line"
                      ) as HTMLElement;

                      if (line) {
                        line.style.width = "100%";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const target =
                        e.currentTarget as HTMLElement;

                      target.style.color =
                        "white";

                      const line = target.querySelector(
                        ".footer-line"
                      ) as HTMLElement;

                      if (line) {
                        line.style.width = "0";
                      }
                    }}
                  >
                    {item.title}

                    <span
                      className="footer-line"
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "-5px",
                        width: "0",
                        height: "2px",
                        borderRadius: "999px",
                        background: "#EB631D",
                        transition: "all 0.5s ease",
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: 600,
                marginBottom: "28px",
              }}
            >
              Our Services
            </h2>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {services.map((item) => (
                <li
                  key={item}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "fit-content",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const target =
                      e.currentTarget as HTMLElement;

                    target.style.color = "#EB631D";

                    const line = target.querySelector(
                      ".service-line"
                    ) as HTMLElement;

                    if (line) {
                      line.style.width = "100%";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target =
                      e.currentTarget as HTMLElement;

                    target.style.color =
                      "white";

                    const line = target.querySelector(
                      ".service-line"
                    ) as HTMLElement;

                    if (line) {
                      line.style.width = "0";
                    }
                  }}
                >
                  {item}

                  <span
                    className="service-line"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "-5px",
                      width: "0",
                      height: "2px",
                      borderRadius: "999px",
                      background: "#EB631D",
                      transition: "all 0.5s ease",
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: 600,
                marginBottom: "28px",
              }}
            >
              Follow Us
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {socials.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  style={{
                    position: "relative",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    transition: "all 0.5s ease",
                    background:"white" ,
                    color: "#EB631D",
                    backdropFilter: "blur(10px)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const target =
                      e.currentTarget as HTMLElement;

                    target.style.transform =
                      "translateY(-5px)";
                    target.style.background = "#EB631D";
                    target.style.color = "#ffffff";
                    target.style.border =
                      "1px solid #EB631D";
                  }}
                  onMouseLeave={(e) => {
                    const target =
                      e.currentTarget as HTMLElement;

                    target.style.transform =
                      "translateY(0px)";
                    target.style.background =
                      "rgba(255,255,255,0.05)";
                    target.style.color = "#EB631D";
                    target.style.border =
                      "1px solid rgba(255,255,255,0.1)";
                  }}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          style={{
          
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingBottom:"20px"
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "white",
              lineHeight: "30px",
            }}
          >
            © 2025 VI Events (nukkadnatak.com). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}