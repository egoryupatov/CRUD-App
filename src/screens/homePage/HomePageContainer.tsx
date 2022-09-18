import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { HomePage } from "./HomePage";

export const HomePageContainer: React.FC = () => {

  const products = useAppSelector((state) => state.products.list);

  const sortedUpDescending = [...products].sort(
    (a, b) => Number(b.price) - Number(a.price)
  );

  const sortedUpAscending = [...products].sort(
      (a, b) => Number(a.price) - Number(b.price)
  );

  const [sort, setSort] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [chosenCategory, setChosenCategory] = useState<string>('All')

  const onChangeSearchValue = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleSort = () => {
    setSort((prevSort) => !prevSort);
  };

  return (
    <HomePage
      products={products}
      sortedUpDescending={sortedUpDescending}
      sort={sort}
      searchValue={searchValue}
      onChangeSearchValue={onChangeSearchValue}
      handleSort={handleSort}
      chosenCategory={chosenCategory}
      setChosenCategory={setChosenCategory}
    />
  );
};
