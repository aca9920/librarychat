let bot = new RiveScript(); //new bot
let submitBttn, inputField;
let response = "";
let selfhelpTitle;
let selfhelpTitle2;
let selfhelpBookBackground;

function preload() {
  bot.loadFile("selfhelp.txt").then(loaded).catch(error);

  selfhelpTitle = loadImage("selfhelpTitle.png");
  selfhelpTitle2 = loadImage("selfhelpTitle2.png");
  selfhelpBookBackground = loadImage("selfhelpBookBackground.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  response = "Say 'hello' to start chatting with me!";

  //input field and button
  inputField = createInput();
  inputField.position(width/2.2-225, 320);

  submitBttn = createButton("SEND MESSAGE");
  submitBttn.position(width/2.2-212, 350);
  submitBttn.mousePressed(chat);

}

function chat() {
  let input = inputField.value();
  console.log(input);
  bot.reply("local-user", input).then(respond);
}
function respond(reply) {
  response = reply;
}

function loaded() {
  console.log("Chatbot ready!");
  bot.sortReplies(); //You must sort the replies before trying to fetch any!
}
function error(error) {
  console.log("There is an error.");
  console.log(error);
}

function keyPressed(){
  if (keyCode===ENTER){
    chat();
  }
}

function draw() {
  background(252,248,242);

  //image(selfhelpTitle, width/2-230, height/2-580, 450,300);
  image(selfhelpTitle2, width/2-230, height/2-580, 450,300);
  image(selfhelpBookBackground, width/2-550, height/2-410, 1090, 1090);

  fill(0,0,0);
  textSize(14);
  textFont("Georgia");
  textStyle(NORMAL);
  
  text(response, width/2+100, height/2-210, width / 3 - width / 6.5 - 20)
  

  
}
