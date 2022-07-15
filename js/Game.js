class Game {
  constructor() {
    this.isPlaying = false
    this.getKey = false
  }



  start() {
    // form = new Form();
    // form.display();
    player = new Player();
    // playerCount = player.getCount()
    blocos = new Group()
    racao = new Group()


    var blocosPositions = [
      { x: 250, y: 750, w: 700, h: 50, image: blocoImage2, scale: 1.5 },
      { x: 1400, y: 670, w: 400, h: 50, image: blocoImage2, scale: 1 },
      { x: 750, y: 600, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 920, y: 480, w: 200, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 680, y: 330, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 420, y: 280, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 120, y: 240, w: 300, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 0, y: 120, w: 200, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 290, y: 77, w: 200, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 600, y: 100, w: 200, h: 50, image: blocoImage2, scale: 0.3 },
      
      

    ];


    var racaoPositions = [
      { x: 120, y: 190, image: racaoImg, scale: 0.8 },
      { x: 600, y: 60, image: racaoImg, scale: 0.8 },
      { x: 680, y: 290, image: racaoImg, scale: 0.8 },
    ]
    this.addSprite(blocos, blocosPositions.length, blocoImage1, 1, blocosPositions)
    this.addSprite(racao, racaoPositions.length, racaoImg, 0.8, racaoPositions)

    romeu = createSprite(400, 650)
    romeu.shapeColor = "blue"
    romeu.addImage(romeuImg)
    romeu.scale = 0.4
    

    chegada = createSprite(1400, 570)
    chegada.addImage(chegadaImg)
    chegada.scale = 0.4

    chao_de_agua = createSprite(770,730)
    chao_de_agua.addImage(chao_de_aguaImg)
    chao_de_agua.scale = 1.5

    chao_de_agua2 = createSprite(1000,730)
    chao_de_agua2.addImage(chao_de_aguaImg)
    chao_de_agua2.scale = 1.5
  }
  addSprite(spriteGroup, numberOfSprites, spriteImage, spriteScale, positions = []) {
    for (let i = 0; i < numberOfSprites; i++) {
      var x, y, w, h
      if (positions.length > 0) {
        x = positions[i].x
        y = positions[i].y
        w = positions[i].w
        h = positions[i].h
        spriteScale = positions[i].scale
        spriteImage = positions[i].image

      }

      var sprite = createSprite(x, y, w, h)
      sprite.addImage(spriteImage)
      sprite.scale = spriteScale
      spriteGroup.add(sprite)
      sprite.shapeColor = "blue"

    }

  }

  romeuMove() {
    romeu.collide(blocos)
    if (keyDown("right")) {
      romeu.position.x += 5
      romeu.mirrorX(+1)
    }
    if (keyDown("left")) {
      romeu.position.x -= 5
      romeu.mirrorX(-1)

    }
    if (keyDown("up")) {
      romeu.velocityY = -12
    }
    romeu.velocityY += 1.5

  }

  gerenciandoRacao() {
    romeu.overlap(racao, function (collector, collected) {
      player.racaoCount()

      //o sprite é coletado no grupo de colecionáveis que desencadeou
      //o evento
      collected.remove();
    });
  }
  placar() {
    imageMode(CENTER)
    image(racaoImg, 1350, 50, 50, 50)
    textAlign(CENTER, CENTER)
    textSize(30)
    text("Ração: " + player.racao, 1440, 50)
    image(vida, 1350, 100, 50, 50)
    text("Vida: " + player.life, 1440, 100)
  }
  play() {
    this.romeuMove()
    gameState = 1
    stroke("white")
    strokeWeight(2)
    fill("black")
    text("X: " + mouseX + " / Y: " + mouseY, mouseX, mouseY)
    this.gerenciandoRacao()
    this.placar()
    if (!this.isPlaying) {
      wiiSong.play()
      wiiSong.setVolume(0.7)
      this.isPlaying = true
    }


    if (romeu.isTouching(chegada)) {
      gameState = 2
      this.nextStage()
    }
    if (romeu.isTouching(chao_de_agua)) {
      this.gameOver()
      
    }
    if (romeu.isTouching(chao_de_agua2)) {
      this.gameOver()
      
    }

    drawSprites()
  }
  stage2() {
    this.restartGame()
    if (romeu.collide(chave)) {
      //chave.destroy()
      this.getKey = true
    }
    if (this.getKey && romeu.isTouching(torre)) {
      this.finalGame()
      gameState = 3
    }

    console.log(this.getKey)
    drawSprites()
  }
  restartGame() {
    romeu.position.x = 400
    romeu.position.y = 650
    blocos.destroyEach()
    racao.destroyEach()
    chegada.destroy()
    backgroundImage = loadImage("./assets/fase2.png")

    torre = createSprite(1400,440)
    torre.addImage(torreImg)
    torre.setCollider("rectangle",80,75,200,200,90)
    

    chave = createSprite(70,225)
    chave.addImage(chaveImg)
    chave.scale = 0.5
    chave.debug = true

    dim = createSprite(300,160)
    dim.addImage(dimImg)
    dim.mirrorX(-1)

    createSprite

    blocos = new Group()
    racao = new Group()


    var blocosPositions2 = [
      { x: 250, y: 750, w: 700, h: 50, image: blocoImage2, scale: 1.5 },
      { x: 1400, y: 670, w: 400, h: 50, image: blocoImage2, scale: 1 },
      { x: 700, y: 600, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 890, y: 460, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 670, y: 320, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 420, y: 280, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 300, y: 280, w: 700, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 170, y: 280, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      { x: 100, y: 280, w: 100, h: 50, image: blocoImage2, scale: 0.3 },
      
      
      { x: 510, y: 140, w: 100, h: 50, image: blocoImage2, scale: 0.3 },


    ]
    this.addSprite(blocos, blocosPositions2.length, blocoImage1, 1, blocosPositions2)
    
  }
  nextStage() {
    swal({
      //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      title: `Você chegou na Fase 2 `,
      text: "Pegue a chave e abra o portão da torre",
      imageUrl:
        "https://raw.githubusercontent.com/GabrielRodriguesDeSouza/hfghfh/main/titulo%202.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    }, function (isConfirm) {
      if (isConfirm) {
        gameState = 2
      }
    });
  }
  finalGame() {
    swal({
      //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      title: `Você terminou o jogo `,
      text: "Pegue a chave e abra o portão da torre",
      imageUrl:
        "https://raw.githubusercontent.com/GabrielRodriguesDeSouza/hfghfh/main/titulo%202.png",
      imageSize: "100x100",
      confirmButtonText: "Jogar novamente"
    }, function (isConfirm) {
      if (isConfirm) {
        window.location.reload()
      }
    });
  }

  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Mais cuidado com a água da próxima vez",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Jogar novamente"
    }, function (isConfirm) {
      if (isConfirm) {
        window.location.reload()
      }
    });
  }


}
