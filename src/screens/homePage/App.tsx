import React, {useState} from "react";
import { useAppSelector } from "../../store/hooks";
import { SortedList } from "./SortedList";
import { ProductTableStyled } from "../../styles/ProductTableStyled";
import { ButtonStyled } from "../../styles/Button.styled";
import { Container } from "../../styles/Container.styled";
import {Wrapper} from "../../styles/Wrapper.styled";
import {InputStyled} from "../../kit/InputStyled";
import {TopPanel} from "./HomePage.styled";

export const App: React.FC = () => {

  const products = useAppSelector((state) => state.products.list);

  const sortedUp = [...products].sort(
    (a, b) => Number(b.price) - Number(a.price)
  );

  const [sort, setSort] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const onChangeSearchValue = (event:any) => {
    setSearchValue(event.target.value);
  }

  const handleSort = () => {
    setSort((prevSort) => !prevSort);
  };

  return (

    <div className="App">

      <Container>

        <Wrapper>

          <TopPanel>
            <InputStyled placeholder="Filter by product name..." value={searchValue} onChange={onChangeSearchValue}></InputStyled>
            <ButtonStyled margin="8px 0px" onClick={handleSort}>
              Sort by price
            </ButtonStyled>
          </TopPanel>

          <ProductTableStyled>
            <thead>
              <tr>
                <th>#</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>

            {!sort && <SortedList products={products} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue}  />}
            {sort && <SortedList products={sortedUp} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} />}
          </ProductTableStyled>

        </Wrapper>
      </Container>
    </div>
  );
};
