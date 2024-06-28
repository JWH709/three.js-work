import * as THREE from "three";

function Sphere() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //Time to learn how 2 light:

  //Ambient Light: provides light across the entire scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color, Intensity
  scene.add(ambientLight);
  //Directional Light: Casts light in a specific direction to mimic sunlight
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Color, Intensity
  directionalLight.position.set(5, 5, 5); // x, y, z position
  scene.add(directionalLight);
  //Point Light: Emits light in a direction from a single point
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(2, 2, 2);
  scene.add(pointLight);

  //So, I initally had (1,1,1) here, but if you think in terms of blender, I'm essentially creating a low poly sphere which is just a diamond
  const geometry = new THREE.SphereGeometry(1, 32, 32); //by changing the value of X/Y segments while keeping the radius 1, I can create a sphere/sphere is just a diamond with more verticies
  const material = new THREE.MeshToonMaterial({ color: 0x00ff00 }); //Basic material has no lighting effects. Phong and standard do.
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 5;

  function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
}

export default Sphere;
