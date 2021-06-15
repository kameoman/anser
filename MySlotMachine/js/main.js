"user strict";

{
  class Panel {
    // HTMLのmain要素をjsで全て書くことをしている
    // 初期化する
    constructor() {
      // HTMLのmainに有ったsection要素をここで作っている
      const section = document.createElement("section");
      section.classList.add("panel");

      // HTMLのmainに有ったimg要素をここで作っている
      this.img = document.createElement("img");
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      // HTMLのmainに有ったdiv要素をここで作っている
      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop");
      // クリックしたら止まるを定義
      // クリックしたらタイムアウトが作動
      this.stop.addEventListener("click", () => {
        clearTimeout(this.timeoutId);
        // クリックするたびにパネルが減るという意味
        panelsLeft--;

        if(panelsLeft === 0){
          checkResult();
        }
      });

      // sectionの子要素として追加していく
      section.appendChild(this.img);
      section.appendChild(this.stop);

      // main要素に追加する
      const main = document.querySelector("main");
      main.appendChild(section);
    }

    getRandomImage() {
      const images = ["img/seven.png", "img/bell.png", "img/cherry.png"];
      return images[Math.floor(Math.random() * images.length)];
    }
    spin() {
      this.img.src = this.getRandomImage();
      // 時間ごとに区切ってランダムに実施するように書く（回るように見える）50ミリ秒ごとに繰り返す
      // 時間が短いほど早く切り替わる
      // クリックされてtimeoutIdが作動すると止まるようになる
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }
  }


    isUnmatched(p1, p2) {
      // if (this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
      //   return true;
      // } else {
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

  function checkResult (){
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
  }
  // インスタンスを設定することで上で作った方に色々入れることが出来る
  // 上記のPanelクラスを以下で追加する
  const panels = [new Panel(), new Panel(), new Panel()];

  // パネルが三枚あることを定義
  let panelsLeft = 3;

  // スピンの動きを作っていく
  const spin = document.getElementById("spin");
  // クリックした場合のアクションを定義する
  spin.addEventListener("click", () => {
    // panelsをeachで回す
    panels.forEach((panel) => {
      // パネルのスピンという定義を行う
      panel.spin();
    });
  });
}
