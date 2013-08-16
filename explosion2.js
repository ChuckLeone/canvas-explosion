/* Explosion effect written in JavaScript using HTML 5 canvas and KineticJS by Chuck Leone
/* Use as you like, please credit me if you do
/* email: chuckleone@gmail.com
/* twitter @ChuckLeone 
 */ 
function explosion() {
	function getRandomColor() {
		var colorSet = ['#ffb30d', '#e8820c', '#ff5900', 'e82e0c', 'ff0723', '#444444' ]
        var i = Math.floor((Math.random()*6));
        return colorSet[i];
    }
	function addCircle(id) {
        var circle = new Kinetic.Circle({
         	x: 15 + (Math.random() * 12) + 2,
         	y: 15 + (Math.random() * 10) + 5,
          	radius: Math.random() * 2,
          	fill: getRandomColor(),
          	opacity: 1.0,
          	id: id
		});
        
		layer.add(circle);
		
		circle.tween = new Kinetic.Tween({
          node: circle,
          scaleX: 15,
          scaleY: 15,
          easing: Kinetic.Easings.EaseOut,
          duration: .35,
          opacity: 0
      	});
      	circle.tween.play();
	}
	
	function addParticles(id) {
        var particles = new Kinetic.Circle({
          	x: Math.random() * (stage.getWidth() - 20),
         	y: Math.random() * (stage.getHeight() - 20),

          	radius: Math.random() * 2,
          	fill: '333333',
          	opacity: .5,
          	id: id
		});
        
		layer.add(particles);
		
		particles.tween = new Kinetic.Tween({
          node: particles,
          scaleX: 6,
          scaleY: 6,
          easing: Kinetic.Easings.EaseOut,
          duration: 1,
          opacity: 0
      	});
      	particles.tween.play();
	}
	// sounds
	
	function getRandomSound() {
    		var loadedSound = ['sounds/explosion0.wav', 'sounds/explosion1.wav', 'sounds/explosion2.wav', 'sounds/explosion3.wav', 'sounds/explosion4.wav', 'sounds/explosion5.wav'];
    		var i = Math.floor((Math.random()*6));
        	return loadedSound[i];
    }
    
    function playSound() {
    		var explosion = new Audio(getRandomSound());
    		explosion.volume = .5;
    		explosion.load();
    		explosion.play();
    }
    
    playSound();
    	
	var stage = new Kinetic.Stage({
    	container: 'container',
        width: 64,
        height: 64
	});

	var layer = new Kinetic.Layer();
		for(var n = 0; n < 30; n++) {
        addCircle(n);
        addParticles(n);
	}
	stage.add(layer);
	
}

explosion();