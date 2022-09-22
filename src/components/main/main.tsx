import React from "react";

import "./main.module.css";

interface MainPageProps {
  extraClass?: string;
}

export const MainPage: React.FC<MainPageProps> = ({ extraClass = "" }) => {
  return (
    <main>
      <iframe height="460" width="650" src="https://ssltvc.investing.com/?pair_ID=1031678&height=460&width=650&interval=week&plotStyle=area&domain_ID=7&lang_ID=7&timezone_ID=17"></iframe>

      <iframe height="460" width="650" src="https://ssltvc.investing.com/?pair_ID=1112836&height=460&width=650&interval=week&plotStyle=area&domain_ID=7&lang_ID=7&timezone_ID=17"></iframe>
      
      <iframe height="460" width="650" src="https://ssltvc.investing.com/?pair_ID=993171&height=460&width=650&interval=week&plotStyle=area&domain_ID=7&lang_ID=7&timezone_ID=17"></iframe>

      <iframe height="460" width="650" src="https://ssltvc.investing.com/?pair_ID=1691&height=460&width=650&interval=week&plotStyle=area&domain_ID=7&lang_ID=7&timezone_ID=17"></iframe>
    </main>
  );
};
