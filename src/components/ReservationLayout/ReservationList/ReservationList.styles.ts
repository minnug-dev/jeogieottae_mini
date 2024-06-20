import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const ReservationHistoryList = styled.ul`
  margin-bottom: 5rem;
`;

export const ReservationHistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: 0;
  gap: 3rem;
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 1.6rem;
  box-shadow: 0 2px 16px rgb(235, 235, 235);
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 34%;
  height: 28rem;
`;

export const ImageStyled = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReservationInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  flex-basis: 0;
  padding: 2.6rem 2.6rem 2.6rem 0;
`;

export const UseCheckText = styled.span`
  width: 8rem;
  font-weight: 600;
  color: var(--color-gray-darker);
`;

export const AccomodationNameText = styled.strong`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 2.2rem;
  font-weight: 700;
`;

export const RoomNameText = styled.span`
  font-weight: 500;
  color: var(--color-gray-darker);
`;

export const CheckInOutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & > div {
    position: relative;

    &:first-child {
      padding-right: 3rem;
    }

    &:first-child::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 4rem;
      background-color: var(--color-gray);
    }
  }
  span {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-gray-dark);
  }
`;

export const DateText = styled.p`
  font-size: 1.5rem;
`;

export const LinkStyled = styled(Link)`
  margin-right: auto;
  padding: 0.8rem 3rem;
  border-radius: 0.8rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;
