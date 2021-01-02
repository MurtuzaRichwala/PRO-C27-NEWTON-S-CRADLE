class Bob {

    constructor(x,y){
        var option = {
            isStatic: false,
            restitution:0,
            friction:0,
            density:7.8,
        }
        this.body = Bodies.circle(x,y,25,option);
        World.add(world,this.body);

        
    }
display(){
    Push()
    ellipsMode(RADIOUS);
    fill(245,0,255);
    ellips(this.body.position.x,this.body.position.y,25,25);
    Pop();
}
}