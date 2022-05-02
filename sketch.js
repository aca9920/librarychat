let font1;
let font2;
let font3;
let font4;
let library1;
let library2;
let bookcaseImage;
let actionBttn;
let autobiographyBttn;
let cookBttn;
let fantasyBttn;
let graphicBttn;
let historyBttn;
let horrorBttn;
let nonfictionBttn;
let poetryBttn;
let randomBttn;
let romanceBttn;
let sciFiBttn;
let selfhelpBttn;
let thrillerBttn;

function preload() {
  //bot.loadFile("bot.txt").then(loaded).catch(error);

  font1 = loadFont("BubblegumSans-Regular.ttf");
  font2 = loadFont("amandarae.ttf");
  font3 = loadFont("peach-sundress.ttf");
  font4 = loadFont("Lilly__.ttf");
  library1 = loadImage("librarywallpaper.jpeg");
  library2 = loadImage("librarywallpaper.jpeg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font3);
  icons();


  // autobiographyBttn = createImage("SEND MESSAGE");
  // nonfictionBttn = createImage("SEND MESSAGE");
}

function icons(){
  bookcaseImage = createImg(
    "icons/bookcaseImage.png",
    "bookcase",
    "",
    () => {
      bookcaseImage.size(850, AUTO);
    }
  );

  bookcaseImage.position(width / 2 - 425, height / 2 - 355);

  fantasyBttn = createImg(
    "icons/fantasyBookImage.png",
    "Fantasy Genre",
    "",
    () => {
      fantasyBttn.size(160, AUTO);
    }
  );
  fantasyBttn.position(width / 2 - 355, height / 2 - 315);
  fantasyBttn.mousePressed(fantasy);

  historyBttn = createImg(
    "icons/historyBookImage.png",
    "History Genre",
    "",
    () => {
      historyBttn.size(160, AUTO);
    }
  );

  historyBttn.position(width / 2 - 180, height / 2 - 315);
  historyBttn.mousePressed(history);

  mysteryBttn = createImg(
    "icons/mysteryBookImage.png",
    "Mystery Genre",
    "",
    () => {
      mysteryBttn.size(160, AUTO);
    }
  );

  mysteryBttn.position(width / 2 + 5, height / 2 - 315);
  mysteryBttn.mousePressed(mystery);

  poetryBttn = createImg(
    "icons/poetryBookImage.png",
    "Poetry Genre",
    "",
    () => {
      poetryBttn.size(160, AUTO);
    }
  );

  poetryBttn.position(width / 2 + 190, height / 2 - 315);
  poetryBttn.mousePressed(poetry);


  romanceBttn = createImg(
    "icons/romanceBookImage.png",
    "Romance Genre",
    "",
    () => {
      romanceBttn.size(160, AUTO);
    }
  );

  romanceBttn.position(width / 2 - 355, height / 2 - 130);
  romanceBttn.mousePressed(romance);

  sciFiBttn = createImg(
    "icons/scifiBookImage.png",
    "Science Fiction Genre",
    "",
    () => {
      sciFiBttn.size(160, AUTO);
    }
  );

  sciFiBttn.position(width / 2 - 180, height / 2 - 130);
  sciFiBttn.mousePressed(scifi);

  horrorBttn = createImg(
    "icons/horrorBookImage.png",
    "Horror Genre",
    "",
    () => {
      horrorBttn.size(160, AUTO);
    }
  );

  horrorBttn.position(width / 2 + 5, height / 2 - 130);
  horrorBttn.mousePressed(horror);

  cookBttn = createImg(
    "icons/cookBookImage.png",
    "Cooking Genre",
    "",
    () => {
      cookBttn.size(160, AUTO);
    }
  );

  cookBttn.position(width / 2 + 190, height / 2 - 130);
  cookBttn.mousePressed(cooking);


  selfhelpBttn = createImg(
    "icons/selfhelpBookImage.png",
    "Self Help Genre",
    "",
    () => {
      selfhelpBttn.size(160, AUTO);
    }
  );

  selfhelpBttn.position(width / 2 - 355, height / 2 + 60);
  selfhelpBttn.mousePressed(selfhelp);

  actionBttn = createImg(
    "icons/actionBookImage.png",
    "Action Genre",
    "",
    () => {
      actionBttn.size(160, AUTO);
    }
  );

  actionBttn.position(width / 2 - 180, height / 2 + 60);
  actionBttn.mousePressed(action);


  randomBttn = createImg(
    "icons/randomBookImage.png",
    "Random Genre",
    "",
    () => {
      randomBttn.size(160, AUTO);
    }
  );

  randomBttn.position(width / 2 + 190, height / 2 + 250);
  randomBttn.mousePressed(random1);

  graphicBttn = createImg(
    "icons/graphicBookImage.png",
    "Graphic Novels Genre",
    "",
    () => {
      graphicBttn.size(160, AUTO);
    }
  );
  graphicBttn.position(width / 2 + 5, height / 2 + 60);
  graphicBttn.mousePressed(graphic);

}





function draw() {
  //background(243,236,223);
  background(252, 248, 242);
  textSize(70);

  textStyle(BOLD);
  textFont(font1);

  fill(98, 103, 62);
  text("BOOKS", width / 2 - 370, height / 9 - 40);
  fill(125, 132, 100);
  text("BOOKS", width / 2 - 108, height / 9 - 40);
  fill(151, 161, 137);
  text("BOOKS", width / 2 + 160, height / 9 - 40);

  textFont(font4);
  textSize(25);

  text("Need help picking your next book?", width / 2 - 210, height / 4 - 120);

  fill(0, 0, 0);
  textSize(14);
  textFont("Georgia");
  textStyle(NORMAL);

  image(library1, 0, 0, 320, windowHeight);
  image(library2, width / 1.5 + 280, 0, 320, windowHeight);
}

function action() {
  window.location.href = "action/action.html";
}

function cooking() {
  window.location.href = "cooking/cooking.html";
}

function fantasy() {
  window.location.href = "fantasy/fantasy.html";
}

function graphic() {
  window.location.href = "graphic/graphic.html";
}

function history() {
  window.location.href = "history/history.html";
}

function horror() {
  window.location.href = "horror/horror.html";
}

function mystery() {
  window.location.href = "mystery/mystery.html";
}

function poetry() {
  window.location.href = "poetry/poetry.html";
}

function random1() {
  window.location.href = "random/random.html";
}

function romance() {
  window.location.href = "romance/romance.html";
}

function scifi() {
  window.location.href = "scifi/scifi.html";
}

function selfhelp() {
  window.location.href = "selfhelp/selfhelp.html";
}



