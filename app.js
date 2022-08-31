//関数

//基本構文
function 関数名() {
  処理内容
}

//引数と戻り値
function 関数名(引数) {
  ...
}

function 関数名(引数1,引数2) {
  ...
}

function 関数名(引数) {
  処理内容
  return 戻り値;
}

//関数の記述　例
function addString(strA) {  //addString関数を記述し、引数としてstrAを定義
  let addStr = "Hello" + strA; //変数名addStrに、Helloの文字列と関数の引数strAに設定サれている文字列を結合
  return addStr; //結合結果の格納されたaddStrを、関数の戻り値としている。returnを記述することで、出力結果が表示される。
}

//関数の呼び出し

//メイン部分
let alertString;
alertString = addString("World");

//作成した関数を呼び出す
alert(alertString);

//作成した関数
function addString(strA) {
  let addStr= "hello" + strA;
  return addStr;
}
//アラートウィンドウにHello Worldの文字列が表示されれば、関数を正しく呼び出せている。

//入力ダイアログで値を入力する
let promptStr = prompt("何か好きな文字を入力してください。");
alert(promptStr);

//複数の関数を定義する
let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください.");
alert("あなたの選んだ手は" + user_hand + "です。");

//相手のじゃんけんの手をランダムに選択する関数を追加する
function getJshand() {
  let js_hand_num = Math.floor(Math.random() * 3); //グー・チョキ・パーがランダムに表示される
  let js_hand = '';

  if(js_hand_num == 0) {
    js_hand = "グー";
  } else if(js_hand_num == 1) {
    js_hand = "チョキ";
  } else if(js_hand_num == 2) {
    js_hand = "パー"
  }
  //ランダム生成された数値を基に条件分岐させて、グー・チョキ・パーを出し分ける。
  return js_hand; //最後に関数の戻り値として、グー・チョキ・パーの文字列を返します。
}


