import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { XucXacEnum } from "../../enums/xuc-xac";
import { xucXacActions } from "../../store/reducers/xucXacReducer";
import { AppDispatch, RootState } from "../../store/store";

export default function ThongTinTroChoi(): JSX.Element {
 
  const {selectedType, totalTurn, totalWin} = useSelector((state: RootState) => state.xucXacReducer)

  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="thongTinTroChoi text-center">
      <div>
        <div className="display-4">
          BẠN CHỌN: <span className="text-danger">{selectedType}</span>
        </div>
        <div className="display-4">
          BÀN THẮNG: <span className="text-success"> {totalWin}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI: <span className="text-primary"> {totalTurn}</span>
        </div>
      </div>
      <button className="btn btn-success p-2 display-4 mt-5" onClick={() => dispatch(xucXacActions.handlePlayGame())}>Play game</button>
    </div>
  );
}
