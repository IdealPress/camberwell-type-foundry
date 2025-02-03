import React, { useState, useEffect, useRef } from "react";

const SplashPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const pangrams = [
    "These ligatures need fixing right away!",
    "My descenders plunge way too deep, folks!",
    "Adjust that x-height before quitting work!",
    "Your baseline grid lacks perfect flow, champ!",
    "Watch those glyphs jump between vertices!",
    "Quick check reveals wonky spacing here!",
    "Five bezier points need urgent tweaks now!",
    "My uppercase weights vary drastically!",
    "That thin stroke width barely shows up!",
    "Our font file size exceeds limits now!",
  ];

  const fontFamilies = [
    "ahrigsed-regular",
    "all-saints",
    "alluvion",
    "arabesquitic",
    "arcadia",
    "arch",
    "arches",
    "aspect-display",
    "atramentum",
    "aylesham",
    "b-gap",
    "backstage",
    "bakers-dozen",
    "belick",
    "bonatur",
    "botanica",
    "bound",
    "branch",
    "brick",
    "brutal-warm",
    "burned",
    "canal",
    "celestial-haven",
    "cheeky-mayo",
    "circleline",
    "come-into-view",
    "common-holly",
    "connect",
  ];

  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];
  const getRandomDelay = () => 0.5 + Math.random() * 2.5;

  const fitText = () => {
    if (!containerRef.current || !textRef.current || !mounted) return;

    const container = containerRef.current;
    const text = textRef.current;
    let fontSize = 10;
    text.style.fontSize = fontSize + "px";

    while (text.offsetHeight < container.offsetHeight * 0.9 && fontSize < 500) {
      fontSize += 2;
      text.style.fontSize = fontSize + "px";
    }

    while (text.offsetHeight > container.offsetHeight * 0.9 && fontSize > 10) {
      fontSize -= 2;
      text.style.fontSize = fontSize + "px";
    }
  };

  useEffect(() => {
    setMounted(true);
    const resizeObserver = new ResizeObserver(() => {
      if (mounted) {
        fitText();
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      fitText();
    }

    return () => resizeObserver.disconnect();
  }, [mounted]);

  if (!visible) return null;

  const selectedPangram = getRandomItem(pangrams);
  const words = selectedPangram.split(" ");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center cursor-pointer p-8 z-50"
      onClick={() => setVisible(false)}
    >
      <div
        ref={textRef}
        className="text-tf-purple w-full flex flex-wrap justify-center gap-8 leading-normal"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={getRandomItem(fontFamilies)}
                style={{
                  display: "inline-block",
                  letterSpacing: "0.1em",
                  opacity: 0,
                  animation: "fadeIn 0.1s ease-in forwards",
                  animationDelay: `${getRandomDelay()}s`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashPage;
