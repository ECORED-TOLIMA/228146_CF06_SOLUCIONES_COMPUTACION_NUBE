<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
    observer: null,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  watch: {
    $route() {
      this.iniciarObservadorPasos()
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
    this.iniciarObservadorPasos()
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    validarBotonesPasos() {
      const componentesPasos = document.querySelectorAll('.pasos-b')
      componentesPasos.forEach(paso => {
        const btnLeft = paso.querySelector('.pasos-b__header__btn--left')
        const btnRight = paso.querySelector('.pasos-b__header__btn--right')
        const items = paso.querySelectorAll('.pasos-b__header__item')

        if (items.length > 0) {
          // Validar primer paso
          const esPrimero = items[0].classList.contains(
            'pasos-b__header__item--active',
          )
          if (btnLeft) {
            btnLeft.style.opacity = esPrimero ? '0.2' : '2'
            btnLeft.style.pointerEvents = esPrimero ? 'none' : 'auto'
          }
          // Validar último paso
          const esUltimo = items[items.length - 1].classList.contains(
            'pasos-b__header__item--active',
          )
          if (btnRight) {
            btnRight.style.opacity = esUltimo ? '0.2' : '2'
            btnRight.style.pointerEvents = esUltimo ? 'none' : 'auto'
          }
        }
      })
    },
    iniciarObservadorPasos() {
      this.$nextTick(() => {
        this.validarBotonesPasos() // Validación inicial

        // Configuramos el observador para detectar cambios de clase en los pasos
        if (this.observer) this.observer.disconnect()
        this.observer = new MutationObserver(() => this.validarBotonesPasos())

        const targets = document.querySelectorAll('.pasos-b__header')
        targets.forEach(target => {
          this.observer.observe(target, {
            attributes: true,
            childList: true,
            subtree: true,
          })
        })
      })
    },
  },
}
</script>

<style lang="sass"></style>
