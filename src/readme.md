# Supermercado App

Aplicación de consola para la gestión de ventas, productos, usuarios y reportes en un entorno de supermercado. Diseñada con enfoque modular, validación defensiva y flujos accesibles para distintos roles operativos.

## Roles disponibles

- IT: acceso completo a todos los menús.
- Cajero: flujo de venta y emisión de ticket.
- Gerente de ventas: reportes consolidados.
- Responsable de inventario: gestión de productos.

Cada menú se genera dinámicamente según el rol, con opciones validadas y navegación defensiva (`salir`, `volver`, entradas inválidas).

## Inicio de sesión

El usuario ingresa:

- **DNI**: validado como número entero de 8 dígitos.
- **Contraseña**: validada como alfanumérica con mínimo de 5 caracteres.

Ambas entradas permiten comandos `salir` para abortar el proceso.

## Flujo de venta

Archivo: `procesarVenta.js`

1. **Selección de productos**  
   Se muestra el stock disponible. El usuario elige por índice. Validación estricta: entero válido y opción existente.

2. **Ingreso de cantidad**  
   Validación: entero positivo.

3. **Registro acumulado**  
   Si el producto ya fue ingresado, se suma la cantidad. Si es nuevo, se agrega al array.

4. **Confirmación de múltiples productos**  
   Entrada binaria (`si` / `no`) con reintento en caso de error.

5. **Aplicación de promociones**  
   Se calcula subtotal sin descuento y total a pagar.

6. **Pago y vuelto**  
   Validación decimal. Confirmación del monto (`si` / `no`). Cálculo de vuelto.

7. **Registro de venta**  
   Se genera un ID único. Se guarda la venta en `ventasRegistradas`.

## Gestión de productos

Archivo: `ingresarProducto.js`

### Alta de nuevo producto

Función: `IngresarDatosNuevoProducto()`

Solicita:

- Nombre: no debe existir en la base.
- Categoría: seleccionada por índice.
- Precio: decimal válido.
- Stock: entero positivo.

Genera un ID único y devuelve el objeto completo.

### Búsqueda de productos

- Por ID: `BuscarProductoPorId()` → validación de existencia.
- Por categoría: `BuscarProductoPorCategoria()` → muestra opciones y filtra.

## Reportes

Archivo: `ventaServices.js`  
Función: `ReporteVentasConsolidado()`

Calcula:

- Total de ventas anual
- Ingresos totales
- Promedio mensual
- Ticket promedio

Usa la fecha actual para determinar el mes y segmentar los datos.

## Validaciones defensivas

Todas las entradas del usuario se validan con:

```js
ValidarCaracteresAceptado(entrada, tipo)

Tipos soportados:

'entero'

'decimal'

'alfanumerico'

Además, cada flujo reconoce comandos salir y volver en cualquier punto.

Ticket de venta
Generado al final del flujo:

Fecha completa

Productos vendidos con subtotales

Total pagado y vuelto

ID de operación

Cómo ejecutar
npm install
npm run start

```
