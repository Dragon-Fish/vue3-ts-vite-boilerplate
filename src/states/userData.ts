import { api } from '@/utils/PreorderApi'
import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'moegirl:LOGGED_ACCOUNT'
export const ORDERED_USER_COUNT = ref(0)
export async function getUserCount() {
  const {
    data: {
      data: { count },
    },
  } = await api.userCount()
  ORDERED_USER_COUNT.value = count
  return count
}

export const LOGGED_IN_ACCOUNT = ref(
  localStorage.getItem(STORAGE_KEY) || ''
)
export const LOGGED_IN_ACCOUNT_ENCRYPTED = computed(() => {
  const num = LOGGED_IN_ACCOUNT.value
  const len = num.length
  return len === 11 ? `${num.slice(0, 3)}****${num.substring(len - 4)}` : ''
})
watch([LOGGED_IN_ACCOUNT], ([val]) => {
  localStorage.setItem(STORAGE_KEY, val)
})

export const ALREADY_ORDERED = ref(false)

export function setCurUser(phone: string) {
  LOGGED_IN_ACCOUNT.value = phone
  ALREADY_ORDERED.value = true
}
export function clearCurUser() {
  LOGGED_IN_ACCOUNT.value = ''
  ALREADY_ORDERED.value = false
}
