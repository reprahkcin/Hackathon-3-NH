<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <h3>Pass Calculator</h3>
          <h3>{{ operationType() }} Operation</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <div class="card d-flex align-items-center h-100">
                <div class="card-header w-100">
                  <h3>Current Diameter</h3>
                </div>
                <div class="card-body">
                  <p class="my-auto fw-bold fs-1">{{ currentDiameter }}"</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row h-100">
                <div class="col-12 mb-1">
                  <div class="btn-group w-100 gap-1">
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addCurrentDiameter(1)"
                    >
                      +1"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addCurrentDiameter(0.1)"
                    >
                      +.1"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addCurrentDiameter(0.01)"
                    >
                      +.01"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addCurrentDiameter(0.001)"
                    >
                      +.001"
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="btn-group w-100 gap-1">
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractCurrentDiameter(1)"
                    >
                      -1"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractCurrentDiameter(0.1)"
                    >
                      -.1"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractCurrentDiameter(0.01)"
                    >
                      -.01"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractCurrentDiameter(0.001)"
                    >
                      -.001"
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
                  <h3>Target Diameter</h3>
                </div>
                <div class="card-body">
                  <p class="my-auto fw-bold fs-1">{{ targetDiameter }}"</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row h-100">
                <div class="col-12 mb-1">
                  <div class="btn-group w-100 gap-1">
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addTargetDiameter(1)"
                    >
                      +1"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addTargetDiameter(0.1)"
                    >
                      +.1"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addTargetDiameter(0.01)"
                    >
                      +.01"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addTargetDiameter(0.001)"
                    >
                      +.001"
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="btn-group w-100 gap-1">
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractTargetDiameter(1)"
                    >
                      -1"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractTargetDiameter(0.1)"
                    >
                      -.1"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractTargetDiameter(0.01)"
                    >
                      -.01"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractTargetDiameter(0.001)"
                    >
                      -.001"
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
                  <h3>Depth of Cut</h3>
                  <p class="p-0 mb-0">*Material removed is double this value</p>
                </div>
                <div class="card-body">
                  <p class="my-auto fw-bold fs-1">{{ depthOfCut }}"</p>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row h-100">
                <div class="col-12 mb-1">
                  <div class="btn-group w-100 gap-1">
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addDepthOfCut(1)"
                    >
                      +1"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addDepthOfCut(0.1)"
                    >
                      +.1"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addDepthOfCut(0.01)"
                    >
                      +.01"
                    </div>
                    <div
                      class="btn btn-success btn-lg fw-bold fs-1"
                      @click="addDepthOfCut(0.001)"
                    >
                      +.001"
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="btn-group w-100 gap-1">
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractDepthOfCut(1)"
                    >
                      -1"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractDepthOfCut(0.1)"
                    >
                      -.1"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractDepthOfCut(0.01)"
                    >
                      -.01"
                    </div>
                    <div
                      class="btn btn-danger btn-lg fw-bold fs-1"
                      @click="subtractDepthOfCut(0.001)"
                    >
                      -.001"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header"># Roughing Passes</div>
                <p class="fw-bold fs-1 text-center">{{ numberPasses }}</p>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">Stock to Remove</div>
                <p class="fw-bold fs-1 text-center">{{ stockToRemove }}"</p>
              </div>
            </div>
            <div class="col">
              <button
                class="btn btn-success btn-lg m-0 w-100 h-100 fw-bold fs-1"
                @click="completePass()"
              >
                Completed Pass
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
      depthOfCut: 0
    }
  },
  computed: {
    stockToRemove: function () {
      return Math.abs(this.currentDiameter - this.targetDiameter).toFixed(3)
    },
    numberPasses: function () {
      return Math.floor(this.stockToRemove / (this.depthOfCut * 2))
    },
    remainingStock: function () {
      return this.targetDiameter - this.currentDiameter
    }
  },
  methods: {
    addCurrentDiameter(value) {
      this.currentDiameter += value
      this.currentDiameter = Math.round(this.currentDiameter * 1000) / 1000
    },
    subtractCurrentDiameter(value) {
      this.currentDiameter -= value
      this.currentDiameter = Math.round(this.currentDiameter * 1000) / 1000
    },
    addTargetDiameter(value) {
      this.targetDiameter += value
      this.targetDiameter = Math.round(this.targetDiameter * 1000) / 1000
    },
    subtractTargetDiameter(value) {
      this.targetDiameter -= value
      this.targetDiameter = Math.round(this.targetDiameter * 1000) / 1000
    },
    addDepthOfCut(value) {
      this.depthOfCut += value
      this.depthOfCut = Math.round(this.depthOfCut * 1000) / 1000
    },
    subtractDepthOfCut(value) {
      this.depthOfCut -= value
      this.depthOfCut = Math.round(this.depthOfCut * 1000) / 1000
    },
    completePass() {
      if (this.operationType() == 'Turning') {
        console.log('Turning')
        this.subtractCurrentDiameter(this.depthOfCut * 2)
      }
      if (this.operationType() == 'Boring') {
        console.log('Boring')
        this.addCurrentDiameter(this.depthOfCut * 2)
      }
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
