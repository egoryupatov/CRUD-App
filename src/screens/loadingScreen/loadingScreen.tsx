import React from "react";
import { LoaderStyled, WrapperStyled } from "../homePage/HomePage.styled";
import { InnerContainerStyled } from "../homePage/HomePage.styled";

export const LoadingScreen: React.FC = () => {
  return (
    <WrapperStyled>
      <InnerContainerStyled>
        <h2>Loading...</h2>
        <LoaderStyled>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </LoaderStyled>
      </InnerContainerStyled>
    </WrapperStyled>
  );
};
