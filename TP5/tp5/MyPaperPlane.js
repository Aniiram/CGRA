/**
 * MyPaperPlane
 * @constructor
 */
 function MyPaperPlane(scene, x, y, z) {
 	CGFobject.call(this,scene);

 	this.x = x;
 	this.y = y;
 	this.z = z;
 	this.rotacao = 0;

 	this.myPlane = new MyPlane(this.scene);
 	this.myPlane.initBuffers();
 	
	this.materialD = new CGFappearance(scene);
	this.materialD.setAmbient(1,1,1,1);
	this.materialD.setDiffuse(1,1,1,1);
	this.materialD.setSpecular(1.0,1.0,1.0,1);
	this.materialD.setShininess(500);
 };

 MyPaperPlane.prototype = Object.create(CGFobject.prototype);
 MyPaperPlane.prototype.constructor = MyPaperPlane;

 MyPaperPlane.prototype.display = function() {
 	
 	this.materialD.apply();

 	this.scene.pushMatrix();
 	this.scene.translate(this.x, this.y, this.z);
 	this.scene.rotate(this.rotacao * degToRad, 0, 0, 1);
 	this.scene.rotate(-90 * degToRad, 0, 1, 0);
 	this.myPlane.display();
 	this.scene.popMatrix();

 };
 

MyPaperPlane.prototype.update = function(currTime) {
	if(this.x >= 1.2){
		this.x -= 0.2;
		this.y += 0.05;
	}else {
		if(this.y >= 1.2){
			this.x = 0.2;
			this.rotacao = 90;
			this.y -=0.2;	
		}
	}

};
