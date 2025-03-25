document.addEventListener('DOMContentLoaded', () => {
    // Solicitar permisos de cámara
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(() => {
                console.log('Permiso de cámara concedido');
                initARScene();
            })
            .catch(err => {
                console.error('Error al acceder a la cámara:', err);
                alert('Se necesita acceso a la cámara para esta experiencia.');
            });
    } else {
        alert('Tu navegador no soporta acceso a la cámara.');
    }
});

function initARScene() {
    const scene = document.querySelector('a-scene');
    
    scene.addEventListener('loaded', () => {
        // Crear el modelo de caballo
        const horse = document.createElement('a-entity');
        
        // En lugar del modelo GLB
        horse.setAttribute('geometry', 'primitive: box');
        horse.setAttribute('material', 'color: red');
        horse.setAttribute('scale', '0.5 0.5 0.5');    
        // Añadir rotación continua
        horse.setAttribute('animation', {
            property: 'rotation',
            to: '0 360 0',
            loop: true,
            dur: 10000,
            easing: 'linear'
        });
        
        // Añadir a la escena
        document.getElementById('horse-anchor').appendChild(horse);
        
        console.log('Modelo de caballo añadido a la escena');
    });
    
    // Manejar eventos de AR.js
    scene.addEventListener('markerFound', (e) => {
        console.log('Marcador encontrado');
    });
    
    scene.addEventListener('markerLost', (e) => {
        console.log('Marcador perdido');
    });
}