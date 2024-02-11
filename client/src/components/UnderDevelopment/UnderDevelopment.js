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
      kr: "여러분을 만나기 위해 마지막 점검 중이에요! 곧 멋진 모습으로 인사드릴게요!",
      en: "Hey, you caught us during our launching process… Stay tuned!",
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
