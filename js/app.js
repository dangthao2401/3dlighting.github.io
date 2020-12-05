var app=function() {
	 // initiallize scene, camera, objects and renderer
	var scene, camera, renderer, object1, object2,object3;
    var init_app = function() {
        // 1. create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.TextureLoader().load( "data/textures/background.jpeg" );
        // 2. create an locate the camera
		var  canvasWidth = 1280, canvasHeight  = 720;
		var fieldOfViewY = 60, aspectRatio = canvasWidth /canvasHeight, near=0.1, far= 100.0;
		camera = new THREE.PerspectiveCamera( fieldOfViewY, aspectRatio, near, far );
		camera.position.z = 25;
		
        // 3. create and locate the objects on the scene
		const geometry = new THREE.SphereGeometry( 5, 32, 32 );
		// const material1 = new THREE.MeshBasicMaterial( { color: 'purple'} );
		// const material2 = new THREE.MeshLambertMaterial({ color: 'black',emissive: 'purple' } );
		// const material3 = new THREE.MeshPhongMaterial( { color: 'black',emissive: 'purple', shininess: 150 } );
		// const material1 = new THREE.MeshBasicMaterial( { color: 'red',wireframe:true } );
		// const material2 = new THREE.MeshBasicMaterial({ color: 'green',wireframe:true } );
		// const material3 = new THREE.MeshBasicMaterial( { color: 'blue',wireframe:true} );
		var flower_texture = new THREE.TextureLoader().load( "data/textures/flower.jpg" );
		var alpha_texture = new THREE.TextureLoader().load( "data/textures/alphaMap.png" );
		const material1 = new THREE.MeshBasicMaterial( { color: 'blue'} );
		const material2 = new THREE.MeshLambertMaterial({ color: 'blue', emissive: 'black'} );
		const material3 = new THREE.MeshPhongMaterial( { color: 'blue', emissive: 'blue', shininess: 150	} );
		object1 = new THREE.Mesh( geometry, material1 );
		object2 = new THREE.Mesh( geometry, material2 );
		object3 = new THREE.Mesh( geometry, material3 );
		// light
        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-30, 20, 30);
        scene.add(spotLight);

		// add the cube to the scene
		scene.add( object1 );
		scene.add( object2 );
		scene.add( object3 );
		// update position
		object1.position.x = -15;
		object3.position.x = 15;
        // 4. create the renderer   
		renderer = new THREE.WebGLRenderer();
		renderer.setSize( canvasWidth, canvasHeight);
		document.body.appendChild( renderer.domElement );
    };
    // main animation loop - calls every 50-60 ms.
    var mainLoop = function() {
		
		requestAnimationFrame( mainLoop );
		object1.rotation.y += 0.01;
		object2.rotation.y += 0.01;
		object3.rotation.y += 0.01;
		renderer.render( scene, camera );
    };
    init_app();
    mainLoop();
}

  