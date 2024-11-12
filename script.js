const quiz1 = [
  { question: "地震が発生した際、屋内にいる場合に最初にすべきことは何ですか？", options: ["すぐに外に出る", "窓を開ける", "丈夫な机やテーブルの下に隠れる", "大声で助けを求める"], answer: 2, explanation: "地震の際、落下物やガラスから身を守るためには、まず身の安全を確保することが重要です。屋外に出るのは、揺れが収まってからにしましょう​" },
  { question: "避難時に持っていくべき最も重要なものはどれですか？", options: ["充電器", "財布", "非常食や水", "趣味の本"], answer: 2, explanation: "避難所での生活を想定して、食料や水、その他の緊急物資を持参することが必要です​" },
  { question: "火事が発生したとき、煙を吸わないようにするための正しい姿勢は？", options: ["立ったまま前進する", "座りながら移動する", "四つん這いになり、姿勢を低くして進む", "壁沿いに走る"], answer: 2, explanation: "煙は上昇するため、地面に近いほど煙の濃度が低くなります。低い姿勢で移動し、できれば濡れた布で口元を覆うのが効果的です​" },
  { question: "地震後、家の中での二次災害を防ぐためにまず確認すべきことは何ですか？", options: ["水道管が壊れていないか", "電気やガスの元栓が閉まっているか", "窓が割れていないか", "テレビが映るかどうか"], answer: 1, explanation: "地震後にガス漏れや電気のショートによる火災のリスクを減らすため、元栓を確認することが重要です​" },
  { question: "火災時、炎を消そうとする前に確認すべきことは？", options: ["水があるかどうか", "周囲に燃えやすいものがあるか", "消火器が使えるかどうか", "すぐに逃げるルートが確保されているか"], answer: 3, explanation: "火災時には、消火よりもまず自分の安全を確保し、すぐに逃げられるかを確認することが重要です​" },
  { question: "地震が起きたとき、エレベーターに乗っていた場合、どうすべきですか？", options: ["エレベーターの中で待機する", "エレベーターの非常ボタンを押して最寄りの階で降りる", "エレベーターの屋根を開けて脱出する", "エレベーターの外に助けを呼ぶ"], answer: 1, explanation: "地震時にエレベーターは停止する可能性があるため、非常ボタンを押し、できるだけ早くエレベーターから降りるのが安全です【" },
  { question: "防災グッズに含めておくべきものはどれですか？", options: ["ノートパソコン", "水と非常食", "スマートフォンの充電器だけ", "テレビ"], answer: 1, explanation: "災害時に備えて最低3日分の水と食料を準備しておくことが推奨されています。その他の生活必需品も重要です" },
  { question: "災害時に避難所で最初に行うべきことは何ですか？", options: ["自分の寝場所を確保する", "友達に連絡する", "避難所の管理者に自分の到着を報告する", "充電できる場所を探す"], answer: 2, explanation: "避難所に到着したら、まず自分の無事を報告し、名簿に登録することが大切です" },
  { question: "地震で避難する際、靴を履くべき理由は何ですか？", options: ["床が濡れているかもしれないから", "瓦礫やガラスが散乱している可能性があるから", "脚を速く動かすため", "足を温かく保つため"], answer: 1, explanation: "地震後は瓦礫やガラス片が散乱していることが多く、怪我を防ぐために靴を履いて避難することが推奨されます" },
  { question: "災害時に備えた連絡方法として最も適切なのはどれですか？", options: ["電話をかけ続ける", "メールを使う", "SNSを活用する", "災害用伝言ダイヤルを使用する"], answer: 3, explanation: "災害時は電話回線が混雑することが多いため、災害用伝言ダイヤルや伝言板などを利用して連絡するのが効果的です" },
  { question: "急避難時に車を使用して避難してはいけない理由は何ですか？", options: ["ガソリンがすぐに無くなるから", "道が渋滞する可能性が高いから", "免許が必要だから", "車内での避難は寒くなるから"], answer: 1, explanation: "緊急時には多くの人が車で避難しようとし、道路が混雑することがあります。徒歩での避難が推奨されることが多いです" },
  { question: "洪水の際、車で避難する場合、どのくらいの水位で車は流される可能性がありますか？", options: ["10 cm", "30 cm", "50 cm", "1 m"], answer: 1, explanation: "車は30cm程度の水位で浮き始め、流される危険性が高まります。洪水の際は車での避難は避けるべきです" },
  { question: "非常持ち出し袋に入れておくべきものに含まれないものはどれですか？", options: ["予備の電池", "身分証明書", "高価な装飾品", "ラジオ"], answer: 2, explanation: "非常時に必要なのは生活に役立つ実用品です。装飾品は持ち出す必要はありません" },
  { question: "台風の接近時に行うべき対策はどれですか？", options: ["家の中にいる", "窓を開けて風通しを良くする", "外に出て状況を確認する", "家の周りの物を固定する"], answer: 3, explanation: "台風の強風で飛ばされる物を防ぐために、家の周りの物を固定することが重要です。" },
  { question: " 災害時に避難する際、ドアや窓を閉めておくべき理由は何ですか？", options: ["泥棒の侵入を防ぐため", "建物の破損を防ぐため", "火災が広がるのを防ぐため", "大風を防ぐため"], answer: 2, explanation: "火災が発生した際、ドアや窓を閉めることで火の回りを遅らせ、火災の拡大を防ぐ効果があります。" },
  { question: "避難所での生活が長期化した場合、最も重要なのはどれですか？", options: ["他の人との交流", "身体の清潔を保つこと", "睡眠時間の確保", "常にニュースを確認すること"], answer: 1, explanation: "長期の避難生活では、清潔を保つことが感染症の予防に役立ちます。特に集団生活では衛生管理が重要です。" },
  { question: "火山噴火時に避難する際、特に避けるべき場所はどこですか？", options: ["山の中腹", "川の近く", "トンネル", "開けた平地"], answer: 1, explanation: "火山噴火時は、溶岩流や火山灰による土石流が川に沿って流れる可能性があるため、川の近くは避けるべきです。" },
  { question: "地震が発生した際、車を運転していた場合、最も適切な行動は何ですか？", options: ["そのまま運転を続ける", "道の真ん中に車を止める", "道路の左側に車を止めて、安全確認を行う", "車からすぐに降りて避難する"], answer: 2, explanation: "地震時には、車を安全な場所に停めてエンジンを止めることが推奨されます。" },
  { question: "避難時に家に戻る際の最も適切なタイミングはどれですか？", options: ["自分が安全だと感じたとき", "ニュースで避難解除が発表されたとき", "友人から連絡が来たとき", "天候が回復したとき"], answer: 1, explanation: "避難の解除は専門機関の指示に従い、ニュースや公式のアナウンスを確認することが重要です。" },
  { question: "津波警報が発表された後、海岸に近い場合、どうすべきですか？", options: ["海を見に行く", "高台に避難する", "家の中で待機する", "自転車で避難する"], answer: 1, explanation: "津波警報が発表されたら、すぐに高台や内陸部に避難することが最も安全です。" }
];


