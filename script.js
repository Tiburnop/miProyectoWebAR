document.addEventListener('DOMContentLoaded', () => {
    const permissionOverlay = document.getElementById('permission-overlay');
    const permissionBtn = document.getElementById('permission-btn');
    const arScene = document.querySelector('a-scene');

    permissionBtn.addEventListener('click', async () => {
        try {
            // Solicitar permisos de cámara
            const cameraPermission = await navigator.mediaDevices.getUserMedia({ video: true });
            
            // Solicitar permisos de ubicación
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            // Ocultar pantalla de permisos
            permissionOverlay.style.display = 'none';
            
            // Mostrar escena AR
            arScene.style.display = 'block';

            // Inicializar carga del modelo
            window.onload = () => {
                arScene.addEventListener("loaded", () => {
                    const entity = document.createElement("a-entity");
                    entity.setAttribute("gltf-model", "modelos/Horse.glb");
                    entity.setAttribute("scale", "0.2 0.2 0.2");
                    entity.setAttribute("animation-mixer", "");
                    entity.setAttribute("position", "0 0 0");
                    arScene.appendChild(entity);
                });
            };

        } catch (error) {
            alert('Error al obtener permisos: ' + error.message);
        }
    });
});