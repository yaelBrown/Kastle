import Image from "next/image";
import loadingSpinner from "../assets/images/loader.webp";

const Loading = () => {
  return (
    <div>
      <Image src={loadingSpinner} alt="" />
    </div>
  );
};

export default Loading;
