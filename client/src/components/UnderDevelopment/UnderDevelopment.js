import "./UnderDevelopment.css";
import Loader from "./subcomponent/Loader";
import React from "react";
import { useParams } from "react-router-dom";

const UnderDevelopment = () => {
  const text = {
    header: {
      kr: "아직 준비중입니다.",
      en: "A work in progress.",
    },

    body: {
      kr: "여러분을 만나기에는 아직 부족해 준비중에 있습니다. 멋진 모습으로 인사드리겠습니다.",
      en: "This page is not quite ready - hold tight, it will be much nicer next time you visit.",
    },
  };
  const { lang } = useParams();

  return (
    <div className="flex container center gradient">
      <div className="flex header">
        <Loader />
        <h1>{text["header"][lang]}</h1>
      </div>
      <p>{text["body"][lang]}</p>
    </div>
  );
};
export default UnderDevelopment;
