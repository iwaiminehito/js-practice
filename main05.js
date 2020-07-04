console.log('=======================\n現在持っているタスクの一覧\n=======================');

const tasks = [
  ['[内容]: 片付け, [ジャンル]: 掃除'],
  ['[内容]: 牛乳を買う, [ジャンル]: 買い物'],
  ['[内容]: 散歩する, [ジャンル]: 運動'],
]
for (var i = 0; i<tasks.length; i++){
  console.log(`${i}: ${tasks[i]}`);  
}

  let answerCont = prompt(`タスクを入力してください`);
  alert(`新しいタスクを追加しました`);
  let answerJun = prompt(`ジャンルを入力してください`);
  alert(`新しいジャンルを追加しました`);

  tasks.push (`[内容]:${answerCont}, ` + `[ジャンル]:${answerJun}`);

  console.log('=======================\n現在持っているタスクの一覧\n=======================');
  for (let i = 0, len = tasks.length; i<len; i++) {
    console.log(`${i}: ${tasks[i]}`); 
  }