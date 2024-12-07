const getCats = async () => {
    const catContainer = document.getElementById('contenedor-image');
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      // Mostrar imagen en el contenedor
      catContainer.innerHTML = `
        <img src="${data[0].url}" alt="Random Cat">
      `;
    } catch (error) {
      // Mostrar mensaje de error en el contenedor
      catContainer.innerHTML = `
        <p class="error">Error al obtener datos: ${error.message}</p>
      `;
    }
  };

  // Llamar a la función para obtener el gato
  getCats();
