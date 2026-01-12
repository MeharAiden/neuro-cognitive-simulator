<<<<<<< HEAD
let quizData;
let screen = "0";
let btn1, btn2, resetBtn;

function preload() {
  quizData = loadJSON('data.json');
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  btn1 = new Sprite();
  btn1.color = "#FFD1DC";
  btn2 = new Sprite();
  btn2.color = "#FFD1DC";
  resetBtn = new Sprite();
  resetBtn.color = "#DDA0DD";
}

function draw() {
  background("#E0F7FA");
  let data = quizData[screen];
  if (!data) { screen = "0"; return; }

  fill(50);
  noStroke();

  if (data.isResult) {
    textSize(22);
    text(data.text, width / 2, height / 2 - 140);
    textSize(15);
    textWrap(WORD);
    // Increased text area width to 450 to prevent weird line breaks
    text(data.description, 25, height / 2 - 90, 450); 
  } else {
    // QUESTION TEXT: Set to 16 for better fit, width to 450
    textSize(16); 
    textWrap(WORD);
    text(data.text, 25, height / 2 - 100, 450);
  }

  updateUI(data);
  drawProgressBar(data);
}

function updateUI(data) {
  btn1.pos = { x: -500, y: -500 };
  btn2.pos = { x: -500, y: -500 };
  resetBtn.pos = { x: -500, y: -500 };

  if (data.isResult) {
    resetBtn.text = "Restart Simulation";
    resetBtn.w = textWidth(resetBtn.text) + 60;
    resetBtn.h = 45;
    resetBtn.pos = { x: width / 2, y: height / 2 + 110 };
    if (resetBtn.mouse.presses()) screen = "0";
  } else {
    btn1.text = data.btn1;
    btn1.w = textWidth(btn1.text) + 60; 
    btn1.h = 45;
    
    if (data.btn2) {
      btn2.text = data.btn2;
      btn2.w = textWidth(btn2.text) + 60;
      btn2.h = 45;
      let totalWidth = btn1.w + btn2.w + 20; 
      let startX = (width - totalWidth) / 2;
      btn1.x = startX + (btn1.w / 2);
      btn2.x = startX + btn1.w + 20 + (btn2.w / 2);
      btn1.y = btn2.y = height / 2 + 80;
      if (btn2.mouse.presses()) screen = data.next2;
    } else {
      btn1.pos = { x: width / 2, y: height / 2 + 80 };
    }
    if (btn1.mouse.presses()) screen = data.next1;
  }
}

function drawProgressBar(data) {
  // Update totalSteps to 16 for a perfectly symmetrical progress bar
  let totalSteps = 16; 
  let progress = data.isResult ? width : map(parseInt(screen), 0, totalSteps, 0, width);
  
  fill(240);
  rect(0, height - 20, width, 20);
  fill("#DDA0DD");
  rect(0, height - 20, progress, 20);
=======
let quizData;
let screen = "0";
let btn1, btn2, resetBtn;

function preload() {
  quizData = loadJSON('data.json');
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  btn1 = new Sprite();
  btn1.color = "#FFD1DC";
  btn2 = new Sprite();
  btn2.color = "#FFD1DC";
  resetBtn = new Sprite();
  resetBtn.color = "#DDA0DD";
}

function draw() {
  background("#E0F7FA");
  let data = quizData[screen];
  if (!data) { screen = "0"; return; }

  fill(50);
  noStroke();

  if (data.isResult) {
    textSize(22);
    text(data.text, width / 2, height / 2 - 140);
    textSize(15);
    textWrap(WORD);
    // Increased text area width to 450 to prevent weird line breaks
    text(data.description, 25, height / 2 - 90, 450); 
  } else {
    // QUESTION TEXT: Set to 16 for better fit, width to 450
    textSize(16); 
    textWrap(WORD);
    text(data.text, 25, height / 2 - 100, 450);
  }

  updateUI(data);
  drawProgressBar(data);
}

function updateUI(data) {
  btn1.pos = { x: -500, y: -500 };
  btn2.pos = { x: -500, y: -500 };
  resetBtn.pos = { x: -500, y: -500 };

  if (data.isResult) {
    resetBtn.text = "Restart Simulation";
    resetBtn.w = textWidth(resetBtn.text) + 60;
    resetBtn.h = 45;
    resetBtn.pos = { x: width / 2, y: height / 2 + 110 };
    if (resetBtn.mouse.presses()) screen = "0";
  } else {
    btn1.text = data.btn1;
    btn1.w = textWidth(btn1.text) + 60; 
    btn1.h = 45;
    
    if (data.btn2) {
      btn2.text = data.btn2;
      btn2.w = textWidth(btn2.text) + 60;
      btn2.h = 45;
      let totalWidth = btn1.w + btn2.w + 20; 
      let startX = (width - totalWidth) / 2;
      btn1.x = startX + (btn1.w / 2);
      btn2.x = startX + btn1.w + 20 + (btn2.w / 2);
      btn1.y = btn2.y = height / 2 + 80;
      if (btn2.mouse.presses()) screen = data.next2;
    } else {
      btn1.pos = { x: width / 2, y: height / 2 + 80 };
    }
    if (btn1.mouse.presses()) screen = data.next1;
  }
}

function drawProgressBar(data) {
  // Update totalSteps to 16 for a perfectly symmetrical progress bar
  let totalSteps = 16; 
  let progress = data.isResult ? width : map(parseInt(screen), 0, totalSteps, 0, width);
  
  fill(240);
  rect(0, height - 20, width, 20);
  fill("#DDA0DD");
  rect(0, height - 20, progress, 20);
>>>>>>> bde5a0b188023540c25cfad011c8edb112c8d53e
}