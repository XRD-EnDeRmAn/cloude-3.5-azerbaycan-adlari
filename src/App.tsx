import React, { Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Loader from "./components/Loader";
import MainPage from "./components/MainPage";

const App: React.FC = () => (
  <LanguageProvider>
    <FavoritesProvider>
      <Suspense fallback={<Loader />}>
        <MainPage />
      </Suspense>
    </FavoritesProvider>
  </LanguageProvider>
);

export default App;