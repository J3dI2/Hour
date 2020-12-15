class Hour{
    constructor(){

    }
    display(){
        angleMode(DEGREES);
        scAngle = map(sc, 0, 24, 0, 360)
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(scAngle);
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
        pop();
    }
}