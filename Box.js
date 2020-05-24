class Box extends BaseClass {
    constructor(x, y, width, height,color){
      super(x,y,width,height,color);
      this.visibility=255;
     
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
    
    

      console.log(this.body.speed);
  
      if(this.body.speed>6){
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        image(this.image,this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }else{
        super.display();
      }
    }
  };
