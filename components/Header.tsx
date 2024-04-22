import { AnimatedName } from "@/components/AnimatedName";
import BurgerButton from "@/components/BurgerButton";

const Header = () => {
  return (
    <div className="flex justify-between fixed top-0 w-full px-4 h-20 items-center bg-base-100">
      <AnimatedName />
      <BurgerButton />
    </div>
  );
};

export default Header;
