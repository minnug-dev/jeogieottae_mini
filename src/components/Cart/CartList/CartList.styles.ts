import styled from "styled-components";
import { FormProvider as OriginalFormProvider } from "react-hook-form";

export const ListBox = styled(OriginalFormProvider)`
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  position: relative;
  padding: 2.6rem 2.6rem 2.6rem 0;
`;

export const Wrapper = styled.div`
  max-width: 100%;
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6rem;
  border-bottom: 0.1rem solid var(--color-gray);
  padding-left: 1rem; /* 추가된 부분 */
`;

export const InfoContainer = styled.div`
  padding: 1.5rem 0 0 0;
  justify-content: center;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  & > input {
    margin: 0;
  }
  & > div {
    margin-left: 0.8rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.8rem 3rem;
  margin-left: auto;
  margin-right: 2.6rem;
  border: 0.1rem solid var(--color-gray);
  border-radius: 0.8rem;
  color: var(--color-black);
  background-color: var(--color-white);
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-hover);
  }
`;
