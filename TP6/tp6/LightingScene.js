var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();

	this.enableTextures(true);

	this.Luz1=true;
	this.Luz2=true;
	this.Luz3=true;
	this.Luz4=true;
	this.speed=3;
	this.Clock=true;
	this.BodyRobot = 0;
	this.HeadRobot = 0;

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall1 = new Plane(this);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS, -0.25, 1.25, 0, 1);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS, 0, 1, 0, 1);
	this.prism = new MyPrism(this, 8, 20);
	this.cylinder = new MyCylinder(this, 8, 20);
	this.lamp = new MyLamp(this, 8, 20);
	this.floor = new MyQuad(this, 0, 10, 0, 20);
	this.wall = new MyQuad(this,0,1,0,1);
	this.clock = new MyClock(this, 12, 1);
	this.paperPlane = new MyPaperPlane(this,11, 3.95, 8);
	this.robot = new MyRobot(this);
	this.buraco = new MyHole(this);
	
	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.1,0.1,0.1,1);
	this.materialA.setSpecular(0,0.2,0.8,1);
	this.materialA.setShininess(1);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.materialC = new CGFappearance(this);
	this.materialC.setAmbient(0.8705,0.7215,0.5294,1);
	this.materialC.setDiffuse(0.8705,0.7215,0.5294,1);
	this.materialC.setSpecular(0.1,0.1,0.1,1);
	this.materialC.setShininess(1);

	this.materialD = new CGFappearance(this);
	this.materialD.setAmbient(0.117,0.9725,1,1);
	this.materialD.setDiffuse(0.117,0.9725,1,1);
	this.materialD.setSpecular(0.1,0.1,0.1,1);
	this.materialD.setShininess(1);
	
	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.loadTexture('../resources/images/floor.png');

	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.loadTexture('../resources/images/window.png');
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');

	this.slidesAppearence = new CGFappearance(this);
	this.slidesAppearence.loadTexture('../resources/images/slides.png');
	this.slidesAppearence.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');
	this.slidesAppearence.setAmbient(0.3,0.3,0.3,1);
	this.slidesAppearence.setDiffuse(0.8,0.8,0.8,1);
	this.slidesAppearence.setSpecular(0.1,0.1,0.1,1);
	this.slidesAppearence.setShininess(1);

	this.boardAppearence = new CGFappearance(this);
	this.boardAppearence.loadTexture('../resources/images/board.png');
	this.boardAppearence.setAmbient(0.5,0.5,0.5,1);
	this.boardAppearence.setDiffuse(0.5,0.5,0.5,1);
	this.boardAppearence.setSpecular(0.9,0.9,0.9,1);
	this.boardAppearence.setShininess(200);

	this.prismAppearence = new CGFappearance(this);
	this.prismAppearence.loadTexture('../resources/images/cilindro.png');
	this.prismAppearence.setAmbient(0.545,0.27,0.074,1);
	this.prismAppearence.setDiffuse(0.545,0.27,0.074,1);
	this.prismAppearence.setSpecular(0.1,0.1,0.1,1);
	this.prismAppearence.setShininess(1);	

	this.landscapeAppearance = new CGFappearance(this);
	this.landscapeAppearance.loadTexture('../resources/images/paisagem.png');
	
	this.setUpdatePeriod(100);

	//Robot Commands
	this.angleRobot = 0;
	this.posXrobot = 0;
	this.posZrobot = 0;
	this.distD = 0;
	this.distE = 0;
	this.armMove = 0;
	this.armOsc = 1;
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0,1);

	this.shader.bind();
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[2].setPosition(8, 8, 5, 1.0);
	this.lights[3].setPosition(4, 6.0, 7.0, 1.0);

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[0].enable();

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].setQuadraticAttenuation(0);
	this.lights[2].enable();

	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setConstantAttenuation(1);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(1.0);
	this.lights[3].enable();

	this.shader.unbind();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
};

LightingScene.prototype.Options = function () {
	console.log("Doing Something...");
};

LightingScene.prototype.updateRobotTex = function (head, body) {
	this.robot.updateTex(head, body);
};

LightingScene.prototype.update = function(currTime) {

	if(this.Clock){
		this.clock.update(currTime);
		}
	this.paperPlane.update(currTime);
};

LightingScene.prototype.display = function() {
	this.shader.bind();

	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	if(this.Luz1)
		this.lights[0].enable();
	else
		this.lights[0].disable();
	
	if(this.Luz2)
		this.lights[1].enable();
	else
		this.lights[1].disable();

	if(this.Luz3)
		this.lights[2].enable();
	else
		this.lights[2].disable();

	if(this.Luz4)
		this.lights[3].enable();
	else
		this.lights[3].disable();

	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.materialC.apply();
		this.wall.display();
	this.popMatrix();

	// Left Wall
	/*this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.wall.display();
	this.popMatrix();*/

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.materialD.apply();
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.slidesAppearence.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.boardAppearence.apply();
		this.boardB.display();
	this.popMatrix();

	// ---- END Primitive drawing section

	//colocação de colunas
	this.pushMatrix();
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(1, 1, 8);
		this.prismAppearence.apply();
		this.prism.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(15, 0, 0);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(1, 1, 8);
		this.cylinder.display();
	this.popMatrix();

	//colocar candieiro
	this.pushMatrix();
		this.translate(8, 8, 5);
		this.rotate(-180 * degToRad, 1, 0, 0);
		this.materialB.apply();
		this.lamp.display();
	this.popMatrix();

	//chao com textura com a classe my unitCube
	this.pushMatrix();
		this.translate(7.5, 0.01, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.floor.display();
	this.popMatrix();
	
	//parede com textura
	this.pushMatrix();
		this.translate(-15, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(30, 20, 0.4);
		this.landscapeAppearance.apply();
		this.wall.display();
	this.popMatrix();

	//Clock
	this.pushMatrix();
		this.translate(7.25, 7.25, 0.2);
		this.scale(0.5, 0.5,0.1);
		this.clock.display();
	this.popMatrix();

	//Paper Plane
	this.pushMatrix();
		this.paperPlane.display();
	this.popMatrix();

	//Robot
	this.pushMatrix();
		this.translate(7.5 + this.posXrobot, 0.2 ,5 + this.posZrobot);
		this.rotate((180 + this.angleRobot) * degToRad, 0, 1, 0);
		this.robot.updateRoda(this.distD, this.distE, this.armMove);
		this.robot.updateTex(this.HeadRobot, this.BodyRobot);
		this.robot.display();		
	this.popMatrix();

	//Parede com buraco
	this.pushMatrix();
		this.translate(0.01, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(1, 1 , 1);
		this.scale(5, 8/3 , 0.2/3);
		this.windowAppearance.apply();
		this.buraco.display();
		this.popMatrix();

	this.shader.unbind();
};
