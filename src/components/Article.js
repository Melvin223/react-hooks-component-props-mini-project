import React from "react";

function Article({ title, date, preview, minutes }) {
  const renderReadingTime = () => {
    const readTime = Math.ceil(minutes / 5);
    const coffeeCups = "☕️".repeat(readTime);
    const bentoBoxes = "🍱".repeat(Math.ceil(readTime / 2));

    return minutes < 30 ? coffeeCups : bentoBoxes;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{renderReadingTime()} {minutes} min read</small>
    </article>
  );
}

export default Article;
