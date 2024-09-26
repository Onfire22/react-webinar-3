import { useContext } from "react";
import { LocalesContext } from "../i18nContext/localesContext";

const useLocales = () => useContext(LocalesContext);

export default useLocales;
