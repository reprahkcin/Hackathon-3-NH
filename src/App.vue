<template>
  <div class="container mt-3">
    <PassCalculator />
    <ValueController />
  </div>
</template>

<script>
import PassCalculator from './components/PassCalculator.vue'
import ValueController from './components/ValueController.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    PassCalculator,
    ValueController
  },
  computed: {
    ...mapState({
      count: (state) => state.count
    })
  }
}
</script>
