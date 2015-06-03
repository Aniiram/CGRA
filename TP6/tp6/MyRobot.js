/**
 * MyRobot
 * @constructor
 */
 function MyRobot(scene) {
 	CGFobject.call(this,scene);

 	this.body = new MyCylinder (scene, 20, 20);
 	this.head = new MyLamp (scene, 20, 20);
 	this.disco = new MyDisk (scene, 20,20);
	
	this.moveRodaEsq = 0;
	this.moveRodaDir = 0;
	this.moveArmEsq = 0;
	this.moveArmDir = 0;
	this.acena = 1;
	this.movAcena = 0;
	this.incAcena = 0.05;
	this.fimAcena = 3;

	this.currheadAppearances = 0;
	this.currbodyAppearances = 0; 

 	this.robotheadAppearances = [];
 	this.robotBodyAppearances = [];

 	this.materialD = new CGFappearance(scene);

 	this.rodaAppearance = new CGFappearance(scene);
	this.rodaAppearance.loadTexture('../resources/images/roda.png');
	this.rodaAppearance.setAmbient(1,1,1,1);
	this.rodaAppearance.setDiffuse(1,1,1,1);
	this.rodaAppearance.setSpecular(1,1,1,1);

	this.texRodaAppearance = new CGFappearance(scene);
	this.texRodaAppearance.loadTexture('../resources/images/texturaPneu.png');

	this.body1Appearance = new CGFappearance(scene);
	this.body1Appearance.loadTexture('../resources/images/body1.png');
	this.robotBodyAppearances.push(this.body1Appearance);

	this.body2Appearance = new CGFappearance(scene);
	this.body2Appearance.loadTexture('../resources/images/body2.png');
	this.robotBodyAppearances.push(this.body2Appearance);

	this.body3Appearance = new CGFappearance(scene);
	this.body3Appearance.loadTexture('../resources/images/body3.png');
	this.robotBodyAppearances.push(this.body3Appearance);

	this.head1Appearance = new CGFappearance(scene);
	this.head1Appearance.loadTexture('../resources/images/head1.png');
	this.robotheadAppearances.push(this.head1Appearance);

	this.head2Appearance = new CGFappearance(scene);
	this.head2Appearance.loadTexture('../resources/images/head2.png');
	this.robotheadAppearances.push(this.head2Appearance);
 };

 MyRobot.prototype = Object.create(CGFobject.prototype);
 MyRobot.prototype.constructor = MyRobot;

 MyRobot.prototype.display = function() 
 {  
	this.robotheadAppearances[this.currheadAppearances].apply();

 	//Top of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(0, 2.95, 0);
 	  this.scene.scale(0.7, 0.8, 0.7);
 	  this.head.display();
 	this.scene.popMatrix();

 	//aplicar textura a todo o robot
	this.robotBodyAppearances[this.currbodyAppearances].apply();

 	//Body of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(0, 0.5, 0);
 	  this.scene.scale(0.7, 2.50, 0.7);
 	  this.scene.rotate(-90 * Math.PI / 180, 1, 0, 0);
 	  this.body.display();
 	this.scene.popMatrix();

 	//Bot of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(0, 0.5, 0);
 	  this.scene.scale(0.7, 0, 0.7);
 	  this.scene.rotate(90 * Math.PI / 180, 1, 0, 0);
 	  this.disco.display();
 	this.scene.popMatrix();

 	//braco direito of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(0.85, 1.6, 0);
 	  this.scene.translate(0, 1.15, 0); 	  
 	  this.scene.rotate(-this.moveArmDir, 1, 0, 0);
 	  this.scene.translate(0, -1.15, 0);
 	  this.scene.scale(0.2, 1, 0.2);
 	  this.scene.rotate(-90 * Math.PI / 180, 1, 0, 0);
 	  this.body.display();
 	this.scene.popMatrix();

 	//Top of braco direito of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(0.85, 2.55, 0);
 	  this.scene.translate(0, 0.2, 0); 	  
 	  this.scene.rotate(-this.moveArmDir, 1, 0, 0);
 	  this.scene.translate(0, -0.2, 0);
 	  this.scene.scale(0.2, 0.3, 0.2);
 	  this.head.display();
 	this.scene.popMatrix();

 	//Bop of braco direito of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(0.85, 1.62, 0);
 	  this.scene.translate(0, 1.13, 0); 	  
 	  this.scene.rotate(-this.moveArmDir, 1, 0, 0);
 	  this.scene.translate(0, -1.13, 0);
 	  this.scene.scale(0.2, 0.3, 0.2);
 	  this.scene.rotate(180 * Math.PI / 180, 1, 0, 0);
 	  this.head.display();
 	this.scene.popMatrix();

 	//braco esquerdo of robot
 	this.scene.pushMatrix();
  	 this.scene.translate(-0.85, 1.6, 0);

  	 this.scene.translate(0, 1.25, 0); 	  
 	 this.scene.rotate(this.movAcena, 0, 0, 1);
 	 this.scene.translate(0, -1.25, 0);

  	 this.scene.translate(0, 1.15, 0); 	  
 	 this.scene.rotate(-this.moveArmEsq, 1, 0, 0);
 	 this.scene.translate(0, -1.15, 0);

  	 this.scene.scale(0.2, 1, 0.2);
  	 this.scene.rotate(-90 * Math.PI / 180, 1, 0, 0);
  	 this.body.display();
 	this.scene.popMatrix();

 	//Top of braco esquerdo of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(-0.85, 2.55, 0);

	  this.scene.translate(0, 0.3, 0);
 	  this.scene.rotate(this.movAcena, 0, 0, 1);
 	  this.scene.translate(0, -0.3, 0);
 	  
 	  this.scene.translate(0, 0.2, 0); 	  
 	  this.scene.rotate(-this.moveArmEsq, 1, 0, 0);
 	  this.scene.translate(0, -0.2, 0);

 	  this.scene.scale(0.2, 0.3, 0.2);
 	  this.head.display();
 	this.scene.popMatrix();

 	//Bop of braco esquerdo of robot
 	this.scene.pushMatrix();
 	  this.scene.translate(-0.85, 1.62, 0);

 	  this.scene.translate(0, 1.23, 0); 
 	  this.scene.rotate(this.movAcena, 0, 0, 1);
 	  this.scene.translate(0, -1.23, 0)

 	  this.scene.translate(0, 1.13, 0); 	  
 	  this.scene.rotate(-this.moveArmEsq , 1, 0, 0);
 	  this.scene.translate(0, -1.13, 0);

 	  this.scene.scale(0.2, 0.3, 0.2);
 	  this.scene.rotate(180 * Math.PI / 180, 1, 0, 0);
 	  this.head.display();
 	this.scene.popMatrix();

	//Roda Esquerda
 	this.scene.pushMatrix();
 	  this.scene.translate(-0.5, 0.5, 0);
 	  this.scene.scale(0.5, 0.7, 0.7);
 	  this.scene.rotate(-90 * Math.PI / 180, 0, 1, 0);
 	  this.scene.rotate(-this.moveRodaEsq, 0, 0, 1);
 	  this.texRodaAppearance.apply();
 	  this.body.display();
 	this.scene.popMatrix();

 	//Bot of Roda Esquerda
 	this.scene.pushMatrix();
 	  this.scene.translate(-1.5, 0.5, 0);
 	  this.scene.scale(1, 0.7, 0.7);
 	  this.scene.rotate(90 * Math.PI / 180, 0, 1, 0);
 	  this.scene.rotate(this.moveRodaEsq, 0, 0, 1);
 	  this.rodaAppearance.apply();
 	  this.disco.display();
 	this.scene.popMatrix();

 	//Top of Roda Esquerda
 	this.scene.pushMatrix();
 	  this.scene.translate(0, 0.5, 0);
 	  this.scene.scale(1, 0.7, 0.7);
 	  
 	  this.scene.rotate(-90 * Math.PI / 180, 0, 1, 0);
 	  this.scene.rotate(-this.moveRodaEsq, 0, 0, 1);
 	  this.rodaAppearance.apply();
 	  this.disco.display();
 	  
 	this.scene.popMatrix();

 	//Roda Direita
 	this.scene.pushMatrix();
 	  this.scene.translate(0.5, 0.5, 0);
 	  this.scene.scale(0.5, 0.7, 0.7);
 	  this.scene.rotate(90 * Math.PI / 180, 0, 1, 0);
 	  this.scene.rotate(this.moveRodaDir, 0, 0, 1);
 	  this.texRodaAppearance.apply();
 	  this.body.display();
 	this.scene.popMatrix();

 	//Bot of Roda Direita
 	this.scene.pushMatrix();
 	  this.scene.translate(1.5, 0.5, 0);
 	  this.scene.scale(1, 0.7, 0.7);
 	  this.scene.rotate(-90 * Math.PI / 180, 0, 1, 0);
 	  this.scene.rotate(-this.moveRodaDir, 0, 0, 1);
 	  this.rodaAppearance.apply();
 	  this.disco.display();
 	this.scene.popMatrix();

 	//Top of Roda Direita
 	this.scene.pushMatrix();
 	  this.scene.translate(0, 0.5, 0);
 	  this.scene.scale(1, 0.7, 0.7);
 	  this.scene.rotate(90 * Math.PI / 180, 0, 1, 0);
 	  this.scene.rotate(this.moveRodaDir, 0, 0, 1);
 	  this.rodaAppearance.apply();
 	  this.disco.display();
 	this.scene.popMatrix();

 };

