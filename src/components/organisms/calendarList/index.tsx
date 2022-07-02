import { Calendar, Title } from "../../molecules";
import { Footer } from "../../molecules/footer";
import { Header } from "../../molecules/header";
import { Reservations } from "../../molecules/reservationList";
import { CalendarWrapper } from "./styles";

export const CalendarLists = () => (
  <CalendarWrapper>
    <Header />
    <div className="body--resvert">
      <Title />
      <div className="size">
        <Calendar />
        <Reservations />
      </div>
    </div>
    <Footer />
  </CalendarWrapper>
);
