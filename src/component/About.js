import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center ">
     <h1 style={{margin:90}}>{t("About-us")}</h1>
      <h5 style={{margin:100}}>{t("description")}</h5>
    </div>
  );
}

export default About;
