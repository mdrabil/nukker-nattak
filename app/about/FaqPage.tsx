"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HeadingUpdate } from "@/components/common/HeadingUpdate";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is a street play campaign?",
    answer:
      "A street play campaign is a live performance conducted in public spaces to spread awareness about social issues.",
  },
  {
    question: "How much does a street play cost?",
    answer:
      "The cost depends on location, duration, and team size. It usually starts from basic packages and can vary accordingly.",
  },
  {
    question: "Can you perform in colleges and corporate offices?",
    answer:
      "Yes, we perform in colleges, corporate offices, schools, and public events.",
  },
  {
    question: "Do you provide scripts for the performances?",
    answer:
      "Yes, we provide customized scripts based on the campaign or message requirement.",
  },
];

const FaqPage = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    if (refs.current[0]) {
      gsap.set(refs.current[0], {
        height: "auto",
      });
    }
  }, []);

  const toggle = (i: number) => {
    const current = refs.current[i];

    if (!current) return;

    if (active === i) {
      gsap.to(current, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      setActive(null);
      return;
    }

    if (active !== null && refs.current[active]) {
      gsap.to(refs.current[active], {
        height: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    gsap.set(current, {
      height: "auto",
    });

    const height = current.scrollHeight;

    gsap.fromTo(
      current,
      {
        height: 0,
      },
      {
        height,
        duration: 0.45,
        ease: "power2.inOut",
      }
    );

    setActive(i);
  };

  return (
    <section
      style={{
        width: "100%",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 0px",
        }}
      >
        <div
        //   style={{
        //     marginBottom: "40px",
        //   }}
        >
          <HeadingUpdate
            title="Our"
            color="black"
            title2={true}
            title2Text="FAQ'S"
            mobileSize="25px"
            desktopSize="30px"
          />
        </div>

        <div
          className="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "25px",
          }}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #000",
                borderRadius: "6px",
                padding: "12px",
                background: "#fff",
                height: "fit-content",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "10px",
                  padding: "5px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    textAlign: "left",
                    lineHeight: "1.5",
                  }}
                >
                  {i + 1}. {item.question}
                </span>

                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    minWidth: "20px",
                  }}
                >
                  {active === i ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => {
                  refs.current[i] = el;
                }}
                style={{
                  height: active === i ? "auto" : 0,
                  overflow: "hidden",
                  padding: "0 5px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.8",
                    paddingTop: "12px",
                    paddingBottom: "10px",
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .faq-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FaqPage;