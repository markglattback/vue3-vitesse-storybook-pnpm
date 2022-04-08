import { ref } from '@vue/composition-api'
import { useValidation } from 'vue-composable'
import { required } from '@vuelidate/validators'

export const createDirtyValidation = (value = '') => useValidation({
  $value: ref(value),
  required,
  $dirty: true,
})