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
  sortedUpDescending: Product[];
  sortedUpAscending: Product[];
  sort: string;
  searchValue: string;
  onChangeSearchValue: (event:any) => void;
  chosenCategory: string;
  setSort: React.Dispatch<React.SetStateAction<string>>
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

          <SelectStyled>
            <option value="" disabled selected>Sort by price</option>

            <option onClick={() => props.setSort('Descending')} value="descending">Descending</option>
            <option onClick={() => props.setSort('Ascending')} value="ascending">Ascending</option>
          </SelectStyled>


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

          {props.sort === 'Default' && (
            <SortedList
              products={props.products}
              searchValue={props.searchValue}
              onChangeSearchValue={props.onChangeSearchValue}
              chosenCategory={props.chosenCategory}
            />
          )}

          {props.sort === 'Descending' && (
            <SortedList
              products={props.sortedUpDescending}
              searchValue={props.searchValue}
              onChangeSearchValue={props.onChangeSearchValue}
              chosenCategory={props.chosenCategory}
            />
          )}

          {props.sort === 'Ascending' && (
              <SortedList
                  products={props.sortedUpAscending}
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
