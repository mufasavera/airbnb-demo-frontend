import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "./arrow.svg";
import nextpage from "./next-page@2x.png";
import { Title } from "../Ui.js";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  align-items: center;;'
`;

const SeeAll = styled.a`
  color: #383838;
  text-decoration: none;
  font-size: 14px;
  font-style: 100;
`;

const Arrow = styled.img`
  height: 10px;
  padding-left: 8px;
`;

const NextPage = styled.img`
  position: absolute;
  top: 73px;
  right: -15px;
  z-index: 1;
  height: 40px;
`;

const Slider = styled.div`position: relative;`;

export default props => (
  <div className="container">
    <Header>
      <Title>Popular reservations around the world</Title>
      <SeeAll href="/see-all">
        See all
        <Arrow src={arrow} />
      </SeeAll>
    </Header>
    <div className="row row-nowrap">
      <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3">
        <Card
          img={require("./chumley’s.png")}
          category="SPEAKEASY"
          reviews="97"
          title="Chumley’s"
          subtitle="About $60 per person"
        />
      </div>
      <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3">
        <Card
          img={require("./hanjan.png")}
          category="KOREAN GASTROPUB"
          reviews="161"
          title="Hanjan"
          subtitle="About $50 per person"
        />
      </div>
      <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3">
        <Card
          img={require("./prime-meats.png")}
          category="GERMAN AMIRICAN"
          reviews="161"
          title="Prime Meats"
          subtitle="About $55 per person"
        />
      </div>
      <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3">
        <Slider>
          <NextPage src={nextpage} />
        </Slider>
        <Card
          img={require("./seaprice.png")}
          category="FINE SEAFOOD"
          reviews="364"
          title="Seaprice"
          subtitle="About $70 per person"
        />
      </div>
    </div>
  </div>
);
