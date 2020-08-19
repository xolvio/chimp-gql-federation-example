import React from "react";
import MobileMenu from "../components/MobileMenu";
import Message from "../components/Message";
import Page from "./Page";

function NotFoundPage() {
  return (
    <Page className="not-found">
      <nav>
        <MobileMenu toggleMenu={() => {}} />
      </nav>
      <div className="content-scrollable">
        <Message title="Page not found" />
      </div>
    </Page>
  );
}

export default NotFoundPage;
