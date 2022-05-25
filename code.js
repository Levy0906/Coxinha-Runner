var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a32a16f7-ae5b-4705-b0d7-50b6faaf93f6","9a2fb72b-5862-486a-83ab-64f579a9c7ec","fcd11543-c2a5-4929-8a37-00f53e877227","4973ace2-b00e-452b-a07c-307072ce1910"],"propsByKey":{"a32a16f7-ae5b-4705-b0d7-50b6faaf93f6":{"name":"lanchonete.jpeg_1","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"hRfF521Jj0UapgkLbeBvWVf7RFz0q9ou","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/a32a16f7-ae5b-4705-b0d7-50b6faaf93f6.png"},"9a2fb72b-5862-486a-83ab-64f579a9c7ec":{"name":"boca.png_1","sourceUrl":"assets/v3/animations/N_68zGe5EZpVgz24eTKYPwIVRAw4vwqhWWiEbf2JKCY/9a2fb72b-5862-486a-83ab-64f579a9c7ec.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z0MEeRMm6GDmP7lM360H.V9yce5HD0yQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/N_68zGe5EZpVgz24eTKYPwIVRAw4vwqhWWiEbf2JKCY/9a2fb72b-5862-486a-83ab-64f579a9c7ec.png"},"fcd11543-c2a5-4929-8a37-00f53e877227":{"name":"saida.png_1","sourceUrl":"assets/v3/animations/N_68zGe5EZpVgz24eTKYPwIVRAw4vwqhWWiEbf2JKCY/fcd11543-c2a5-4929-8a37-00f53e877227.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"gGAdMjT9o9fQhTzGtKfVXR7xysaphJWS","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/N_68zGe5EZpVgz24eTKYPwIVRAw4vwqhWWiEbf2JKCY/fcd11543-c2a5-4929-8a37-00f53e877227.png"},"4973ace2-b00e-452b-a07c-307072ce1910":{"name":"coxinha correndo.png_1","sourceUrl":"assets/v3/animations/N_68zGe5EZpVgz24eTKYPwIVRAw4vwqhWWiEbf2JKCY/4973ace2-b00e-452b-a07c-307072ce1910.png","frameSize":{"x":306,"y":468},"frameCount":1,"looping":true,"frameDelay":4,"version":"I9mj0RskS4jkixjKTQqF70w7thPbqb9C","loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":468},"rootRelativePath":"assets/v3/animations/N_68zGe5EZpVgz24eTKYPwIVRAw4vwqhWWiEbf2JKCY/4973ace2-b00e-452b-a07c-307072ce1910.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200, 200);
 fundo.setAnimation("lanchonete.jpeg_1");
  fundo.scale = 2.5

var coxinha = createSprite(35,300);
 coxinha.setAnimation("coxinha correndo.png_1");
  coxinha.scale = 0.2

var boca1 = createSprite(120, 40);
  boca1.setAnimation("boca.png_1");
   boca1.scale = 0.2
     boca1.velocityY = +5  
var boca2 = createSprite(285, 365);
  boca2.setAnimation("boca.png_1");
   boca2.scale = 0.2
    boca2.velocityY = -5
var saida = createSprite(386, 188);
  saida.setAnimation("saida.png_1");
   saida.scale = 0.2



function draw() {
 background("black")
 createEdgeSprites();
 drawSprites()
 
if (boca1.isTouching(coxinha)) {
 coxinha.destroy()
  textSize(25);
  text("Você Perdeu  ", 200, 200);
  playSound("assets/category_explosion/8bit_explosion.mp3")
  boca1.velocityY = 0
  boca2.velocityY = 0
  
}
 
 if (boca2.isTouching(coxinha)) {
 coxinha.destroy()
 textSize(25);
  text("Você Perdeu  ", 200, 200);
  playSound("assets/category_explosion/8bit_explosion.mp3")
  boca1.velocityY = 0
  boca2.velocityY = 0
 }
 
if (keyDown(RIGHT_ARROW)) {
coxinha.velocityX = +3
coxinha.velocityY = 0
    
}

if (keyDown(LEFT_ARROW)) {
coxinha.velocityX = -3
coxinha.velocityY = 0

}

if (keyDown(UP_ARROW)) {
coxinha.velocityX = 0
coxinha.velocityY = -2
    
}

if (keyDown(DOWN_ARROW)) {
coxinha.velocityX = 0
coxinha.velocityY = +2
        
}

boca1.bounceOff(topEdge)
boca1.bounceOff(bottomEdge)

boca2.bounceOff(topEdge)
boca2.bounceOff(bottomEdge)

if(saida.isTouching(coxinha)){
coxinha.destroy()  
  textSize(12);
  text("WIN, VOCE GANHOU", 200, 200);
  playSound("assets/category_achievements/melodic_win_10.mp3")
  boca1.velocityY = 0
  boca2.velocityY = 0
}
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