MyRobot.prototype.updateTex = function(head, body) 
 {
	this.currheadAppearances = head;
	this.currbodyAppearances = body; 
 };

MyRobot.prototype.updateRoda = function(dir, esq, arm) 
 {
 	this.moveRodaEsq = esq;
	this.moveRodaDir = dir;
	
	if(this.scene.armOsc != 0){
		this.moveArmDir = arm* Math.PI / 180;
		this.moveArmEsq = -arm* Math.PI / 180;
	}
	else {
		//this.moveArmDir += 5* Math.PI / 180;
		if(this.acena != 0){
			//console.log(this.moveArmEsq);
			if(this.moveArmEsq <= 180* Math.PI/180){
				this.moveArmEsq += 5 * Math.PI / 180;
			}else {
				this.acena = 0;
			}	

		}else{
			
			if(this.fimAcena > 0 || this.movAcena >= 0 ){
				
				console.log(this.movAcena);
				if(this.movAcena >= 40 * Math.PI/180 || 
					this.movAcena <= -30 * Math.PI/180){
						
					this.incAcena = 0 - this.incAcena;
					this.fimAcena -= 1;
				}
				this.movAcena += this.incAcena;

			}else{
				
				if(this.moveArmEsq >= -arm * Math.PI/180){
					this.moveArmEsq -= 5* Math.PI / 180;
				}else{
					this.scene.armOsc = 1;
					this.acena = 1;
					this.fimAcena = 3;
					this.movAcena = 0;
					this.incAcena = 0.05;

				}						
			}
		}
	}
	 
 };