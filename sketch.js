let font,
  fontsize = 64;

let img;


function preload() {
  // setup()과 draw()를 호출하기에 앞서,
  // assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
  img = loadImage("mail-01.png");
  img2 = loadImage("Black-linkedin-logo-design-on-transparent-background-PNG.png");
  img3 = loadImage("star-06.png");
  font1 = loadFont("Poppins-Bold.ttf");
  font2 = loadFont("Poppins-Light.ttf");
  font3 = loadFont("Poppins-Regular.ttf");

}


function setup() {
  
  // 캔버스 크기
  createCanvas(540, 786);
  cursor(HAND);
  image(img, 0, 0);
  image(img2,0,0);
  image(img3,0,0);

}

 function heart (x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x-size/2, y-size/2, x-size, y+size/3, x, y+size);
  bezierVertex(x+size, y+size/3, x+size/2, y-size/2, x, y);
  endShape(CLOSE);
}

function draw(){
  
    // 배경색
  background(255);  
  rectMode(CENTER);
  
  image(img,42,651,25,25);
  image(img2,42,690,24,25);
  image(img3,43,729,25,25);

  
  fill(0);
  textSize(46);
  textFont(font1);
  text("Sujeong Bae",50,80);

  fill(0);
  textSize(22);
  textFont(font2);
  text("+82-10-5521-8078",50,126);
  
  fill(0);
  textSize(22);
  textFont(font2);
  text("fnsk0066@gmail.com",80,670);
  text("/in/sujeong-bae",80,709);
  text("@b_aessu",78,748);

  // let linkedin = createA('https://www.linkedin.com/in/sujeong-bae/', '/in/sujeong-bae');
  // linkedin.position(0, 0);

    
  // 모눈종이 그리기
  //drawGrid();
  
  translate(width/2,height/2+30);
  scale(1.2);
  
  
  // 마우스 위치
  let m = createVector(mouseX,mouseY);
  
  // 중앙위치
  let c = createVector(width/2,height/2);
  
  
  // 중앙으로부터 마우스가 움직인 위치
  m.sub(c);
  
  // 움직임 크기 줄이기
  m.mult(0.1);
  
  // 눈동자를 흰자위 안쪽으로 제한주기
  m.limit(17);
  
  let eyeMove = m.copy(); // 눈동자 움직임 복사
  eyeMove.mult(0.15);
  
  let eyebrowMove = m.copy();
  eyebrowMove.mult(0.3);
  
  let noseMove  = m.copy();
  noseMove.mult(0.4);
  
  let earMove  = m.copy();
  earMove.mult(0.3);
  
  let hairMove  = m.copy();
  hairMove.mult(0.3);
  
  let mouthMove  = m.copy();
  mouthMove.mult(0.1);
  

  
  
  // 얼굴 그리기
  noStroke();
  
  // 얼굴
  fill(0);
  ellipse(0, 0, 290,300);
  
  // 귀
  push();
    translate(-earMove.x,-earMove.y);
    ellipse(-150, 0, 70, 70);
  pop();
  push();
    translate(-earMove.x,-earMove.y);
    ellipse(150, 0, 70, 70);
  pop();
  
  // 왼쪽 눈
  push();
    translate(eyeMove.x,eyeMove.y);

    if(mouseIsPressed){
      stroke(255);
      strokeWeight(3);
      line(-60-50,0,-60+50,0);
                      
    }
    else{
      fill(255);
      ellipse(-60, 0, 80, 80);
      
      // 눈동자
      push();
        translate(m.x,m.y);
        fill(0);
        ellipse(-60, 0, 50, 50);
        //heart(-60,-10,40)

      pop();
    }
  pop();
  
  
  // 오른쪽 눈
  push();
    translate(eyeMove.x,eyeMove.y);
    if(mouseIsPressed){
      stroke(255);
      strokeWeight(3);
      line(60-50,0,60+50,0);
    }
    else{
      fill(255);
      ellipse(60, 0, 80, 80);
      
      // 눈동자
      push();
        translate(m.x,m.y);
        fill(0);
        ellipse(60, 0, 50, 50);
        //heart(60,-10,40)

      pop();
    }
  pop();
  

  
  noStroke();
  
  // 눈썹
  fill(255);
  
  push();
    translate(eyebrowMove.x, eyebrowMove.y);
    rect(-55,-65,50,10,3);
  pop();
  push();
    translate(eyebrowMove.x, eyebrowMove.y);
    rect(55,-65,50,10,3);
  pop();
  
  
  // 머리카락
  push();
    translate(hairMove.x,hairMove.y);
    fill(255);
    stroke(0);
    strokeWeight(10);
    ellipse(0, -140, 150, 120);
    ellipse(-60,-130, 100, 80);
    ellipse(60, -130, 100, 80);

    noStroke();
    ellipse(0, -140, 150, 120);
    ellipse(-60,-130, 100, 80);
    ellipse(60, -130, 100, 80);
  pop();
  
  stroke(255);
  strokeWeight(5);
  
  // 코
  push();
    translate(noseMove.x, noseMove.y);
    line(-10,45,0,50);
    line(+10,45,0,50);
  pop();
  
  // 입
  fill(255);
  push();
    translate(mouthMove.x,mouthMove.y);
    ellipse(0,80,50,20);
  pop();
  

  
}