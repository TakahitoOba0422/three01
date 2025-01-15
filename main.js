let scene, camera, renderer, cube;

function init() {
  // シーン
  scene = new THREE.Scene();

  // カメラ
  camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // レンダラー
  renderer = new THREE.WebGLRenderer({antialias: true});

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // ボックスのサイズ決定、メッシュ追加
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // const material = new THREE.MeshBasicMaterial({color: 0x0000ff });

  const texture = new THREE.TextureLoader().load("Rosvk_01.jpg");
  const material = new THREE.MeshBasicMaterial({map: texture});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 6;
}


// アニメーション制御
function animate() {
  // コールバック関数でanimate関数を呼び出し
  requestAnimationFrame(animate);
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
  cube.rotation.z += 0.03;
  // cube.rotation.x += Math.floor(Math.random() * (.02 + 1 - .01)) + .01;
  // cube.rotation.y += Math.floor(Math.random() * (.02 + 1 - .01)) + .01;
  // cube.rotation.z += Math.floor(Math.random() * (.02 + 1 - .01)) + .01;
  renderer.render(scene, camera);
}

// ウィンドウ変更時にサイズを維持
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize",onWindowResize)

init();
animate();