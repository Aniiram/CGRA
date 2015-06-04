/**
 * MyClock
 * @constructor
 */
 function MyClock(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

	this.myPrism = new MyPrism(this.scene, this.slices, this.stacks);
 	this.myPrism.initBuffers();

 	this.myDisk = new MyDisk(this.scene, this.slices, this.stacks);
 	this.myDisk.initBuffers();

 	this.mySecond = new MyClockHand(this.scene, 0.8);
 	this.mySecond.setAngle(0);

 	this.myMinute = new MyClockHand(this.scene, 0.6);
 	this.myMinute.setAngle(90);

 	this.myHour = new MyClockHand(this.scene, 0.4);
 	this.myHour.setAngle(45);
 	
	this.materialD = new CGFappearance(scene);
	this.materialD.setAmbient(0.3,0.3,0.3,1);
	this.materialD.setDiffuse(0.6,0.6,0.6,1);
	this.materialD.setSpecular(1.0,1.0,1.0,1);
	this.materialD.setShininess(500);

	this.clockAppearance = new CGFappearance(scene);
	this.clockAppearance.loadTexture('../resources/images/clock.png');
	this.clockAppearance.setAmbient(1,1,1,1);
	this.clockAppearance.setDiffuse(1,1,1,1);
	this.clockAppearance.setSpecular(1.0,1.0,1.0,1);
	this.clockAppearance.setShininess(120);	

 	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
 	
 	this.materialD.apply();

	this.scene.pushMatrix();
 	this.myPrism.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
	this.clockAppearance.apply();
 	this.myDisk.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
	this.materialD.apply();
 	this.mySecond.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
	this.materialD.apply();
 	this.myMinute.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
	this.materialD.apply();
 	this.myHour.display();
 	this.scene.popMatrix();
 };
 

MyClock.prototype.update = function(currTime) {
	
		this.mySecond.setAngle(currTime *6/1000);
		this.myMinute.setAngle(currTime /10000);
		this.myHour.setAngle(currTime /96000);
};

