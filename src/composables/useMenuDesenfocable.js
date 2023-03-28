import { onMounted, onUnmounted, ref, watch } from 'vue'
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
