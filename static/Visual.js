class Visual {
    constructor() {
        console.log('visual')
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            45,    // kąt patrzenia kamery (FOV - field of view)
            window.innerWidth / window.innerHeight,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
            0.1,    // minimalna renderowana odległość
            10000    // maxymalna renderowana odległość od kamery 
        )
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setClearColor(0x9C95FF)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        $("#visualizing").append(this.renderer.domElement)
        this.camera.position.set(200, 150, 0)
        this.camera.lookAt(this.scene.position)

        var geometry = new THREE.BoxGeometry(15, 15, 15)
        var material = new THREE.MeshBasicMaterial({
            color: 0xFF0DF1,
            side: THREE.DoubleSide,
            wireframe: false,
            transparent: true,
            opacity: 0.5
        })

        this.cubes = []
        this.cubes2 = []

        for (let i = 4; i > 0; i--)
            for (let j = 0; j < 8; j++) {
                let cube = new THREE.Mesh(geometry, material)
                cube.position.set(j * 30 - 150, 0, i * 30 - 15)
                let cube2 = new THREE.Mesh(geometry, material)
                cube2.position.set(j * 30 - 150, 0, i * (-30) + 15)
                this.scene.add(cube)
                this.cubes.push(cube)
                this.scene.add(cube2)
                this.cubes.push(cube2)
            }

        this.render()
    }

    render() {
        requestAnimationFrame(this.render.bind(this)) // bind(this) przekazuje this do metody render

        for (let i = 0; i < this.cubes.length; i += 2) {
            let delta = music.getData()[i / 2] / 255 * 2
            this.cubes[i].scale.y = delta
            this.cubes[i + 1].scale.y = delta
            this.cubes[i].position.y = 15 * delta / 2
            this.cubes[i + 1].position.y = 15 * delta / 2
        }

        //console.log(music.getData()) // wyświetlenie danych audio w div-ie

        this.renderer.render(this.scene, this.camera)
    }
}