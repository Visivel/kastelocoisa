class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle
    }
    display(){
        if(keyIsDown(UP_ARROW)){
            this.angle -= 0.2;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.angle += 0.2;
        }

        fill("#676e6a");
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(280,240,this.width,this.height);
        pop();
        arc(this.x+68,this.y+470,50,110,PI,TWO_PI);
        noFill();
    }
}