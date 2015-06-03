/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

var degToRad = Math.PI / 180.0;
var armAdd = -5;

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'Options');	

	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'Luz1');
	group.add(this.scene, 'Luz2');
	group.add(this.scene, 'Luz3');
	group.add(this.scene, 'Luz4');
	//group.add(this.scene, 'Clock');
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', -5, 5);
	this.gui.add(this.scene, 'Clock');
	this.gui.add(this.scene, 'BodyRobot', { body1: 0, body2: 1, body3: 2} );
	this.gui.add(this.scene, 'HeadRobot', { head1: 0, head2: 1});

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	this.armAdd = -5;

	switch (event.keyCode)
	{
		case (65):	// only works for capital 'A', as it is
			console.log("Key 'A' pressed");
			this.scene.angleRobot += 5;
			this.scene.distD -= 0.1;
			this.scene.distE += 0.1;

			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;

		case (68):	// only works for capital 'D', as it is
			console.log("Key 'D' pressed");
			this.scene.angleRobot -= 5;
			this.scene.distD += 0.1;
			this.scene.distE -= 0.1;

			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;
	
		case (87):	// only works for capital 'W', as it is
			console.log("Key 'W' pressed");
			this.scene.posXrobot -= 0.1*Math.sin(this.scene.angleRobot*degToRad);
			this.scene.posZrobot -= 0.1*Math.cos(this.scene.angleRobot*degToRad);
			this.scene.distD += 0.1;
			this.scene.distE += 0.1;

			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;

		case (83):	// only works for capital 'S', as it is
			console.log("Key 'S' pressed");
			this.scene.posXrobot += 0.1*Math.sin(this.scene.angleRobot*degToRad);
			this.scene.posZrobot += 0.1*Math.cos(this.scene.angleRobot*degToRad);
			this.scene.distE -= 0.1;
			this.scene.distD -= 0.1;
			
			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;
	};
	
	switch (String.fromCharCode(event.keyCode))
	{
		case ('a'):	// only works for 'a', as it is
			console.log("Key 'a' pressed");
			this.scene.angleRobot += 5;
			this.scene.distD -= 0.1;
			this.scene.distE += 0.1;

			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;

		case ('d'):	// only works for 'd', as it is
			console.log("Key 'd' pressed");
			this.scene.angleRobot -= 5;
			this.scene.distD += 0.1;
			this.scene.distE -= 0.1;
	
			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;
	
		case ('w'):	// only works for 'w', as it is
			console.log("Key 'w' pressed");
			this.scene.posXrobot -= 0.1*Math.sin(this.scene.angleRobot*degToRad);
			this.scene.posZrobot -= 0.1*Math.cos(this.scene.angleRobot*degToRad);
			this.scene.distD += 0.1;
			this.scene.distE += 0.1;

			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}

			break;

		case ('s'):	// only works for 's', as it is
			console.log("Key 's' pressed");
			this.scene.posXrobot += 0.1*Math.sin(this.scene.angleRobot*degToRad);
			this.scene.posZrobot += 0.1*Math.cos(this.scene.angleRobot*degToRad);
			this.scene.distE -= 0.1;
			this.scene.distD -= 0.1;

			if(this.scene.armOsc != 0){
				if(this.scene.armMove >= 90 || 
					this.scene.armMove <= -90){
					armAdd = 0 - armAdd;
					this.scene.armMove += armAdd;
				}
				
				this.scene.armMove += armAdd;
			}
			
			break;

		case ('H'):	// only works for 'H', as it is
			console.log("Key 'H' pressed");
			this.scene.armOsc = 0;
			break;

		case ('h'):	// only works for 'h', as it is
			console.log("Key 'h' pressed");
			this.scene.armOsc = 0;
			break;

	};
};

