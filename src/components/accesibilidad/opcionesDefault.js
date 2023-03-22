/**
 * Lista de opciones por defecto del Menú de accesibilidad, cada opción es un objeto con la
 * siguiente estructura:
 * - accion {`String`}: Nombre de la acción al dar click en la opción.
 * - icono {`String`}: Visible un costado del titulo.
 * - titulo {`String`}: Visible en la lista del menú abierto.
 * @type Array
 */
export default [
  {
    accion: 'alternarTipografiaAccesible',
    icono: 'icono-cambio-tipografia',
    titulo: 'Tipografia accesible',
  },
  {
    accion: 'alternarVistaSimplificada',
    icono: 'icono-vista-simplificada',
    titulo: 'Vista simplificada',
  },
  {
    accion: 'alternarEnlacesSubrayados',
    icono: 'icono-enlace-subrayado',
    titulo: 'Enlaces subrayados',
  },
  {
    accion: 'limpiarClasesAccesibles',
    icono: 'icono-restablecer',
    titulo: 'Restablecer',
  },
]
