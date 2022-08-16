import React, { useState } from "react";
import { XucXacEnum } from "../../enums/xuc-xac";
import DanhSachXucXac from "./danh-sach-xuc-xac";
import "./index.css";
import ThongTinTroChoi from "./thong-tin-tro-choi";
import TieuDeGame from "./tieu-de-game";

export default function BaiTapXucXac(): JSX.Element {
  const [selectedType, setSelectedType] = useState<XucXacEnum>();
  const [totalWin, setTotalWin] = useState<number>(0);
  const [totalTurn, setTotalTurn] = useState<number>(0);
  const [diceList, setDiceList] = useState<string[]>([
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
  ]);

  const handleSelectedType = (type: XucXacEnum): void => {
    setSelectedType(type);
  };

  const handlePlayGame = (): void => {
    const data = [...diceList];
    let totalPoint: number = 0;

    // set xuc xac
    data.forEach((ele: string, index: number) => {
      // Math.random() => chạy giữa 0-1
      // Math.floor() => làm tròn xuống 5.1 = 5
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      data[index] = `./images/${randomNumber}.png`;
      // tính điểm
      totalPoint += randomNumber;
    });

    // tính tổng bàn thắng
    if (
      (selectedType === XucXacEnum.Tai && totalPoint > 10) ||
      (selectedType === XucXacEnum.Xiu && totalPoint <= 10)
    ) {
      setTotalWin(totalWin + 1);
    }
    // set lại xuc xac
    setDiceList(data);
    // tính tổng bàn chơi
    setTotalTurn(totalTurn + 1);
  };

  return (
    <div className="game">
      <TieuDeGame />
      <DanhSachXucXac
        diceList={diceList}
        handleSelectedType={handleSelectedType}
      />
      <ThongTinTroChoi
        handlePlayGame={handlePlayGame}
        selectedType={selectedType}
        totalWin={totalWin}
        totalTurn={totalTurn}
      />
    </div>
  );
}
