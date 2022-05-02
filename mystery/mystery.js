let bot = new RiveScript(); //new bot
let submitBttn, inputField;
let response = "";


let mysteryTitle;
let mysteryBookBackground;



function preload() {
  bot.loadFile("mystery.txt").then(loaded).catch(error);

  mysteryTitle = loadImage("mysteryTitle.png");
  mysteryBookBackground = loadImage("mysteryBookBackground.png")
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

  
  image(mysteryTitle, width/2-230, height/2-540, 480,220);
  image(mysteryBookBackground, width/2-550, height/2-410, 1090, 1090);


  fill(0,0,0);
  textSize(14);
  textFont("Georgia");
  textStyle(NORMAL);
  
  text(response, width/2+125, height/2-190, width / 3 - width / 6.5 - 20)

  
}
