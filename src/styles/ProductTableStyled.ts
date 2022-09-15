import styled from "styled-components";

export const ProductTableStyled = styled.table`
  
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  font-size:16px;
  table-layout: auto;

  th:nth-of-type(1) {
    width:5%;
  }

  th:nth-of-type(2) {
    width:30%;
  }

  th:nth-of-type(3) {
    width:10%;
  }

  th:nth-of-type(4) {
    width:10%;
  }
  
  th:nth-of-type(5) {
    width:10%;
  }

  th:nth-of-type(6) {
    width:10%;
  }
  
  td, th {
    
    text-align: left;
    padding: 5px;
  }
  
  
 thead {
   
   background: #36304a;
   
   tr {
     height: 70px;
     color:white;

   }
   
   th:first-child {
       padding-left: 30px;
     }

   th:last-child {
     padding-left: 40px;
   }
     
}

  tbody {

    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    
    tr {
      height: 40px;
      font-size: 15px;
      color: gray;
      line-height: 1.2;
      font-weight: unset;
    }
    

    tr:nth-child(even) {
      background: #e9e9e9; 
    }
    

    td:first-child {
      padding-left: 30px;
    }

  }
`





