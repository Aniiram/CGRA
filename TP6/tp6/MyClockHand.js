/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene, tamanho) {
 	CGFobject.call(this,scene);
	
	this.tamanho = tamanho;
	this.angle = 0;

	this.myCylinder = new MyCylinder(this.scene,12,5);
 	this.myCylinder.initBuffers();
 	 	
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.display = function() {
 	
	this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.scene.rotate(-this.angle * degToRad, 0, 0, 1);
	this.scene.rotate(-90 * degToRad, 1, 0, 0);
	this.scene.scale(0.02, 0.02, this.tamanho);
 	this.myCylinder.display();
 	this.scene.popMatrix();
 };

MyClockHand.prototype.setAngle = function(v){
	this.angle = v;
};
