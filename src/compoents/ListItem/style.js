import styled from "styled-components";

export const ListLayout = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  height: 40px;
  background-color: white;
  border: none;
  outline: none;
  box-shadow: 2px 2px 3.5px rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  list-style: none;
`;

export const ColorBar = styled.div`
  height: 100%;
  background-color: #3dc7be;
  width: 4px;
  margin-right: 5px;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 209px;
  height: 90%;
  padding-left: 10px;
  font-weight: 500;
  font-family: Microsoft JhengHei;
`;

export const ButtonClose = styled.button`
  color: #d81b60;
  width: 36px;
  height: 100%;
  background-color: transparent;
  border: none;
  font-family: Microsoft JhengHei;
  font-weight: 700;
  outline: none;
`;
