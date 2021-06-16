"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    // const results = ["大吉", "中吉", "凶", "末吉"];
    // const results = ["大吉", "大吉", "大吉", "大吉",'凶'];
    // const n = Math.floor(Math.random() * results.length);
    // // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    // 確率も操作ができる
    const n = Math.random();
    // 5％の確率で大吉
    if (n < 0.05){
      btn,textContent = '大吉';
      // １５％の確率
    }　else if (n < 0.2) {
      btn.textContent = '小吉';
    } else {
      btn.textContent = '凶';
    }

    // btn.textContent =  n;

    // switch(n){
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "中吉";
    //     break;
    //   case 2:
    //     btn.textContent = "小吉";
    //     break;
    // }
  });
}
