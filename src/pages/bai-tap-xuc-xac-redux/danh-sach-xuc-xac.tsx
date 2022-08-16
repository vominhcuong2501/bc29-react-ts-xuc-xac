import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { XucXacEnum } from "../../enums/xuc-xac";
import {xucXacActions } from "../../store/reducers/xucXacReducer";
import { AppDispatch, RootState } from "../../store/store";
import XucXac from "./xuc-xac";

export default function DanhSachXucXac() {
  const xucXacState = useSelector((state: RootState) => state.xucXacReducer);

  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="row text-center mt-5">
      <div className="col-5">
        <button
          onClick={() => dispatch(xucXacActions.handleSelectedType(XucXacEnum.Tai))}
          className="btnGame"
        >
          TÀI
        </button>
      </div>
      <div className="col-2">
        {xucXacState.diceList.map((ele: string, index: number) => {
          return <XucXac key={index} ele={ele}/>;
        })}
      </div>
      <div className="col-5">
        <button
          onClick={() => dispatch(xucXacActions.handleSelectedType(XucXacEnum.Xiu))}
          className="btnGame"
        >
          XỈU
        </button>
      </div>
    </div>
  );
}
