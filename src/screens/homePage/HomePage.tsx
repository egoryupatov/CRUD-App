import React, {Dispatch, SetStateAction} from "react";
import {
  InnerContainerStyled,
  TableStyled,
  WrapperStyled,
  TopPanel,
} from "./HomePage.styled";
import { InputStyled } from "../../kit/InputStyled";
import { ButtonStyled } from "../../styles/Button.styled";
import { SortedList } from "./SortedList";
import { Product } from "../../store/productsSlice";
import {SelectStyled} from "./HomePage.styled";

interface HomePageProps {
  products: Product[];
  sortedUp: Product[];
  sort: boolean;
  searchValue: string;
  onChangeSearchValue: (event:any) => void;
  handleSort: () => void;
  chosenCategory: string;
  setChosenCategory: React.Dispatch<React.SetStateAction<string>>
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


          <SelectStyled>
            <option value="" disabled selected>Choose a category</option>

            <option onClick={() => props.setChosenCategory('All')} value="all">All</option>
            <option onClick={() => props.setChosenCategory('Laptops')} value="laptops">Laptops</option>
            <option onClick={() => props.setChosenCategory('Smartphones')} value="smartphones">Smartphones</option>
            <option onClick={() => props.setChosenCategory('Smartwatches')} value="smartwatches">Smartwatches</option>
            <option onClick={() => props.setChosenCategory('Tablets')} value="tablets">Tablets</option>
          </SelectStyled>

        </TopPanel>

        <TableStyled>
          {!props.sort && (
            <SortedList
              products={props.products}
              searchValue={props.searchValue}
              onChangeSearchValue={props.onChangeSearchValue}
              chosenCategory={props.chosenCategory}
            />
          )}
          {props.sort && (
            <SortedList
              products={props.sortedUp}
              searchValue={props.searchValue}
              onChangeSearchValue={props.onChangeSearchValue}
              chosenCategory={props.chosenCategory}
            />
          )}
        </TableStyled>
      </InnerContainerStyled>
    </WrapperStyled>
  );
};
