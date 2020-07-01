'use strict';
// let tasks = ['掃除', '買い物', '洗濯'];

// while (true)
// {
//   // console.log('=======================\n現在持っているタスクの一覧\n=======================');

  // for (let i = 0, len = tasks.length; i<len; i++) {
  //   console.log(`${i}: ${tasks[i]}`);  }

//     for (let i = 0; i < 4; i++) {
//     console.log(`${i}: ${tasks[i]}`);  }
    

// } 

console.log('=======================\n現在持っているタスクの一覧\n=======================');
let tasks = ['掃除', '買い物', '洗濯'];
for (let i = 0, len = tasks.length; i<len; i++) {
  console.log(`${i}: ${tasks[i]}`);  
}

while (true){
  let answer = prompt(`タスクを入力してください`);
  alert(`新しいタスクを追加しました`);
  tasks.push (answer);
  console.log('=======================\n現在持っているタスクの一覧\n=======================');
  for (let i = 0, len = tasks.length; i<len; i++) {
    console.log(`${i}: ${tasks[i]}`); 
  }

}

//まず＝＝をコンソーるで出力し、配列内容もフォールーぷで主力　その後の配列出力の際に＝＝が出てこないのでこれを先に出力されるようにする


// console.log(`${i}: ${tasks[i]}`);
// console.log(tasks[i]);
//上記ではiが設定されていないのでエラーになる。コンソール出力するときにiを使わないでインデックスも添えて出力させればいい。いやでもさらに上のときには同じくiを設定していなくてもコンソールできた。今回だけできない。iって何？
