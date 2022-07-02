import { useSelector } from "react-redux";
import { TitleWrapper } from "./styles";
import { RootState } from "../../../store";
import { Modal } from "../modal";

export const Title: React.FC = () => {
  const { rol } = useSelector((state: RootState) => state.form.formUser);
  return (
    <TitleWrapper>
      <h1>Reservations</h1>
      <div className="size-components">
        <div className="input-wrapper">
        </div>
        {rol==='user'? <Modal/>:''}
      </div>
    </TitleWrapper>
  );
};
