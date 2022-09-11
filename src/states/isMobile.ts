import { computed, ref } from 'vue'

export const BREAK_PONIT = 992
export const CLIENT_WIDTH = ref(document.body.clientWidth)
window.addEventListener('resize', () => {
  CLIENT_WIDTH.value = document.body.clientWidth
})

export const IS_MOBILE = computed(() => CLIENT_WIDTH.value <= BREAK_PONIT)
