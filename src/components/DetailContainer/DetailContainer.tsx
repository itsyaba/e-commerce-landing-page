import { Button, Image } from "@mantine/core";
import minus from "./../../assets/icon-minus.svg";
import plus from "./../../assets/icon-plus.svg";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { useState , useEffect } from "react";
interface Props {
  amountOfShoes: number;
  setAmountOfShoes: React.Dispatch<React.SetStateAction<number>>;
}

const DetailContainer = ({ amountOfShoes, setAmountOfShoes }: Props) => {
  const [addedToCartNumber, setAddedToCartNumber] = useState(0);

  const Increment = () => {
    setAddedToCartNumber(addedToCartNumber + 1);
  };

  const Decrement = () => {
    setAddedToCartNumber(addedToCartNumber - 1);
  };

  const AddToCartHandeler = () => {
    if (addedToCartNumber != 0) {
      const number = addedToCartNumber;
      setAmountOfShoes(number);
    } 
    console.log(amountOfShoes);
  };

  useEffect(() => {
  if (amountOfShoes === 0) {
    setAddedToCartNumber(0);
  }
  }, [amountOfShoes])
  


  return (
    <div className="lg:pl-28 font-kumbhsans pt-10  w-full">
      <div>
        <p className="text-Orange font-bold tracking-widest">SNEAKER COMPANY</p>
        <h1 className="text-5xl font-bold py-10">
          Fall Limited Edition Sneakers
        </h1>
      </div>
      <p className="text-DarkGrayishBlue  pb-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div>
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-3xl ">$125.00</h2>
          <h3 className=" text-Orange font-bold bg-PaleOrange ml-4 px-3 py-1 ">
            50%
          </h3>
        </div>
        <h4 className="text-lg line-through font-medium text-GrayishBlue ">
          $250
        </h4>
      </div>
      <div className="flex items-center gap-1 mt-8 flex-col lg:flex-row  lg:gap-12 justify-center">
        <div className=" flex items-center gap-5 w-1/4 bg-GrayishBlue p-2">
          <Image
            src={minus}
            width={50}
            onClick={Decrement}
            className="cursor-pointer w-1/3 h-full"
          />
          <p className="font-bold">{addedToCartNumber}</p>
          <Image
            src={plus}
            width={50}
            onClick={Increment}
            className="cursor-pointer"
          />
        </div>
        <Button
          className=" bg-Orange w-full hover:bg-Orange hover:opacity-90 "
          size="lg"
          leftIcon={<ShoppingCartCheckoutOutlined />}
          onClick={AddToCartHandeler}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default DetailContainer;
