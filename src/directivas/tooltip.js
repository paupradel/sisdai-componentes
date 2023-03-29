import Vue from 'vue'
import { createPopper } from '@popperjs/core'

const GLOBAL_NAME = '__VTOOLTIP__'

globalThis[GLOBAL_NAME] = globalThis[GLOBAL_NAME] || {}

Vue.directive('tooltip', {
  bind(el, binding) {
    const unique_id = Math.random().toString(36).substring(4)
    el.setAttribute('host-tooltip-id', unique_id)

    const modifiers = binding.modifiers
    const interactable = modifiers['interactable'] ? true : false

    const placement = binding.arg ? binding.arg : 'right'
    const offsets = {
      top: [12, 0],
      bottom: [12, 0],
      right: [0, 12],
      left: [0, 12],
    }

    let offset = offsets[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['offset'] ? binding.value['offset'] : offset
    }

    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-tooltip-normal',
      interactable: interactable,
    }
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id')

    //volviendo a leer lo que haya cambiado del binding
    const placement = binding.arg ? binding.arg : 'right'
    const offsets = {
      top: [12, 0],
      bottom: [12, 0],
      right: [0, 12],
      left: [0, 12],
    }

    let offset = offsets[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['offset'] ? binding.value['offset'] : offset
    }

    const props = globalThis[GLOBAL_NAME][unique_id]

    props.placement = placement
    props.offset = offset
    props.value = binding.value
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id')
    const props = globalThis[GLOBAL_NAME][unique_id]
    el.removeEventListener('mouseenter', props.mouseEnterListener)
    el.removeEventListener('mouseleave', props.mouseLeaveListener)
  },
})

Vue.directive('tooltip-info', {
  bind(el, binding) {
    const unique_id = 'info-' + Math.random().toString(36).substring(4)
    el.setAttribute('host-tooltip-id', unique_id)

    const modifiers = binding.modifiers
    const interactable = modifiers['interactable'] ? true : false

    const placement = binding.arg ? binding.arg : 'right'
    const offsets = {
      top: [12, 0],
      bottom: [12, 0],
      right: [0, 12],
      left: [0, 12],
    }

    let offset = offsets[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['offset'] ? binding.value['offset'] : offset
    }

    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-tooltip-info',
      interactable: interactable,
    }
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id')

    //volviendo a leer lo que haya cambiado del binding
    const placement = binding.arg ? binding.arg : 'right'
    const offsets = {
      top: [12, 0],
      bottom: [12, 0],
      right: [0, 12],
      left: [0, 12],
    }

    let offset = offsets[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['offset'] ? binding.value['offset'] : offset
    }

    const props = globalThis[GLOBAL_NAME][unique_id]

    props.placement = placement
    props.offset = offset
    props.value = binding.value
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id')
    const props = globalThis[GLOBAL_NAME][unique_id]
    el.removeEventListener('mouseenter', props.mouseEnterListener)
    el.removeEventListener('mouseleave', props.mouseLeaveListener)
  },
})

const addMouseEnterListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps =
      globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id]

    //revisar que no exista un timer para limpiar el toltip, si no cancelarlo, ya que esta funcion creara otro
    if ('timerToClear' in globalProps) {
      cancelTimerToRemove(globalProps)
      return
    }

    const tooltip = getTooltipElement(
      unique_id,
      globalProps.value,
      globalProps.classTooltip
    )

    let elementToDesignate = el
    if (typeof globalProps.value === 'object') {
      elementToDesignate = globalProps.value['designateToElement']
        ? document.querySelector(globalProps.value['designateToElement'])
        : el
    }

    createPopper(elementToDesignate, tooltip, {
      placement: globalProps.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: globalProps.offset,
          },
        },
      ],
    })
  }
  el.addEventListener('mouseenter', fn)
  return fn
}

const addMouseLeaveListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps =
      globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id]
    //const tooltip = getTooltipElement(unique_id,globalProps.value, globalProps.classTooltip)

    if (globalProps.interactable) {
      const timer = setTimeout(() => {
        removeTooltip(unique_id)
        delete globalProps['timerToClear']
      }, 1000)
      globalProps['timerToClear'] = timer
      const tooltip = getTooltipElement(
        unique_id,
        globalProps.value,
        globalProps.classTooltip
      )
      tooltip.addEventListener('mouseenter', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps)
      })
      tooltip.addEventListener('mouseleave', () => {
        removeTooltip(unique_id)
      })

      return
    }

    removeTooltip(unique_id)
  }
  el.addEventListener('mouseleave', fn)
  return fn
}

const cancelTimerToRemove = propsOfTooltip => {
  if ('timerToClear' in propsOfTooltip) {
    //console.log("cancelando el removido porque volvio a entrar")
    const timer = propsOfTooltip['timerToClear']
    clearTimeout(timer)
    delete propsOfTooltip['timerToClear']
    //return
  }
}

const removeTooltip = unique_id => {
  if (document.querySelector("[tooltip-id='" + unique_id + "']") !== null) {
    document.querySelector("[tooltip-id='" + unique_id + "']").remove()
  }
}

/**
 *  Create if not exists
 * @param {string} id
 * @param {object} value
 * @param {string} classTooltip
 * @returns
 */

function getTooltipElement(id, value, classTooltip) {
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    return document.querySelector("[tooltip-id='" + id + "']")
  }

  //crearlo
  const tooltip = document.createElement('div')
  tooltip.setAttribute('tooltip-id', id)

  tooltip.classList.add(classTooltip)
  let contenido = typeof value === 'object' ? value['content'] : value
  tooltip.innerHTML = `<div class="cuerpo-tooltip">${contenido}</div>`
  document.body.appendChild(tooltip)
  return tooltip
}
