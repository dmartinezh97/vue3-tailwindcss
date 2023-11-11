// ℹ️ Más información: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// El siguiente código es para solucionar un problema común en el diseño responsive en móviles.
// El problema va relacionado con la altura de la ventana vh (viewport height)
// 1vh = 1% de la altura de la ventana
// 100vh es igual al 100% de la altura de la ventana

// 🗯️ El código calcula el 1% de la altura interna de la ventana del navegador (`window.innerHeight * 0.01`)
// 🗯️ Luego define esta medida como una variable CSS personalizada llamada '--vh. Esta variable la añadimos al documento raiz HTML
// 🗯️ Al hacer esto, se crea una unidad de medida más precisa y consistente para la altura de la ventana,
// Esto es útil especialmente en móviles donde la altura visible del navegador puede cambiar, como cuando se oculta la barra de direcciones al desplazarse.
export const usarPropDynamicVhCss = () => {
  const vh = ref(0)

  const updateVh = () => {
    vh.value = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh.value}px`)
  }

  tryOnBeforeMount(() => {
    updateVh()
    useEventListener('resize', updateVh)
  })
}