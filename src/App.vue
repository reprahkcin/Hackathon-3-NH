<template>
  <div class="container">
    <PassCalculator />
  </div>
</template>

<script>
import PassCalculator from './components/PassCalculator.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    PassCalculator
  },
  computed: {
    ...mapState({
      count: (state) => state.count
    })
  }
}
</script>
