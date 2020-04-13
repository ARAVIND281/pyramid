class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(200,390,800,20,options);
        World.add(world,this.body);
    this.w=800;
    this.h=20;
    }
    display(){
        var pos = this.body.position;
        fill ("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}