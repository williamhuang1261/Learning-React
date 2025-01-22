import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, changeStatus] = useState(true);

  const toggle = () => {
    changeStatus(!status); //Set to the opposite
    onClick();
  };

  if (!status)
    return (
      <div>
        <CiHeart color="#ff6b81" size="100" onClick={toggle} />
      </div>
    );
  return (
    <div>
      <FaHeart color="#ff6b81" size="100" onClick={toggle} />
    </div>
  );
};

export default Like;
