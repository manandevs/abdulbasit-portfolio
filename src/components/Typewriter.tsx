"use client";
import { useEffect, useState } from "react";

const texts = [
  "Welcome to my website.",
  "My name is Abdul Basit.",
  "I am a web developer.",
  "I am a web designer.",
  "I build responsive websites.",
  "I specialize in front-end development.",
  "I create user-friendly interfaces.",
  "Enjoy your stay!",
];

export const Typewriter: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[textIndex];

    if (isTyping) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex]);

  const isNameLine = texts[textIndex].includes("Abdul Basit");

  const renderTypedText = () => {
    if (isNameLine) {
      const name = "Abdul Basit";
      const indexOfName = displayText.indexOf(name);

      if (indexOfName !== -1) {
        const beforeName = displayText.slice(0, indexOfName);
        const namePart = displayText.slice(indexOfName, indexOfName + name.length);
        const afterName = displayText.slice(indexOfName + name.length);

        return (
          <>
            {beforeName}
            <span className="custom-underline">{namePart}</span>
            {afterName}
          </>
        );
      }
    }

    return displayText;
  };

  return (
    <h1 className="relative m-0 text-4xl md:text-[78px] font-bold tracking-wider leading-tight uppercase break-words text-white animate-glow">
      <span>{renderTypedText()}</span>
      <span
        className="inline-block mb-0 md:mb-2 ml-2 rounded-full animate-blink h-6 w-6 md:h-[35px] md:w-[35px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]"
      ></span>
    </h1>
  );
};
