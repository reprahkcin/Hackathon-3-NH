<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          {{ valueTitle }}
        </div>
        <div class="card-body d-flex">
          <div class="card">
            <div type="button" class="btn btn-primary" @click="increment(10)">
              <p class="fw-bold fs-1 p-0 my-auto">+</p>
            </div>

            <div class="w-100 m-0">
              <div id="tensPlace" class="fs-1 text-center fw-bold">
                {{ tensPlace }}
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="decrement(10)"
            >
              <p class="fw-bold fs-1 p-0 my-auto">-</p>
            </button>
          </div>
          <div class="card">
            <div type="button" class="btn btn-primary" @click="increment(1)">
              <p class="fw-bold fs-1 p-0 my-auto">+</p>
            </div>

            <div class="w-100 m-0">
              <div id="onesPlace" class="fs-1 text-center fw-bold">
                {{ onesPlace }}
              </div>
            </div>

            <button type="button" class="btn btn-primary" @click="decrement(1)">
              <p class="fw-bold fs-1 p-0 my-auto">-</p>
            </button>
          </div>
          <div class="card"><p class="fw-bold fs-1 p-0 my-auto">.</p></div>
          <div class="card">
            <div type="button" class="btn btn-primary" @click="increment(0.1)">
              <p class="fw-bold fs-1 p-0 my-auto">+</p>
            </div>

            <div class="w-100 m-0">
              <div id="onesPlace" class="fs-1 text-center fw-bold">
                {{ tenthsPlace }}
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="decrement(0.1)"
            >
              <p class="fw-bold fs-1 p-0 my-auto">-</p>
            </button>
          </div>
          <div class="card">
            <div type="button" class="btn btn-primary" @click="increment(0.01)">
              <p class="fw-bold fs-1 p-0 my-auto">+</p>
            </div>

            <div class="w-100 m-0">
              <div id="onesPlace" class="fs-1 text-center fw-bold">
                {{ hundredthsPlace }}
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="decrement(0.01)"
            >
              <p class="fw-bold fs-1 p-0 my-auto">-</p>
            </button>
          </div>
          <div class="card">
            <div
              type="button"
              class="btn btn-primary"
              @click="increment(0.001)"
            >
              <p class="fw-bold fs-1 p-0 my-auto">+</p>
            </div>

            <div class="w-100 m-0">
              <div id="onesPlace" class="fs-1 text-center fw-bold">
                {{ thousandthsPlace }}
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="decrement(0.001)"
            >
              <p class="fw-bold fs-1 p-0 my-auto">-</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValueController',
  props: {
    valueTitle: {
      type: String,
      default: 'Value'
    }
  },
  data() {
    return {
      value: 0
    }
  },
  computed: {
    tensPlace: function () {
      if (this.value >= 10) {
        return this.value.toString().charAt(0)
      } else {
        return 0
      }
    },
    onesPlace: function () {
      if (this.value >= 10) {
        return this.value.toString().charAt(1)
      } else if (this.value < 10 && this.value > 0) {
        return this.value.toString().charAt(0)
      } else {
        return 0
      }
    },
    tenthsPlace: function () {
      // if this.value has a decimal, return the tenths place
      if (this.value.toString().indexOf('.') > -1) {
        return this.value.toString().charAt(2)
      } else {
        return 0
      }
    },
    hundredthsPlace: function () {
      // if this.value has a decimal, return the hundredths place
      if (this.value.toString().indexOf('.') > -1) {
        if (this.value.toString().length > 3) {
          return this.value.toString().charAt(3)
        } else {
          return 0
        }
      } else {
        return 0
      }
    },
    thousandthsPlace: function () {
      // if this.value has a decimal, return the thousandths place
      if (this.value.toString().indexOf('.') > -1) {
        // if the value has a thousandths place, return it. otherwise, return 0
        if (this.value.toString().length > 4) {
          return this.value.toString().charAt(4)
        } else {
          return 0
        }
      } else {
        return 0
      }
    }
  },
  methods: {
    increment(value) {
      this.value += value
    },
    decrement(val) {
      if (this.value - val > 0) {
        this.value -= val
      } else {
        this.value = 0
      }
    },
    reset() {
      this.value = 0
    }
  },
  watch: {
    value: function () {
      // round value to 3 decimal places
      this.value = Math.round(this.value * 1000) / 1000
    }
  }
}
</script>
