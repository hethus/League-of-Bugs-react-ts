import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";

interface PurchaseChampionProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const PurchaseChampion = ({ setLogged }: PurchaseChampionProps) => {
  return (
    <div>
      <Menu path="purchaseChampion" setLogged={setLogged}/>
      <div></div>
    </div>
  );
};

export default PurchaseChampion;