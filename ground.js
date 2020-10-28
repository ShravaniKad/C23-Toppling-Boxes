class ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = myBodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        myWorld.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }

    
}