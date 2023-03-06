import React from "react";
import FormSearchTickets from "../Forms/FormSearchTickets";
import About from "../Main/About";
import HowItWorks from "../Main/HowItWorks";
import FeedBack from "../Main/FeedBack";

import { nanoid } from "nanoid";

const HomePage = () => {
  return (
    <React.Fragment>
      <FormSearchTickets />
      <About key={nanoid} />

      <HowItWorks key={nanoid()} />

      <FeedBack key={nanoid()} />
    </React.Fragment>
  );
};

export default HomePage;
