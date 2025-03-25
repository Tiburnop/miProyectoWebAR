// 1. Solicitar permisos automáticamente al cargar
window.onload = function() {
    // Pedir permisos de cámara
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function() {
            initARExperience();
        })
        .catch(function(err) {
            console.error("Error de cámara:", err);
        });
};

function initARExperience() {
    const scene = document.querySelector('a-scene');
    
    scene.addEventListener('loaded', function() {
        // Crear entidad del caballo
        const horse = document.createElement('a-entity');
        
        // Configurar modelo 3D
        horse.setAttribute('gltf-model', 'modelos/Horse.glb');
        horse.setAttribute('scale', '0.25 0.25 0.25');
        
        // Posicionar a 1.5 metros de distancia en un ángulo aleatorio
        const distance = 1.5;
        const angle = Math.random() * Math.PI * 2;
        const x = Math.sin(angle) * distance;
        const z = -Math.cos(angle) * distance;
        
        horse.setAttribute('position', `${x} -1.5 ${z}`); // Y=-1.5 para ponerlo en el suelo
        
        // Hacer que mire siempre hacia la cámara
        horse.setAttribute('look-at', '[camera]');
        
        // Añadir animación interna (sin rotar sobre sí mismo)
        horse.setAttribute('animation-mixer', 'clip: Walk; loop: repeat');
        
        // Añadir a la escena
        document.getElementById('caballo').appendChild(horse);
        
        console.log('Caballo colocado a', distance, 'metros de distancia');
    });
}