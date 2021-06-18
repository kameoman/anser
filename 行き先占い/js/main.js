"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const results = ["大吉", "中吉", "凶", "末吉"];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    // 確率も操作ができる
    // const n = Math.random();
    // 5％の確率で大吉
    // if (n < 0.05){
    //   btn,textContent = '大吉';
      // １５％の確率
    // }　else if (n < 0.2) {
    //   btn.textContent = '小吉';
    // } else {
    //   btn.textContent = '凶';
    // }

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
$(function() {

  // button
  var btn_clone = $('.btn-clone');  // 追加ボタン
  var btn_remove = $('.btn-remove');  // 削除ボタン

  // clone
  btn_clone.click(function() {

      var text = $('.text').last();  // 最後尾にあるinput

      text
        .clone()  // クローン
        .val('')  // valueもクローンされるので削除する
        .insertAfter(text);  // inputを最後尾に追加

      if ($('.text').length >= 2) {
          $(btn_remove).show();  // inputが2つ以上あるときに削除ボタンを表示
      }

  });

  // remove
  btn_remove.click(function() {

      $('.text').last().remove();

      if ($('.text').length < 2) {
          btn_remove.hide();  // inputが2つ未満のときに削除ボタンを非表示
      }

  });
});