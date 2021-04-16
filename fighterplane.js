class fighterplane{
    constructor(x,y,width,height){
        var options={
            friction:0.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        this.image=loadImage("fighter plane.png")
        World.add(world,this.body)
    }

   
    display(){
        var pos=this.body.position

        push()
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}

