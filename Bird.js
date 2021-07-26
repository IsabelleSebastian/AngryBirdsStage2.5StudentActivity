class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.traj = []; //null array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if(this.body.speed > 10 && this.body.position.x > 220){
    var position = [this.body.position.x, this.body.position.y]
    this.traj.push(position)
    }

    for(var i=0 ; i<this.traj.length ; i++){
      image(this.smokeImg, this.traj[i][0] , this.traj[i][1])
    }
    super.display();
  }
}
//traj[ [x1,y1], [x2,y2] , [x3,y3]]
//traj[0][0]
//traj[0][1]

//traj[1][0]
//traj[1][1]
//image(smokeImg ,)