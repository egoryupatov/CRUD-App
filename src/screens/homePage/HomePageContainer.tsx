import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { HomePage } from "./HomePage";

export const HomePageContainer: React.FC = () => {
  const products = useAppSelector((state) => state.products.list);

  const sortedUp = [...products].sort(
    (a, b) => Number(b.price) - Number(a.price)
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

  console.log(chosenCategory)

  return (
    <HomePage
      products={products}
      sortedUp={sortedUp}
      sort={sort}
      searchValue={searchValue}
      onChangeSearchValue={onChangeSearchValue}
      handleSort={handleSort}
      chosenCategory={chosenCategory}
      setChosenCategory={setChosenCategory}
    />
  );
};
