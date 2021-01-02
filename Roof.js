class Roof{
    constructor(x,y,width,height){
        this.body = Bodies.rectangele(x,y,width,heigth,{isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        Push()
            recMode(CENTER);
            fill(128,128,128);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            Pop();
        S
    }
}