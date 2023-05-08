/**
 * Lista de opciones por defecto del Menú de accesibilidad, cada opción debe ser un objeto
 * con los siguientes atributos:
 * - accion {`String`}: Nombre de la acción al dar click en la opción.
 * - claseCss: {`String`}: Nombre de la clase css de la opción.
 * - icono {`String`}: Visible a un costado del titulo.
 * - titulo {`String`}: Visible en la lista del menú abierto.
 * @type Array
 */
export default [
  {
    accion: 'alternarTipografiaAccesible',
    claseCss: 'a11y-tipografia',
    icono: 'icono-cambio-tipografia',
    titulo: 'Tipografía accesible',
  },
  {
    accion: 'alternarVistaSimplificada',
    claseCss: 'a11y-simplificada',
    icono: 'icono-vista-simplificada',
    titulo: 'Vista simplificada',
  },
  {
    accion: 'alternarEnlacesSubrayados',
    claseCss: 'a11y-hipervinculos',
    icono: 'icono-enlace-subrayado',
    titulo: 'Enlaces subrayados',
  },
  {
    accion: 'incrementarTamanioTipografia',
    claseCss: 'a11y-tamanio',
    icono: 'icono-estrella',
    titulo: 'Incrementar tamanio tipografia',
  },
  {
    accion: 'reducirTamanioTipografia',
    claseCss: 'a11y-tamanio',
    icono: 'icono-estrella',
    titulo: 'Reducir tamanio tipografia',
  },
]
