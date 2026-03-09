const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector("#bg")
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 5

const geometry = new THREE.TorusKnotGeometry()

const material = new THREE.MeshStandardMaterial({
color:0xff6a00
})

const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

const light = new THREE.PointLight(0xffffff)

light.position.set(5,5,5)

scene.add(light)

function animate(){

requestAnimationFrame(animate)

mesh.rotation.x+=0.01
mesh.rotation.y+=0.01

renderer.render(scene,camera)

}

animate()
