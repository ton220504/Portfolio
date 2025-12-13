import { useEffect, useState } from "react";

export default function TypingLoop({
  text = "Xin chào React!",
  speed = 80,
  delay = 1500,
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, delay]);

  return <span>{displayed}</span>;
}
