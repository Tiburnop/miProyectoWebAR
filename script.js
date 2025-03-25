// Este script se asegurará de que el caballo aparezca cuando la superficie se detecte

// Cuando la escena se haya cargado
window.onload = () => {
    document.querySelector("a-scene").addEventListener("loaded", () => {
        // Crear el modelo de caballo y agregarlo a la escena
        const entity = document.createElement("a-entity");

        // No usamos GPS para interiores, solo añadimos el modelo a la escena
        entity.setAttribute("gltf-model", "modelos/Horse.glb");  // Ruta del modelo .glb
        entity.setAttribute("scale", "0.2 0.2 0.2");  // Escala ajustada para que se vea correctamente
        entity.setAttribute("animation-mixer", "");  // Para animar el modelo si es necesario

        // Asegura que el modelo esté en una superficie visible
        entity.setAttribute("position", "0 0 0");  // Posición del modelo en relación con la cámara

        // Añadir el modelo a la escena
        document.querySelector("a-scene").appendChild(entity);
    });
};