const quiz2 = [
  { question: "災害時に備蓄されている食品の特徴として、最も重要な点は何ですか？", options: ["すぐに食べられること", "長期間保存ができること", "温かく調理できること", "学生の好みに合わせること"], answer: 1, explanation: "災害時の備蓄食品は、長期保存が可能で、非常時にすぐに食べられるものが選ばれています。" },
  { question: "大学が備蓄している防災用品の中で、特に初期避難で重要なのはどれですか？", options: ["救急箱", "毛布", "防災ヘルメット", "携帯トイレ"], answer: 2, explanation: "災害発生直後には、落下物などから身を守るために、防災ヘルメットが特に重要です。" },
  { question: "安否確認メールが大学から送信される目的は何ですか？", options: ["災害状況を学生に知らせるため", "学生の安否と避難状況を把握するため", "学生の出欠確認をするため", "学生の授業進捗を確認するため"], answer: 1, explanation: "災害発生時に、大学は安否確認メールを送信し、学生の安全と所在を確認することで迅速な対応を図ります。" },
  { question: "大学の安否確認システムで、未回答者に対する次の対応として行われるのは何ですか？", options: ["メールの再送信", "大学内での探し出し", "地元警察への連絡", "授業のキャンセル"], answer: 0, explanation: "未回答の学生には、再度リマインドメールが送られ、適切な対応が行われます。" },
  { question: "災害時に大学が学生に提供する支援には、次のうちどれが含まれますか？", options: ["一時的な住居提供", "金銭的支援", "精神的なケアとサポート", "全ての支援"], answer: 3, explanation: "大学は、災害時に学生に対し、一時的な住居の提供や精神的ケアを含めた包括的な支援を行います。" },
  { question: "避難時、大学で配布される消耗品のうち、長期的な避難生活で重要なものは何ですか？", options: ["歯ブラシセット", "消毒液", "防寒用毛布", "全て"], answer: 3, explanation: "避難生活が長期化する場合、清潔を保つための衛生用品や、体温調節のための防寒用毛布が重要となります。" },
  { question: "大学の安否確認システムにおける、最初の対応として行われるのは何ですか？", options: ["大学内放送による呼びかけ", "学生に安否確認メールを送信する", "保護者への連絡", "警察に連絡する"], answer: 1, explanation: "災害時、最初の対応として学生に安否確認メールを送信し、迅速に安否状況を把握します。" },
  { question: "災害時にキャンパス内で使用が推奨されている避難経路の特徴は何ですか？", options: ["建物の屋上を通る", "地上の避難経路に沿って進む", "階段を使わずエレベーターを使用する", "近くの高い建物に避難する"], answer: 1, explanation: "災害時には地上に設置された避難経路を使用し、エレベーターは停電のリスクがあるため避ける必要があります。" },
  { question: "災害発生時、大学での避難場所への誘導はどのように行われますか？", options: ["教職員による直接誘導", "メールによる通知", "放送設備による指示", "すべて"], answer: 3, explanation: "災害発生時には、教職員が避難誘導を行うとともに、放送やメールを通じて状況を知らせます。" },
  { question: "大学が備蓄する飲料水の保管期間は、通常どれくらいですか？", options: ["1年", "3年", "5年", "10年"], answer: 2, explanation: "災害用の備蓄水は長期保存ができるものであり、通常5年程度の保存期間があります。" },
  { question: "安否確認メールの返信が遅れた場合、大学はどのように対応しますか？", options: ["繰り返しメールを送信する", "電話で確認する", "確認が取れるまで連絡し続ける", "すべて"], answer: 3, explanation: "安否確認メールに返信がない場合、大学は再通知や電話での確認を行い、学生の安全を確認します。" },
  { question: "大学の備蓄品で、長期間の避難生活に備えて最も重要なものは何ですか？", options: ["歯ブラシ", "毛布", "携帯トイレ", "全て"], answer: 3, explanation: "避難生活が長期化する際には、衛生用品や防寒用具、携帯トイレなど全ての備品が必要となります。" }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestions(quizArray, n) {
  return quizArray.sort(() => 0.5 - Math.random()).slice(0, n);
}

function displayQuestion() {
  const question = selectedQuestions[currentQuestionIndex];
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <p>${question.question}</p>
    ${question.options.map((option, i) => `
      <label>
        <input type="radio" name="question" value="${i}"> ${option}
      </label>
    `).join('')}
  `;
  updateProgress();
}

function handleAnswer() {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (!selectedOption) {
    alert("選択肢を選んでください");
    return;
  }

  const selectedAnswerIndex = parseInt(selectedOption.value);
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  document.querySelectorAll('label').forEach((label, index) => {
    if (index === currentQuestion.answer) label.classList.add("correct");
    if (index === selectedAnswerIndex && index !== currentQuestion.answer) label.classList.add("incorrect");
  });

  const selectedAnswerContainer = document.getElementById("selected-answer");
  selectedAnswerContainer.innerHTML = `
    <p>あなたの答え: ${currentQuestion.options[selectedAnswerIndex]}</p>
    <p>正解: ${currentQuestion.options[currentQuestion.answer]}</p>
  `;
  document.getElementById("explanation").innerText = currentQuestion.explanation;

  if (selectedAnswerIndex === currentQuestion.answer) score++;

  // 最後の問題かどうかを確認
  if (currentQuestionIndex === selectedQuestions.length - 1) {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.innerText = "結果を見る";  // ボタンのテキストを変更
    nextBtn.onclick = showResult;      // 結果表示画面へ遷移
  } 

  setTimeout(() => switchPage("explanation-page"), 1000);
}


function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    displayQuestion();
    switchPage("question-page");
  } else {
    showResult();
  }
}

function showResult() {
  const totalScore = Math.round((score / selectedQuestions.length) * 100);
  const comment = totalScore >= 80 ? "素晴らしい結果です！" : totalScore >= 60 ? "まあまあの結果です！" : "もっと頑張りましょう！";

  document.getElementById("result").innerText = `あなたのスコア: ${totalScore}点`;
  document.getElementById("comment").innerText = comment;
 // スコア共有テキストをURLエンコード
 const encodedScore = encodeURIComponent(`私のスコア: ${totalScore}点 - ${comment}`);
 const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedScore}`;
 const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${encodedScore}`;

 // 「スコアをシェアする」ボタンのクリックイベント
 const shareButton = document.getElementById("share-btn");
 shareButton.onclick = () => {
   document.getElementById("sns-buttons").style.display = "block"; // SNSボタンを表示
 };

 // 各SNSボタンのクリックイベント
 document.getElementById("twitter-share").onclick = () => {
   window.open(twitterUrl, "_blank");
 };
 document.getElementById("facebook-share").onclick = () => {
   window.open(facebookUrl, "_blank");
 }; 

  switchPage("result-page");
}

function updateProgress() {
  const progress = document.getElementById("progress");
  const progressPercent = Math.round(((currentQuestionIndex + 1) / selectedQuestions.length) * 100);
  progress.style.width = `${progressPercent}%`;
  document.getElementById("progress-text").innerText = `${progressPercent}%`;
}

function switchPage(pageId) {
  document.querySelectorAll(".container").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

window.onload = () => {
  selectedQuestions = [...getRandomQuestions(quiz1, 3), ...getRandomQuestions(quiz2, 2)];
  displayQuestion();
};

document.getElementById("answer-btn").addEventListener("click", handleAnswer);
document.getElementById("next-btn").addEventListener("click", handleNextQuestion);



