import "./UnderDevelopment.css";
import Loader from "./subcomponent/Loader";
import React from "react";
import { useParams } from "react-router-dom";

const UnderDevelopment = () => {
  const text = {
    header: {
      kr: "아직 준비 중이에요!",
      en: "Work in progress",
    },

    body: {
      kr: "여러분을 만나기 위한<br />마지막 점검 중이에요!<br />곧 멋진 모습으로 인사드릴게요!",
      en: "Hey, you caught us during our<br />launching process…<br />Stay tuned!",
    },
  };
  const { lang } = useParams();

  return (
    <div className="flex container center gradient">
      <div className="text-body">
        <div className="flex header">
          <Loader />
          <h1>{text["header"][lang]}</h1>
        </div>
        <p dangerouslySetInnerHTML={{ __html: text["body"][lang] }}></p>
      </div>
    </div>
  );
};
export default UnderDevelopment;
