import * as THREE from "three";

//Three key properties to learn for three.js: scene, camera, and renderers.

function App() {
  //Here, we set up a scene
  const scene = new THREE.Scene();

  //Now, we create a camera, and give it some basic values:
  const camera = new THREE.PerspectiveCamera(
    75, //FOV value in degrees
    window.innerWidth / window.innerHeight, //Aspect ratio. Should always be set to this, with some exceptions.
    0.1, //near: Objects located closer to the camera than the near value won't be rendered.
    1000 //far: Objects located further from the camera than the far vvalue won't be rendered
  );

  //Here, we create the renderer:
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight); //Set the size to the height & width of the screen
  document.body.appendChild(renderer.domElement); //adding the renderer to our HTML document as a canvas element

  //Here, we create a cube. We create a material for the mesh of our cube, create a mesh to attach the material to, then attach the mesh to the cube itself
  const geometry = new THREE.BoxGeometry(1, 1, 1); //Number's here represent verticies
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //the properties of the material we're adding. Here, it's just color we're adding
  const cube = new THREE.Mesh(geometry, material); //the mesh itself. The mesh (I think?) is just an interface between the material and geometry
  scene.add(cube); //Add the cube to the scene

  camera.position.z = 5; //move the camera out so that the camera and the cube aren't overlapped. Default spawn for the cube is (0,0,0)

  //Here, we render everything. By adding roatation to the cube, we create an animated loop that runs at 60fps.
  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
}

export default App;
