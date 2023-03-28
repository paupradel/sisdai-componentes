import { onMounted, onUnmounted, ref, watch } from 'vue'

/**
 * @typedef { import("vue").Ref } Ref
 */

/**
 * @typedef {Object} UseMenuDesenfocableObject
 * @property {Ref<boolean>} menuEstaAbierto  Indica el estado del menu si esta abierto o no
 * @property {function} abrirMenu  pone `menuEstaAbierto = true`
 * @property {function} cerrarMenu  pone `menuEstaAbierto = false`
 * @property {function} alternarMenu  pone `menuEstaAbierto =  !menuEstaAbierto`
 */

/**
 *  Composable que maneja el estado de *abierto-cerrado* de un menu (en los menus colapsables), adicionalmente
 *  administra los eventos *focus-blur* para cerrar el menu automaticamente al momento de que el menu pierda el foco
 *
 * @param {Ref<HTMLElement>} elementoMenuEnfocable Referecia del elemento html que contiene los elementos del menu colapsable `ref<HTMLElement>`
 *
 * @returns {UseMenuDesenfocableObject} Metodos y propiedades del composable
 * - `menuEstaAbierto: ref<boolean>`
 * - `abrirMenu: function`
 * - `cerrarMenu: function`
 * - `alternarMenu: function`
 */
export function useMenuDesenfocable(elementoMenuEnfocable) {
  const menuEstaAbierto = ref(false)

  function updateBlur() {
    //revisa que no tengo foco ningun elemento hijo

    if (menuEstaAbierto.value) {
      setTimeout(() => {
        if (
          elementoMenuEnfocable.value &&
          !elementoMenuEnfocable.value.contains(document.activeElement)
        ) {
          menuEstaAbierto.value = false
        }
      }, 200)
    }
  }

  onMounted(() => {
    if (elementoMenuEnfocable.value)
      elementoMenuEnfocable.value.addEventListener('blur', updateBlur)
  })

  function abrirMenu() {
    menuEstaAbierto.value = true
  }

  function cerrarMenu() {
    menuEstaAbierto.value = false
  }

  function alternarMenu() {
    menuEstaAbierto.value = !menuEstaAbierto.value
  }

  watch(menuEstaAbierto, menuEstaAbierto => {
    if (menuEstaAbierto) {
      elementoMenuEnfocable.value.focus()
    }
  })

  onUnmounted(() => {
    if (elementoMenuEnfocable.value)
      elementoMenuEnfocable.value.removeEventListener('blur', updateBlur)
  })

  return { menuEstaAbierto, abrirMenu, cerrarMenu, alternarMenu }
}
