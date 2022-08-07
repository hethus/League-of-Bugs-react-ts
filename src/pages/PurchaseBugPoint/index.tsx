import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";

interface PurchaseBugPointProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const PurchaseBugPoint = ({ setLogged }: PurchaseBugPointProps) => {
  return (
    <div>
      <Menu path="purchaseBugPoint" setLogged={setLogged}/>
      <div></div>
    </div>
  );
};

export default PurchaseBugPoint;