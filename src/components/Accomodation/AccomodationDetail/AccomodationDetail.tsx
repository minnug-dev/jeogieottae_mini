import AccomodationInfo from "../AccomodationInfo";
import AccomodationRoomList from "../AccomodationRoomList";
import Container from "@/components/Container";
import { AccomodationDetailProps } from "./AccomodationDetail.types";

const AccomodationDetail = ({ accomodationDetail, accomodationRoomItems }: AccomodationDetailProps) => {
  return (
    <Container>
      <AccomodationInfo {...accomodationDetail} />
      <AccomodationRoomList accomodationRoomItems={accomodationRoomItems} />
    </Container>
  );
};

export default AccomodationDetail;
