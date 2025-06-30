import React, { useState } from "react";
import namesData from "../../public/names.json";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function getRandomNames(n: number) {
  const shuffled = [...namesData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const Quiz: React.FC = () => {
  const { lang } = useLanguage();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [quizItems, setQuizItems] = useState(() => {
    return Array.from({ length: 5 }).map(() => {
      const choices = getRandomNames(4);
      const answer = choices[Math.floor(Math.random() * 4)];
      return { choices, answer };
    });
  });
  const [selected, setSelected] = useState<number | null>(null);

  if (step >= quizItems.length)
    return (
      <div className="bg-green-50 dark:bg-green-900 rounded p-4 shadow">
        <div className="text-lg font-bold mb-2">
          {lang === "az" ? "Nəticə" : "Result"}: {score} / {quizItems.length}
        </div>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => {
            setStep(0);
            setScore(0);
            setQuizItems(
              Array.from({ length: 5 }).map(() => {
                const choices = getRandomNames(4);
                const answer = choices[Math.floor(Math.random() * 4)];
                return { choices, answer };
              })
            );
            setSelected(null);
          }}
        >
          {lang === "az" ? "Təkrar" : "Retry"}
        </button>
      </div>
    );

  const { choices, answer } = quizItems[step];

  return (
    <motion.div className="bg-purple-50 dark:bg-purple-900 rounded p-4 shadow">
      <div className="font-semibold mb-2">
        {lang === "az"
          ? `${step + 1}-ci sual: Məna hansı ada aiddir?`
          : `Q${step + 1}: Which name matches the meaning?`}
      </div>
      <div className="italic mb-2">
        {lang === "az" ? answer.meaning : answer.meaning_en}
      </div>
      <div className="flex flex-col gap-1">
        {choices.map((c, i) => (
          <button
            key={i}
            className={`px-3 py-2 rounded border
              ${selected === i
                ? c.id === answer.id
                  ? "bg-green-300"
                  : "bg-red-300"
                : "bg-white dark:bg-gray-700"}
            `}
            disabled={selected !== null}
            onClick={() => {
              setSelected(i);
              if (c.id === answer.id) setScore((sc) => sc + 1);
              setTimeout(() => {
                setSelected(null);
                setStep((s) => s + 1);
              }, 800);
            }}
          >
            {lang === "az" ? c.name : c.name_en}
          </button>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-500">
        {lang === "az" ? "Xal" : "Score"}: {score}
      </div>
    </motion.div>
  );
};
export default Quiz;