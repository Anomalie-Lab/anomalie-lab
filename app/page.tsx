import React from "react";
import { HeaderComponent } from "./components/header.component";
import { HomeSession } from "./sessions/home.session";
import { AboutSession } from "./sessions/about.session";
import { ProjectSession } from "./sessions/project.session";
import { IndicationsSession } from "./sessions/indications.session";
import { BuilderSession } from "./sessions/builder.session";
import { FooterComponent } from "./components/footer.component";
import { BackToTop } from "./components/back-top.componet";
import MenuComponent from "./components/menu.component";

function Page() {
  return (
    <>
      <HeaderComponent />
      <HomeSession />
      <AboutSession />
      <ProjectSession />
      <IndicationsSession />
      <BuilderSession />
      <FooterComponent />
      <BackToTop />
      <MenuComponent />
    </>
  );
}

export default Page;
