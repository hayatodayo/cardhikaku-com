import { useState } from "react";

function App() {
  const [game, setGame] = useState("ポケカ");
  const [cardName, setCardName] = useState("");
  const [result, setResult] = useState("");

  const cardData = {
    ポケカ: {
      ピカチュウ: "500円",
      リザードン: "12000円",
      ミュウ: "3000円",
      イーブイ: "800円",
    },
    ワンピース: {
      ルフィ: "1000円",
      ゾロ: "1500円",
      ナミ: "900円",
    },
    ドラゴンボール: {
      孫悟空: "2000円",
      ベジータ: "1800円",
      フリーザ: "1200円",
    },
  };

  const searchCard = () => {
    const price = cardData[game][cardName];

    if (price) {
      setResult(`種類: ${game} / カード名: ${cardName} / 価格: ${price}`);
    } else {
      setResult("そのカードは見つかりませんでした");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>カード比較.com</h1>

      <select value={game} onChange={(e) => setGame(e.target.value)}>
        <option value="ポケカ">ポケカ</option>
        <option value="ワンピース">ワンピース</option>
        <option value="ドラゴンボール">ドラゴンボール</option>
      </select>

      <input
        type="text"
        placeholder="カード名を入力"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={searchCard}>検索</button>

      <hr />

      <h2>検索結果</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;