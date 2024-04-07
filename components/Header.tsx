import BurgerButton from "./BurgerButton";

const Header = () => {
  return (
    <div className="flex justify-between fixed top-0 w-full px-4 h-20 items-center bg-base-100">
      <button className="font-bold text-2xl">{"<Babak />"}</button>
      <BurgerButton />
    </div>
  );
};

export default Header;
