function drawCircle(rayon){
			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			const geometry = new THREE.CircleGeometry( rayon, 32 );
			const material = new THREE.MeshBasicMaterial( { color: 0x3F6ECC } );
			const circle = new THREE.Mesh( geometry, material );
			scene.add( circle );
			window.addEventListener( 'wheel', onMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}


			const animate = function () {
                requestAnimationFrame( animate );

                circle.rotation.x += 0.01;
                circle.rotation.y += 0.01;

                renderer.render( scene, camera );
            };
            function onMouseWheel(e) {
			camera.position.z -= e.deltaY * 0.05;
			}

            animate();
			}
			init();
		}

function drawRectangle(width,height){

			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			const geometry = new THREE.PlaneGeometry( width, height, 32 );
			const material = new THREE.MeshBasicMaterial( { color: 0x3F6ECC } );
			const plane = new THREE.Mesh( geometry, material );
			scene.add( plane );
			window.addEventListener( 'wheel', onMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}


			const animate = function () {
                requestAnimationFrame( animate );

                plane.rotation.x += 0.01;
                plane.rotation.y += 0.01;

                renderer.render( scene, camera );
            };
            function onMouseWheel(e) {
			camera.position.z -= e.deltaY * 0.05;
			}

            animate();
			}
			init();	
		}
		function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }

function drawTriangle(hauteur,decal,base){

			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}

			const yB = hauteur
			const xA = -decal
			const xC = sum([xA,base])

			const geometry = new THREE.Geometry();
			geometry.vertices= [new THREE.Vector3(0,yB,0), new THREE.Vector3(xA,0,0), new THREE.Vector3(xC,0,0)]; 
			geometry.faces = [new THREE.Face3(1,0,2)];
			const mesh= new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({ color: 0x3F6ECC, side: THREE.DoubleSide }) );
			scene.add(mesh);

			window.addEventListener( 'wheel', onMouseWheel, false );

            renderer.render( scene, camera );
            function onMouseWheel(e) {
				camera.position.z -= e.deltaY * 0.05;
				 renderer.render( scene, camera );
			}

			}
			init();	
		}


function drawCylinder(radius,height){

			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );
				
			const geometry = new THREE.CylinderGeometry( radius, radius, height, 60 );
			const material = new THREE.MeshBasicMaterial( { color: 0x3F6ECC, wireframe: true } );
			const cylinder = new THREE.Mesh( geometry, material );
			scene.add( cylinder );
			window.addEventListener( 'wheel', onMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}


			const animate = function () {
                requestAnimationFrame( animate );

                cylinder.rotation.x += 0.01;
                cylinder.rotation.y += 0.01;

                renderer.render( scene, camera );
            };
            function onMouseWheel(e) {
			camera.position.z -= e.deltaY * 0.05;
			}

            animate();
			}
			init();				
		}

function drawCone(radius,height){

			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );
				
			const geometry = new THREE.ConeGeometry( radius, height, 60 );
			const material = new THREE.MeshBasicMaterial( { color: 0x3F6ECC, wireframe: true } );
			const cone = new THREE.Mesh( geometry, material );
			scene.add( cone );

			window.addEventListener( 'wheel', onMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}


			const animate = function () {
                requestAnimationFrame( animate );

                cone.rotation.x += 0.01;
                cone.rotation.y += 0.01;

                renderer.render( scene, camera );
            };
            function onMouseWheel(e) {
			camera.position.z -= e.deltaY * 0.05;
			}

            animate();
			}
			init();			
		}

function drawSphere(radius){

			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );
				
			const geometry = new THREE.SphereGeometry( radius, 40, 40 );
			const material = new THREE.MeshBasicMaterial( { color: 0x3F6ECC, wireframe: true } );
			const sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );

			window.addEventListener( 'wheel', onMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}


			const animate = function () {
                requestAnimationFrame( animate );

                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;

                renderer.render( scene, camera );
            };
            function onMouseWheel(e) {
			camera.position.z -= e.deltaY * 0.05;
			}

            animate();
			}
			init();			
		}

function drawParallelepiped(width,height,hauteur){
			
			let scene, camera, renderer;
			function init() {

			const scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xFEAD33 );
			const camera = new THREE.PerspectiveCamera();
			camera.position.set(0,0,50);

			const renderer = new THREE.WebGLRenderer();
			const containerCanvas = document.getElementById("ctnCanvas");
			containerCanvas.appendChild( renderer.domElement );
			renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			const geometry = new THREE.BoxGeometry( width, height, hauteur );
			const material = new THREE.MeshBasicMaterial( { color: 0x3F6ECC, wireframe: true } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			window.addEventListener( 'wheel', onMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			    camera.aspect = containerCanvas.offsetWidth / containerCanvas.offsetWidth;
			    camera.updateProjectionMatrix();

			    renderer.setSize( containerCanvas.offsetWidth, containerCanvas.offsetWidth );

			}


			const animate = function () {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            };
            function onMouseWheel(e) {
			camera.position.z -= e.deltaY * 0.05;
			}

            animate();
			}
			init();			
		}
			