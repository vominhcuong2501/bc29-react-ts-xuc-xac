import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { XucXacEnum } from "../../enums/xuc-xac";

interface XucXacState {
  selectedType: XucXacEnum | undefined;
  totalWin: number;
  totalTurn: number;
  diceList: string[];
}

const INITIAL_STATE: XucXacState = {
  // ràng buộc kiểu dữ liệu
  selectedType: undefined,
  totalWin: 0,
  totalTurn: 0,
  diceList: ["./images/1.png", "./images/2.png", "./images/3.png"],
};
// const INITIAL_STATE = {} as XucXacState; => ép kiểu

const xucXacSlice = createSlice({
  name: "xucXac", // nên là duy nhất
  initialState: INITIAL_STATE,
  reducers: {
    handleSelectedType(state: XucXacState, action: PayloadAction<XucXacEnum>) {
      state.selectedType = action.payload;
    },
    handlePlayGame(state: XucXacState) {
      const data = [...state.diceList];
      let totalPoint: number = 0;

      state.diceList.forEach((ele: string, index: number) => {
        // Math.random() => chạy giữa 0-1
        // Math.floor() => làm tròn xuống 5.1 = 5
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        data[index] = `./images/${randomNumber}.png`;
        totalPoint += randomNumber;
      });

      if (
        (state.selectedType === XucXacEnum.Tai && totalPoint > 10) ||
        (state.selectedType === XucXacEnum.Xiu && totalPoint <= 10)
      ) {
        state.totalWin += 1;
      }
      state.totalTurn += 1;
      state.diceList = data;
    },
  },
});

export const xucXacReducer = xucXacSlice.reducer;

export const xucXacActions = xucXacSlice.actions;