import React from "react";
import { XucXacEnum } from "../../enums/xuc-xac";
import XucXac from "./xuc-xac";

interface Props {
  handleSelectedType: (type: XucXacEnum) => void;
  diceList: string[];
}
export default function DanhSachXucXac(props: Props) {
  const { handleSelectedType, diceList } = props;
  return (
    <div className="row text-center mt-5">
      <div className="col-5">
        <button
          onClick={() => handleSelectedType(XucXacEnum.Tai)}
          className="btnGame"
        >
          TÀI
        </button>
      </div>
      <div className="col-2">
        {diceList.map((ele: string, index: number) => {
          return <XucXac key={index} ele={ele}/>;
        })}
      </div>
      <div className="col-5">
        <button
          onClick={() => handleSelectedType(XucXacEnum.Xiu)}
          className="btnGame"
        >
          XỈU
        </button>
      </div>
    </div>
  );
}
