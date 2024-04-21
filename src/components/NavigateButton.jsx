import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();

  return (
    <div className="px-2 sm:hidden">
      <button
        onClick={() => navigate(-1)}
        className="w-20 p-1 rounded-full shadow-md shadow-[#BE95C4] border-2 border-[#9F86C0] flex items-center justify-center"
      >
        <GrPrevious className="text-xl" />
      </button>
    </div>
  );
};

export default NavigateButton;
