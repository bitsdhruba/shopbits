import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetail } from "../api/api";
import Spinner from "../Loader/Spinner";
import Detail from "../components/product/Detail";

const ProductDetail = () => {
  const [detail, setDetail] = useState();
  const [load, setLoad] = useState(false);

  const location = useLocation();

  const id = location.pathname.split("/").at(-1);

  const fetchDetail = async () => {
    setLoad(true);
    const { data } = await axios.get(getDetail(id));
    setDetail(data);
    setLoad(false);
  };

  useEffect(() => {
    fetchDetail();
  }, [location.pathname]);

  return (
    <div className="mt-20 max-w-[1200px] mx-auto">
      <div>{load ? <Spinner /> : <Detail detail={detail} />}</div>
    </div>
  );
};

export default ProductDetail;
