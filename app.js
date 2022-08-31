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

//WinLose関数内で、勝ち・負け・引き分けの判定を行う

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    
    let js_hand_num = Math.floor( Math.random() * 3 );
    let js_hand = '';
    
    if(js_hand_num == 0){
        js_hand = "グー";
    }else if(js_hand_num == 1){
        js_hand = "チョキ";
    }else if(js_hand_num == 2){
        js_hand = "パー";
    }
    
    return js_hand;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

//無名関数の記述
const myfunc = function(name) {
  return "${name}さん、こんにちは!";
}
console.log(myfunc(name));

//即時関数の基本文
(function(引数) {
  //処理
}("hoge"));

//戻り値
let result = (function(param1, param2) {
  return param1 + param2;
}(1,2));
console.log(result); //3が出力される。

//countをローカル変数として扱い、即時関数とオブジェクトリテラルで作成
var counter = (function () {
	//プライベートにしたいプロパティ
	var count = 0;
  return {
	  //加算メソッド
	  increment: function () {
	    count += 1;
      console.log(count);
    }
	};
}());

counter.increment(); //1が出力される
counter.increment(); //2が出力される

console.log(counter.count); //※undefined

