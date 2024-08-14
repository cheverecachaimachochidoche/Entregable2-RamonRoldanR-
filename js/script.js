const productos = [
    { id: 1, nombre: 'Pez Betta', precio: 10.00 },
    { id: 2, nombre: 'Pez Guppy', precio: 8.00 },
    { id: 3, nombre: 'Pez Ángel', precio: 15.00 },
    { id: 4, nombre: 'Pez Disco', precio: 25.00 },
    { id: 5, nombre: 'Pez Cebra', precio: 6.00 },
    { id: 6, nombre: 'Pez Neon', precio: 5.00 },
    { id: 7, nombre: 'Pez Goldfish', precio: 4.00 },
    { id: 8, nombre: 'Pez Molly', precio: 7.00 },
    { id: 9, nombre: 'Pez Platy', precio: 6.00 }
];

document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
});

const botonesAgreg = document.querySelectorAll('.agregar-carrito');
botonesAgreg.forEach(boton => {
    boton.addEventListener('click', agregarCarrito);
});

function agregarCarrito(e) {
    const idProducto = parseInt(e.target.getAttribute('data-id'));
    const producto = productos.find(p => p.id === idProducto);
    let carrito = obtenerCarrito();
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    let carrito = obtenerCarrito();
    let total = 0;
    carritoItems.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <div>
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="text-primary"><strong>$${producto.precio.toFixed(2)}</strong></p>
                </div>
            </div>
        `;

        carritoItems.appendChild(div);
        total += producto.precio;
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}

function obtenerCarrito() {
    if (localStorage.getItem('carrito')) {
        return JSON.parse(localStorage.getItem('carrito'));
    } else {
        return [];
    }
}

function cargarCarrito() {
    mostrarCarrito();
}

document.getElementById('vaciar-carrito').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    mostrarCarrito();
});
