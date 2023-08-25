import Logo from "./../../assets/logo.svg";
import avatar from "./../../assets/image-avatar.png";
import cart from "./../../assets/icon-cart.svg";
import imgProduct1Thumbnail from "./../../assets/image-product-1-thumbnail.jpg";
import trashCan from "./../../assets/icon-delete.svg";
import {
  Avatar,
  Burger,
  Flex,
  List,
  Drawer,
  Menu,
  Button,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState , useEffect } from "react";

interface Props {
  amountOfShoes: number;
  setAmountOfShoes: React.Dispatch<React.SetStateAction<number>>;
}

export default function Navbar({ amountOfShoes, setAmountOfShoes }: Props) {
  // const [navOpened, setNavOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
    const [disabled, setDisabled] = useState(false);
  const result = amountOfShoes * 125;

  useEffect(() => {
    
   if (amountOfShoes !== 0) {
     setDisabled(false);
   } else if (amountOfShoes === 0) {
     setDisabled(true);
   }
  }, [amountOfShoes])
  
  return (
    <nav className="overflow-hidden flex items-center justify-between w-11/12 h-32 px-8 m-auto -mt-4 border-b-2 font-kumbhsans border-PaleOrange xl:w-4/6 xl:p-0">
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        size="xs"
        className="md:hidden"
      >
        {/* Drawer content */}
        <List className="fixed flex flex-col items-start justify-start gap-10 md:hidden w-full h-full ml-10 ">
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Collections
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Men
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Women
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            About
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Contact
          </List.Item>
        </List>
      </Drawer>

      <Flex
        gap="lg"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
        className="h-full "
      >
        <Burger opened={opened} onClick={open} className="z-50 md:hidden" />
        <img src={Logo} alt="Logo" />
        <List className="hidden items-center justify-between gap-9 text-DarkGrayishBlue ml-14 h-full max-[815px]:ml-2 max-[815px]:gap-5 md:flex ">
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Collections
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Men
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Women
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            About
          </List.Item>
          <List.Item className="font-medium transition-colors border-b-4 cursor-pointer hover:border-b-Orange border-b-White ">
            Contact
          </List.Item>
        </List>
      </Flex>
      <Flex
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
        className="gap-6 "
      >
        <Menu
          shadow="xl"
          offset={35}
          width={360}
          transitionProps={{ transition: "rotate-right", duration: 150 }}
        >
          <Menu.Target>
            <Indicator
              label={amountOfShoes}
              size={16}
              color="orange"
              disabled={disabled}
            >
              <img src={cart} alt="cart" className="cursor-pointer" />
            </Indicator>
          </Menu.Target>

          <Menu.Dropdown className="h-60 w-full">
            <Menu.Label className="text-Black pl-0 text-lg border-b-2 border-b-DarkGrayishBlue p-2">
              Cart
            </Menu.Label>
            {amountOfShoes ? (
              <div className="mt-6 ml-2">
                <div className="flex items-center justify-start gap-4">
                  <img
                    src={imgProduct1Thumbnail}
                    alt="Product"
                    className="w-12 rounded-md"
                  />
                  <div className="text-DarkGrayishBlue font-light mr-4">
                    <h1 className="text-md">Fall Limited Edition Sneakers</h1>
                    <p className="text-sm">
                      $125.00 x {amountOfShoes} = ${result}
                    </p>
                  </div>
                  <img
                    src={trashCan}
                    alt="Delete"
                    className="w-6 cursor-pointer "
                    onClick={() => setAmountOfShoes(0)}
                  />
                </div>
                {/* <Menu.Item> */}
                <Button
                  className="bg-Orange mt-8 w-full hover:opacity-70 hover:bg-Orange"
                  size="lg"
                >
                  Checkout
                </Button>{" "}
                {/* </Menu.Item> */}
              </div>
            ) : (
              <h1 className="mt-24 ml-24 font-bold text-lg text-DarkGrayishBlue">
                Your cart is empty
              </h1>
            )}
          </Menu.Dropdown>
        </Menu>
        <Avatar src={avatar} size="lg" />
      </Flex>
    </nav>
  );
}
