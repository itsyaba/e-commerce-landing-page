import ImgContainer from "../ImgContainer/ImgContainer";
import DetailContainer from "../DetailContainer/DetailContainer";

interface Props {
  amountOfShoes: number;
  setAmountOfShoes: React.Dispatch<React.SetStateAction<number>>;
}

export default function Main({ amountOfShoes, setAmountOfShoes }: Props) {
  return (
    <div className="md:w-4/6 m-auto mt-20 grid grid-cols-1 md:grid-cols-2 w-5/6 place-items-center md:place-items-start">
      <ImgContainer />
      <DetailContainer
        amountOfShoes={amountOfShoes}
        setAmountOfShoes={setAmountOfShoes}
      />
    </div>
  );
}
