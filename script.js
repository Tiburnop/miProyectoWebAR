// Cuando la escena se haya cargado
window.onload = () => {
    document.querySelector("a-scene").addEventListener("loaded", () => {
      // Si la probabilidad es correcta, crear el modelo
      if (shouldSpawn(1)) {  // 100% de probabilidad
        const entity = document.createElement("a-entity");
        // Usa las coordenadas locales, si no quieres geolocalización
        entity.setAttribute("gps-entity-place", "latitude: 0; longitude: 0");  // Coordenadas ficticias o tus preferidas
        entity.setAttribute("gltf-model", "modelos/Horse.glb");
        entity.setAttribute("scale", "1 1 1");
        entity.setAttribute("animation-mixer", "");
        document.querySelector("a-scene").appendChild(entity);
      }
    });
  };
  