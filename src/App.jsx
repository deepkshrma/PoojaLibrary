import React from "react";
import Allroutes from "./Allroutes";
import PageWrapper from "./pages/PageWrapper";
import ScrollToTopButton from "./pages/ScrollToTopButton";

function App() {
  return (
    <PageWrapper>
      <Allroutes />
      <ScrollToTopButton />
    </PageWrapper>
    
  );
}

export default App;
