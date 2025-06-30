import React from "react";
import NameSearch from "./NameSearch";
import DailyName from "./DailyName";
import ViewCounter from "./ViewCounter";
import SortBar from "./SortBar";
import FavoritesBar from "./FavoritesBar";
import CelebrityBirthdays from "./CelebrityBirthdays";
import FunFact from "./FunFact";
import Quiz from "./Quiz";
import NameSuggestion from "./NameSuggestion";
import SubmissionForm from "./SubmissionForm";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const MainPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <header className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-xl text-blue-700 dark:text-blue-200">Azərbaycan Adlarının Mənası</span>
      </div>
      <div className="flex gap-2 items-center">
        <LanguageToggle />
        <ThemeToggle />
        <FavoritesBar />
      </div>
    </header>

    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <DailyName />
          <SortBar />
          <NameSearch />
        </section>
        <aside className="space-y-4">
          <ViewCounter />
          <CelebrityBirthdays />
          <FunFact />
          <Quiz />
          <NameSuggestion />
          <SubmissionForm />
        </aside>
      </div>
    </main>
  </div>
);

export default MainPage;