let bot = new RiveScript(); //new bot
let submitBttn, inputField;
let response = "";


let scifiTitle;
let scifiBookBackground;



function preload() {
  bot.loadFile("scifi.txt").then(loaded).catch(error);

  scifiTitle = loadImage("scifiTitle.png");
  scifiBookBackground = loadImage("scifiBookBackground.png")
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
  //background(243,236,223);
  background(252,248,242);

  
  image(scifiTitle, width/2-350, height/2-700, 700,500);
  image(scifiBookBackground, width/2-550, height/2-410, 1090, 1090);
  textSize(25);

  fill(0,0,0);
  textSize(14);
  textFont("Georgia");
  textStyle(NORMAL);
  
  text(response, width/2+125, height/2-190, width / 3 - width / 6.5 - 20)
  
  
}
