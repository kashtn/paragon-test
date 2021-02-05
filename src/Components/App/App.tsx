import { FC } from "react";
import { Main } from "../Main/Main";
import "./App.css";

type PropsType = {
  children?: never;
};

const App: FC<PropsType> = () => {
  return <Main />;
};

export default App;
