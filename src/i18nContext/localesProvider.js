import { LocalesContext } from "./localesContext";
import { useState } from "react"
import { ru } from "./locales/ru";
import { en } from "./locales/en";

const LocalesProvider = ({ children }) => {
  const [lang, setLang] = useState(ru);

  const handleSetLang = (lang) => {
    if (lang === 'ru') {
      setLang(ru);
    }
    if (lang === 'en') {
      setLang(en);
    }
  };

  return (
    <LocalesContext.Provider value={{ lang, handleSetLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;