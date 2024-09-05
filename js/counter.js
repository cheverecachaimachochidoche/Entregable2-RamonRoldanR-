
function actualizarContadorCarrito() {
    let carrito = obtenerCarrito();
    let contador = carrito.length;
    document.getElementById('contador-carrito').textContent = contador;
}
