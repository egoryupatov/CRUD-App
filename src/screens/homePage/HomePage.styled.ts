import styled from "styled-components";

export const TopPanel = styled.div`

  display:flex;
  height:60px;
  gap:10px;
  background: #f9fbfc;
  border-radius: 10px;
  border: 1px solid #f0f3f2;
  padding: 10px 15px 10px 15px;

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`

export const TableWrapper = styled.div`

  display:flex;
  justify-content: center;
  height: 100%;
  align-items: center;


`

export const InnerContainerStyled = styled.div`

  display:flex;
  flex-direction: column;
  width:30%;
  gap:15px;

`

export const TableStyled = styled.div`

  display:flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #f0f3f2;
  border-collapse: collapse;
  font-size:16px;
  width:100%;
  overflow: hidden;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  font-weight: 400;
`





  export const TableBodyStyled = styled.div`

  display:flex;
  flex-direction: column;
  
`



export const TableRowStyled = styled.div`
  display: flex;
  font-size: 15px;
  color: gray;
  align-items: center;
  padding:10px;
  border-top: 1px solid #f1f0f3;
  justify-content: space-between;

  &:nth-child(1) {
    display:flex;
    background: #f9fbfc;
    color:#888c93;
    padding:15px 10px 10px 10px;
    justify-content: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    font-weight: 500;
  }

`;

export const TableCellStyled = styled.div`

  display:flex;
  justify-content: center;
  
  &:nth-of-type(1) {
  flex:1;
  }

  &:nth-of-type(2) {
    flex:2;
    justify-content: left;
  }

  &:nth-of-type(3) {
    flex:1;
    justify-content: left;
  }

  &:nth-of-type(4) {
    flex:1;
    justify-content: left;
  }

  &:nth-of-type(5) {
    flex:1;
    justify-content: left;
  }

  &:nth-of-type(6) {
    flex:1;
    justify-content: left;
  }

`