function handleButtonClick(event) {
    alert(' click en el botón');
    event.stopPropagation(); // Detener la propagación del evento
  }
  
  document.getElementById('miBoton').addEventListener('click', handleButtonClick);
  function handleButtonClick(event) {
    alert('click en el botón');
    event.stopPropagation(); // Detener la propagación del evento
  }
  
  document.getElementById('miBoton').addEventListener('click', handleButtonClick);
