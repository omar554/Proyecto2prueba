import { VscArrowLeft as ArrowL } from "react-icons/vsc";
import { VscArrowRight as ArrowR } from "react-icons/vsc";

const NavButton = ({ direction, changePage = () => {} }) => {
  direction = typeof direction !== "undefined" ? direction : "R";
  if (direction === "L") {
    return (
      <button onClick = {() => {changePage()}} >
        <ArrowL className="text-5xl p-2 h-12 w-28 text-blue-400 bg-white rounded shadow relative mx-10 hover:bg-blue-400 hover:text-white transition-all" />
      </button>
    );
  }
  return (
    <button onClick = {() => {changePage()}} >
      <ArrowR className="text-5xl p-2 h-12 w-28 text-blue-400 bg-white rounded shadow relative mx-10 hover:bg-blue-400 hover:text-white transition-all" />
    </button>
  );
};

export default NavButton;
