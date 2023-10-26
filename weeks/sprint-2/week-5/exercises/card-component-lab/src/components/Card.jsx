import { useState } from "react";
import "./Card.scss";

// Passing in and destructuring the props
const Card = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  emoji,
  primary,
  secondary,
  subtitle,
  subtitleColor,
  title,
  titleColor,
}) => {
  // this state variable takes care of what "version" of the card to render
  const [clicked, setClicked] = useState(false);

  // If the card is clicked, render this:
  if (clicked)
    return (
      <article className="card clickedCard">
        <section className="top" style={{ background: primary }}>
          <h1 className="title" style={{ color: titleColor }}>
            {title}
          </h1>
        </section>
        <section className="bottom" style={{ background: secondary }}>
          <span className="emoji" role="img" aria-label="emoji">
            {emoji}
          </span>
        </section>
      </article>
    );

  // If the card isn't cliked, render this:
  return (
    <article className="card">
      <section className="top" style={{ background: primary }}>
        <h1 className="title" style={{ color: titleColor }}>
          {title}
        </h1>
        <span className="emoji" role="img" aria-label="emoji">
          {emoji}
        </span>
      </section>
      <section className="bottom" style={{ background: secondary }}>
        <h2 className="subTitle" style={{ color: subtitleColor }}>
          {subtitle}
        </h2>
        <button
          style={{ background: buttonColor, color: buttonTextColor }}
          onClick={() => setClicked(!clicked)}
        >
          {buttonText}
        </button>
      </section>
    </article>
  );
};

export default Card;
