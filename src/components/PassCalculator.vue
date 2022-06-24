<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-md-6 col-sm-12 mb-3">
              <p class="fw-bold">Pass Calculator</p>
              <p>{{ operationType() }} Operation</p>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="text-end">
                <button class="btn btn-danger w-100" @click="resetCalculator()">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <div class="card d-flex align-items-center h-100">
                <div class="card-header w-100">
                  <p class="my-auto">Current Diameter</p>
                </div>
                <div class="card-body">
                  <p class="my-auto fw-bold fs-1">{{ currentDiameter }}"</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row h-100">
                <div class="col-12 mb-1">
                  <div class="btn-group h-100 w-100 gap-1">
                    <div
                      class="btn btn-success w-25"
                      @click="addCurrentDiameter(1)"
                    >
                      <p class="fw-bold my-auto">1</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addCurrentDiameter(0.1)"
                    >
                      <p class="fw-bold my-auto">.1</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addCurrentDiameter(0.01)"
                    >
                      <p class="fw-bold my-auto">.01</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addCurrentDiameter(0.001)"
                    >
                      <p class="fw-bold my-auto">.001</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="btn-group h-100 w-100 gap-1">
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractCurrentDiameter(1)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">1</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractCurrentDiameter(0.1)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.1</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractCurrentDiameter(0.01)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.01</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractCurrentDiameter(0.001)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <div class="card d-flex align-items-center h-100 p-0">
                <div class="card-header w-100">
                  <p class="my-auto">Target Diameter</p>
                </div>
                <div class="card-body">
                  <p class="my-auto fw-bold fs-1">{{ targetDiameter }}"</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row h-100">
                <div class="col-12 mb-1">
                  <div class="btn-group h-100 w-100 gap-1">
                    <div
                      class="btn btn-success w-25"
                      @click="addTargetDiameter(1)"
                    >
                      <p class="fw-bold my-auto">1</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addTargetDiameter(0.1)"
                    >
                      <p class="fw-bold my-auto">.1</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addTargetDiameter(0.01)"
                    >
                      <p class="fw-bold my-auto">.01</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addTargetDiameter(0.001)"
                    >
                      <p class="fw-bold my-auto">.001</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="btn-group h-100 w-100 gap-1">
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractTargetDiameter(1)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">1</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractTargetDiameter(0.1)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.1</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractTargetDiameter(0.01)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.01</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractTargetDiameter(0.001)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <div class="card d-flex align-items-center h-100 p-0">
                <div class="card-header w-100">
                  <p class="my-auto">Depth of Cut</p>
                  <p class="my-auto text-center">--</p>
                  <p class="my-auto">Material Removed</p>
                </div>
                <div class="card-body">
                  <p class="my-auto fw-bold fs-1">{{ depthOfCut }}"</p>
                  <p class="my-auto text-center">--</p>
                  <p class="my-auto fw-bold fs-1">{{ materialRemoved }}"</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row h-100">
                <div class="col-12 mb-1">
                  <div class="btn-group h-100 w-100 gap-1">
                    <div class="btn btn-success w-25" @click="addDepthOfCut(1)">
                      <p class="fw-bold my-auto">1</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addDepthOfCut(0.1)"
                    >
                      <p class="fw-bold my-auto">.1</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addDepthOfCut(0.01)"
                    >
                      <p class="fw-bold my-auto">.01</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                    <div
                      class="btn btn-success w-25"
                      @click="addDepthOfCut(0.001)"
                    >
                      <p class="fw-bold my-auto">.001</p>
                      <p class="fw-bold my-auto fs-1">+</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="btn-group h-100 w-100 gap-1">
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractDepthOfCut(1)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">1</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractDepthOfCut(0.1)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.1</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractDepthOfCut(0.01)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.01</p>
                    </div>
                    <div
                      class="btn btn-danger w-25"
                      @click="subtractDepthOfCut(0.001)"
                    >
                      <p class="fw-bold my-auto fs-1">-</p>
                      <p class="fw-bold my-auto">.001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer pb-4">
          <div class="row p-2">
            <div class="col-6">
              <div class="card h-100">
                <div class="card-header"># Roughing Passes</div>
                <p class="fw-bold fs-1 text-center my-auto">
                  {{ numberPasses }}
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="card h-100">
                <div class="card-header">Stock left to Remove</div>
                <p class="fw-bold fs-1 text-center my-auto">
                  {{ stockToRemove }}"
                </p>
              </div>
            </div>
            <div class="col">
              <button
                class="btn btn-success btn-lg mt-3 w-100 h-100 fw-bold fs-1"
                @click="completePass()"
              >
                <p>Complete Pass</p>
                <p>{{ timeElapsedInMinutesAndSeconds }}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassCalculator',
  data() {
    return {
      currentDiameter: 0,
      targetDiameter: 0,
      depthOfCut: 0.01,
      timeSinceLastButtonPress: 0,
      timer: null
    }
  },
  computed: {
    stockToRemove: function () {
      return Math.abs(this.currentDiameter - this.targetDiameter).toFixed(3)
    },
    numberPasses: function () {
      return Math.floor(this.stockToRemove / (this.depthOfCut * 2))
    },
    materialRemoved: function () {
      return Math.round(this.depthOfCut * 2 * 1000) / 1000
    },
    timeElapsedInMinutesAndSeconds: function () {
      let minutes = Math.floor(this.timeSinceLastButtonPress / 60)
      let seconds = Math.floor(this.timeSinceLastButtonPress % 60)
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      return `${minutes}:${seconds}`
    }
  },
  methods: {
    addCurrentDiameter(value) {
      this.currentDiameter += value
      this.currentDiameter = Math.round(this.currentDiameter * 1000) / 1000
    },
    subtractCurrentDiameter(value) {
      if (this.currentDiameter - value < 0) {
        this.currentDiameter = 0
      } else {
        this.currentDiameter -= value
        this.currentDiameter = Math.round(this.currentDiameter * 1000) / 1000
      }
    },
    addTargetDiameter(value) {
      this.targetDiameter += value
      this.targetDiameter = Math.round(this.targetDiameter * 1000) / 1000
    },
    subtractTargetDiameter(value) {
      if (this.targetDiameter - value < 0) {
        this.targetDiameter = 0
      } else {
        this.targetDiameter -= value
        this.targetDiameter = Math.round(this.targetDiameter * 1000) / 1000
      }
    },
    addDepthOfCut(value) {
      this.depthOfCut += value
      this.depthOfCut = Math.round(this.depthOfCut * 1000) / 1000
    },
    subtractDepthOfCut(value) {
      if (this.depthOfCut - value < 0) {
        this.depthOfCut = 0
      } else {
        this.depthOfCut -= value
        this.depthOfCut = Math.round(this.depthOfCut * 1000) / 1000
      }
    },
    completePass() {
      if (this.operationType() == 'Boring') {
        console.log('Boring')
        this.addCurrentDiameter(this.depthOfCut * 2)
      }
      if (this.operationType() == 'Turning') {
        console.log('Turning')
        this.subtractCurrentDiameter(this.depthOfCut * 2)
      }
      // stop the timer
      clearInterval(this.timer)
      this.timeSinceLastButtonPress = 0
      // start timer
      this.timer = setInterval(() => {
        this.timeSinceLastButtonPress++
      }, 1000)
    },
    resetCalculator() {
      this.currentDiameter = 0
      this.targetDiameter = 0
      this.depthOfCut = 0.01
      this.timeSinceLastButtonPress = 0
      clearInterval(this.timer)
    },
    operationType() {
      if (this.currentDiameter > this.targetDiameter) {
        return 'Turning'
      } else {
        return 'Boring'
      }
    }
  }
}
</script>
