class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
      
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.Visiblity=255;
  }
  display(){
    
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      
    
    //console.log(this.body.speed);
    if(this.body.speed < 3){

      var angle = this.body.angle;
      var pos =this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("random");
  
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }
    
  }
 
 
 
 };