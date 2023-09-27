import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="d-flex  justify-content-center ">
    
      <h1 style={{margin:100}}>{t("welcome")}</h1>
    </div>
  );
}

export default Home;
