import React, { useState } from "react";
import {
  InnerContainerStyled,
  TableStyled,
  WrapperStyled,
  TopPanel,
} from "./HomePage.styled";
import { InputStyled } from "../../kit/InputStyled";
import { ButtonStyled } from "../../styles/Button.styled";
import { useAppSelector } from "../../store/hooks";
import { SortedList } from "./SortedList";
import { Product } from "../../store/productsSlice";

interface HomePageProps {
  products: Product[];
  sortedUp: Product[];
  sort: boolean;
  searchValue: string;
  onChangeSearchValue: (event:any) => void;
  handleSort: () => void;
}

export const HomePage: React.FC<HomePageProps> = (props) => {

    return (

    <WrapperStyled>
      <InnerContainerStyled>
        <TopPanel>
          <InputStyled
            placeholder="Filter by product name..."
            value={props.searchValue}
            onChange={props.onChangeSearchValue}
          ></InputStyled>
          <ButtonStyled margin="8px 0px" onClick={props.handleSort}>
            Sort by price
          </ButtonStyled>
        </TopPanel>

        <TableStyled>
          {!props.sort && (
            <SortedList
              products={props.products}
              searchValue={props.searchValue}
              onChangeSearchValue={props.onChangeSearchValue}
            />
          )}
          {props.sort && (
            <SortedList
              products={props.sortedUp}
              searchValue={props.searchValue}
              onChangeSearchValue={props.onChangeSearchValue}
            />
          )}
        </TableStyled>
      </InnerContainerStyled>
    </WrapperStyled>
  );
};
