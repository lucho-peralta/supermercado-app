export const mensajesApp = {
  entradaInvalida: 'Entrada inválida. Debe ingresar una de las opciones indicadas',
  saludoDespedida: 'Gracias por usar SupermercadoApp',
  idNoExiste: 'El id ingresado no corresponde a un producto del stock',
  nombreProductoConfirmado: 'Nombre del producto confirmado.',
  productoYaExiste: 'El producto ya existe. Debe ingresar un nombre distinto',
  categoriaConfirmada: 'Categoría confirmada',
  opcionSalir: '"Salir" para cerrar la App',
  salirDelMenu: 'Para salir de la app ingrese "salir"',
  opcionVolver: '"Volver" para regresar al menú',
  productoNoEncontrado: 'Producto no encontrado en el stock',
  opcionSalirVolver: ' (Ingrese "Salir" para cerrar la app o "volver" para regresar al menú)',
  categoriasDisponibles: 'Las categorias disponibles son: ',
  ingreseDatosNuevoProducto: 'Ingrese los datos que se solicitan a continuación',
};

export const textoPrompts = {
  seleccionarOpcion: 'Seleccione una opción:',
  ingreseIdProducto: 'Ingrese el Id del producto que desea buscar: ',
  ingreseNombre: 'Ingrese el nombre del producto: ',
  seleccionarCategoria: 'Seleccione la categoria del producto: ',
  ingresePrecio: 'Ingrese el precio del producto (sin el signo $): ',
  ingreseStock: 'Ingrese el stocj del producto: ',
};

export const menuApp = {
  titulo: 'Menu Supermercado App',
  opciones: ['Consultar stock', 'Buscar producto por id', 'Agregar producto al stock', 'Registrar compra', 'Generar ticket'],
};

export const stockProductos = [
  { id: 1, nombre: 'Agua', categoria: 'Bebida', precio: 2000, stock: 30 },
  { id: 2, nombre: 'Pan', categoria: 'Panaderia', precio: 2800, stock: 40 },
  { id: 3, nombre: 'Detergente', categoria: 'Limpieza', precio: 2950, stock: 25 },
  { id: 4, nombre: 'Asado', categoria: 'Carniceria', precio: 13500, stock: 50 },
];

export const categoriasProductos = {
  titulo: 'Categorías de productos',
  opciones: ['bebidas', 'panaderia', 'limpieza', 'carniceria', 'verduleria'],
};
