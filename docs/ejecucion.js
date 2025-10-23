const productos = [
    {
      nombre: "Café Espresso",
      descripcion: "Un café fuerte y aromático, ideal para comenzar el día.",
      precio: "$2.50",
      imagen: "img/espresso.webp"
    },
    {
      nombre: "Café Capuchino",
      descripcion: "Una mezcla suave con leche vaporizada y un toque de cacao.",
      precio: "$3.00",
      imagen: "img/capuchino"
    },
    {
      nombre: "Café Latte",
      descripcion: "Una deliciosa mezcla de espresso y leche, perfecto para cualquier momento.",
      precio: "$2.80",
      imagen: "img/latte.webp"
    },
    {
      nombre: "Pastel de Chocolate",
      descripcion: "Un pastel de chocolate decadente que combina perfectamente con cualquier café.",
      precio: "$3.50",
      imagen: "img/pastelChocolate"
    },
    {
      nombre: "Tarta de Frutas",
      descripcion: "Deliciosa tarta con frutas frescas y una base crujiente.",
      precio: "$4.00",
      imagen: "img/tartaFrutas"
    }
  ];
  
  const contenedor = document.getElementById("catalogo");
  
  productos.forEach(producto => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
  
    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">${producto.precio}</p>
      <button class="boton">Comprar</button>
    `;
  
    contenedor.appendChild(tarjeta);
  });
  