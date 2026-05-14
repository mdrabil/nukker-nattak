export const HeadingUpdate = ({
  title = "About",
  color = "black",
  title2 = false,
  title2Text = "Us",

  // 👇 NEW: responsive size control
  mobileSize = "20px",
  desktopSize = "40px",
}) => {
  return (
    <div className="heading-wrapper">
      {/* LEFT ICON */}
      <div className="heading-icon">
        <img
          src="/images/heading-icon.png"
          alt="Heading Icon"
        />
      </div>

      {/* TITLE */}
      <h2
        style={{
          margin: 0,
          fontSize: `clamp(${mobileSize}, 5vw, ${desktopSize})`,
          fontWeight: 800,
          color: color,
          whiteSpace:"nowrap",
          lineHeight: 1.1,
        }}
      >
        {title}{" "}
        {title2 && (
          <span style={{ color: "#EB631D" }}>
            {title2Text}
          </span>
        )}
      </h2>

      {/* RIGHT ICON */}
      <div className="heading-icon right-icon">
        <img
          src="/images/heading-icon.png"
          alt="Heading Icon"
        />
      </div>

      <style jsx>{`
        .heading-wrapper {
          width: 100%;
          padding: 60px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }

        .heading-icon {
          width: 100%;
          flex-shrink: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heading-icon img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .right-icon {
          transform: rotate(180deg);
        }

      

      @media (max-width: 768px) {
  .heading-wrapper {
    padding: 30px 10px;
    gap: 10px;
  }

  .heading-icon {
    display: none; /* 👈 mobile pe images hide */
  }
}
      `}</style>
    </div>
  );
};