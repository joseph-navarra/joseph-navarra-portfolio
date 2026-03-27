<template>
  <section id="dashboard" class="section relative">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Interactive <span class="text-gradient">Demo</span>
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Select a project from above to test the payment simulation
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="glass rounded-2xl p-8">
          <div v-if="!store.simulationState.project" class="text-center py-12">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-purple/20 flex items-center justify-center">
              <MousePointerClick :size="36" class="text-purple" />
            </div>
            <h3 class="font-display text-xl font-semibold text-white mb-2">No Project Selected</h3>
            <p class="text-gray-400 text-sm">Click on any project card above to start a simulation.</p>
          </div>

          <div v-else>
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 rounded-lg bg-cyan/20">
                <component :is="getIcon(store.simulationState.project.icon)" :size="28" class="text-cyan" />
              </div>
              <div class="flex-1">
                <h3 class="font-display text-2xl font-bold text-white">{{ store.simulationState.project.title }}</h3>
                <p class="text-gray-500 text-sm">Ref: {{ store.simulationState.transactionRef }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="space-y-4">
                <template v-if="store.simulationState.project.icon === 'Key'">
                  <div>
                    <label class="block text-sm text-gray-400 mb-1.5">Payload / Message</label>
                    <textarea 
                      v-model="kmsPayload"
                      rows="4"
                      placeholder="Enter message to sign..."
                      class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors font-mono text-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label class="block text-sm text-gray-400 mb-1.5">Key Name</label>
                    <input 
                      v-model="kmsKeyName"
                      type="text"
                      placeholder="projects/.../locations/.../keyRings/.../cryptoKeys/..."
                      class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors font-mono text-xs"
                    />
                  </div>
                </template>

                <template v-else-if="store.simulationState.project.icon === 'Search'">
                  <div>
                    <label class="block text-sm text-gray-400 mb-1.5">Transaction Reference</label>
                    <input 
                      v-model="searchRef"
                      type="text"
                      placeholder="TXN-XXXXXXXX"
                      class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                </template>

                <template v-else-if="store.simulationState.project.icon === 'Wallet'">
                  <div class="flex gap-2 mb-4">
                    <button 
                      @click="cashTab = 'in'"
                      class="flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300"
                      :class="cashTab === 'in' ? 'bg-cyan text-dark' : 'bg-white/5 text-gray-400 hover:bg-white/10'"
                    >
                      Cash-In
                    </button>
                    <button 
                      @click="cashTab = 'out'"
                      class="flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300"
                      :class="cashTab === 'out' ? 'bg-purple text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'"
                    >
                      Cash-Out
                    </button>
                  </div>

                  <template v-if="cashTab === 'in'">
                    <div v-for="field in getCashInFields()" :key="field.name">
                      <label class="block text-sm text-gray-400 mb-1.5">{{ field.label }}</label>
                      <select 
                        v-if="field.type === 'select'"
                        v-model="field.model.value"
                        class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan transition-colors"
                      >
                        <option value="" disabled>Select {{ field.label }}</option>
                        <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
                      </select>
                      <input 
                        v-else
                        v-model="field.model.value"
                        :type="field.type || 'text'"
                        :placeholder="field.placeholder"
                        class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
                      />
                    </div>
                  </template>

                  <template v-else>
                    <div v-for="field in getCashOutFields()" :key="field.name">
                      <label class="block text-sm text-gray-400 mb-1.5">{{ field.label }}</label>
                      <select 
                        v-if="field.type === 'select'"
                        v-model="field.model.value"
                        class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan transition-colors"
                      >
                        <option value="" disabled>Select {{ field.label }}</option>
                        <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
                      </select>
                      <input 
                        v-else
                        v-model="field.model.value"
                        :type="field.type || 'text'"
                        :placeholder="field.placeholder"
                        class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
                      />
                    </div>
                  </template>
                </template>

                <template v-else>
                  <div v-for="field in getInputFields()" :key="field.name">
                    <label class="block text-sm text-gray-400 mb-1.5">{{ field.label }}</label>
                    <select 
                      v-if="field.type === 'select'"
                      v-model="field.model.value"
                      class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan transition-colors"
                    >
                      <option value="" disabled>Select {{ field.label }}</option>
                      <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
                    </select>
                    <input 
                      v-else
                      v-model="field.model.value"
                      :type="field.type || 'text'"
                      :placeholder="field.placeholder"
                      class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                </template>

                <button 
                  @click="runSimulation"
                  :disabled="store.simulationState.step === 'processing'"
                  class="w-full mt-4 px-6 py-3 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap v-if="store.simulationState.step !== 'processing'" :size="18" />
                  <Loader2 v-if="store.simulationState.step === 'processing'" :size="18" class="animate-spin" />
                  <span>{{ store.simulationState.step === 'processing' ? 'Processing...' : 'Run Simulation' }}</span>
                </button>
              </div>

              <div class="glass rounded-xl p-6 bg-dark-light/50">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-gray-500 text-sm font-mono">
                    {{ store.simulationState.project.icon === 'Key' ? 'Signing Process' : store.simulationState.project.icon === 'Search' ? 'Transaction Details' : 'Simulation Log' }}
                  </span>
                  <span 
                    v-if="store.simulationState.step === 'complete'"
                    class="px-2 py-1 text-xs font-mono rounded"
                    :class="store.simulationState.status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'"
                  >
                    {{ store.simulationState.status === 'success' ? '● SUCCESS' : '✗ FAILED' }}
                  </span>
                </div>
                
                <div class="max-h-80 overflow-y-auto">
                  <template v-if="store.simulationState.project.icon === 'Key'">
                    <div class="space-y-3">
                      <div 
                        v-for="(step, index) in kmsSteps" 
                        :key="step.id"
                        class="flex items-start gap-3"
                      >
                        <div class="flex flex-col items-center">
                          <div 
                            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                            :class="getStepClass(index)"
                          >
                            <Check v-if="step.status === 'complete'" :size="16" />
                            <Loader2 v-else-if="step.status === 'active'" :size="14" class="animate-spin" />
                            <span v-else>{{ index + 1 }}</span>
                          </div>
                          <div v-if="index < kmsSteps.length - 1" class="w-0.5 h-6" :class="step.status === 'complete' ? 'bg-green-500' : 'bg-white/10'"></div>
                        </div>
                        <div class="flex-1 pt-1">
                          <p class="text-sm font-medium" :class="step.status === 'active' ? 'text-cyan' : step.status === 'complete' ? 'text-green-400' : 'text-gray-500'">
                            {{ step.label }}
                          </p>
                          <p v-if="step.detail" class="text-xs text-gray-600 mt-1 font-mono">
                            {{ step.detail }}
                          </p>
                          <div v-if="step.status === 'active' && step.detail" class="mt-2 p-2 bg-cyan/5 rounded border border-cyan/20">
                            <p class="text-xs text-cyan font-mono animate-pulse">{{ step.activeText }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>

                  <template v-else-if="store.simulationState.project.icon === 'Search' && store.simulationState.step === 'complete'">
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-gray-500">Reference</span>
                        <span class="text-white">TXN-84729103</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-500">Date</span>
                        <span class="text-white">{{ new Date().toLocaleDateString() }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-500">Status</span>
                        <span class="text-green-400">COMPLETED</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-500">Amount</span>
                        <span class="text-cyan">₱1,500.00</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-500">Type</span>
                        <span class="text-white">Cash-In</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-500">Service</span>
                        <span class="text-white">Service 2</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-500">Account</span>
                        <span class="text-white">09XX XXX XXXX</span>
                      </div>
                    </div>
                  </template>

                  <template v-else>
                    <p v-for="(log, index) in simulationLogs" :key="index" class="text-gray-400 text-sm mb-2">
                      <span class="text-cyan">></span> {{ log }}
                    </p>
                    <p v-if="!simulationLogs.length" class="text-gray-600 italic text-sm">
                      Click "Run Simulation" to begin
                    </p>
                  </template>
                </div>

                <div v-if="store.otpState.isOpen && store.simulationState.project.icon !== 'Search' && store.simulationState.project.icon !== 'Key'" class="mt-4 pt-4 border-t border-white/10">
                  <div class="flex items-center gap-2 text-sm text-green-400">
                    <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span>OTP Popup opened in corner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="store.simulationState.project" class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div 
            v-for="(stat, index) in demoStats" 
            :key="index"
            class="glass rounded-xl p-4 text-center"
          >
            <span class="text-2xl font-bold font-mono text-cyan">{{ stat.value }}</span>
            <p class="text-xs text-gray-500 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, reactive } from 'vue'
import { Wallet, Search, CreditCard, Smartphone, Zap, MousePointerClick, Loader2, Key, Check } from 'lucide-vue-next'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()

const simulationLogs = ref([])
const kmsPayload = ref('{"amount": 1000, "recipient": "user123", "timestamp": "2024-01-15T10:30:00Z"}')
const kmsKeyName = ref('projects/petnet-prod/locations/global/keyRings/payment-keyring/cryptoKeys/signing-key')
const cashTab = ref('in')

const kmsSteps = reactive([
  { id: 'prepare', label: 'Prepare Request Payload', status: 'pending', detail: '', activeText: 'Building HMAC-SHA256 signature...' },
  { id: 'sign', label: 'Sign Request with KMS', status: 'pending', detail: '', activeText: 'Calling GCP KMS asymmetricSign()...' },
  { id: 'send', label: 'Send Signed Request', status: 'pending', detail: '', activeText: 'HTTP POST to API endpoint...' },
  { id: 'receive', label: 'Receive Signed Response', status: 'pending', detail: '', activeText: 'Waiting for server response...' },
  { id: 'verify', label: 'Verify Response Signature', status: 'pending', detail: '', activeText: 'Validating signature with public key...' },
  { id: 'complete', label: 'Transaction Complete', status: 'pending', detail: '', activeText: '' }
])

watch(() => store.simulationState.project, () => {
  simulationLogs.value = []
  store.simulationState.step = 'input'
  store.simulationState.status = ''
  cashTab.value = 'in'
  kmsSteps.forEach(s => {
    s.status = 'pending'
    s.detail = ''
  })
})

watch(() => store.otpState.logs, (newLogs) => {
  if (newLogs.length) {
    simulationLogs.value = [...simulationLogs.value, ...newLogs]
  }
}, { deep: true })

const getIcon = (iconName) => {
  const icons = { Wallet, Search, CreditCard, Smartphone, Key }
  return icons[iconName] || Key
}

const getStepClass = (index) => {
  const step = kmsSteps[index]
  if (step.status === 'complete') return 'bg-green-500/20 text-green-400 border border-green-500/50'
  if (step.status === 'active') return 'bg-cyan/20 text-cyan border border-cyan/50'
  return 'bg-white/5 text-gray-500 border border-white/10'
}

const demoStats = computed(() => {
  const project = store.simulationState.project
  if (!project) return []
  
  const statsMap = {
    'Wallet': [
      { label: "Today's Cash-ins", value: '₱125,430' },
      { label: 'Cash-outs', value: '₱89,200' },
      { label: 'Success Rate', value: '98.5%' },
      { label: 'Avg. Time', value: '2.3s' }
    ],
    'Search': [
      { label: 'Queries Today', value: '1,247' },
      { label: 'Avg Response', value: '0.3s' },
      { label: 'Cache Hit', value: '87%' },
      { label: 'Uptime', value: '99.9%' }
    ],
    'CreditCard': [
      { label: 'Transactions', value: '₱89,200' },
      { label: 'Processed', value: '45' },
      { label: 'Failed', value: '2' },
      { label: 'Pending', value: '1' }
    ],
    'Smartphone': [
      { label: 'Loads Today', value: '234' },
      { label: 'Networks', value: '3' },
      { label: 'Success Rate', value: '99.7%' },
      { label: 'Commissions', value: '₱1,890' }
    ],
    'Key': [
      { label: 'Signed Today', value: '12,847' },
      { label: 'Verified', value: '100%' },
      { label: 'Avg Latency', value: '45ms' },
      { label: 'Uptime', value: '99.99%' }
    ]
  }
  
  return statsMap[project.icon] || []
})

const getCashInFields = () => [
  { name: 'phone', label: 'Phone Number', placeholder: '09XX XXX XXXX', model: { value: '' }, type: 'tel' },
  { name: 'amount', label: 'Cash-In Amount (₱)', placeholder: '1000.00', model: { value: '' }, type: 'number' },
  { name: 'service', label: 'Cash-In Service', placeholder: '', model: { value: '' }, type: 'select', options: ['Service 1', 'Service 2', 'Service 3'] }
]

const getCashOutFields = () => [
  { name: 'phone', label: 'Phone Number', placeholder: '09XX XXX XXXX', model: { value: '' }, type: 'tel' },
  { name: 'amount', label: 'Cash-Out Amount (₱)', placeholder: '500.00', model: { value: '' }, type: 'number' },
  { name: 'method', label: 'Withdrawal Method', placeholder: '', model: { value: '' }, type: 'select', options: ['Bank Transfer', 'E-Wallet', 'Over-the-Counter'] }
]

const getInputFields = () => {
  const project = store.simulationState.project
  if (!project) return []

  const fields = {
    'CreditCard': [
      { name: 'cardLast4', label: 'Card Last 4 Digits', placeholder: 'XXXX', model: { value: '' }, type: 'text' },
      { name: 'amount', label: 'Amount to Send (₱)', placeholder: '500.00', model: { value: '' }, type: 'number' },
      { name: 'recipient', label: 'Recipient Name', placeholder: 'Juan Dela Cruz', model: { value: '' } }
    ],
    'Smartphone': [
      { name: 'number', label: 'Mobile Number', placeholder: '0917 XXX XXXX', model: { value: '' }, type: 'tel' },
      { name: 'amount', label: 'Load Amount (₱)', placeholder: '50', model: { value: '' }, type: 'number' },
      { name: 'network', label: 'Network', placeholder: '', model: { value: '' }, type: 'select', options: ['Network 1', 'Network 2', 'Network 3'] }
    ]
  }

  return fields[project.icon] || []
}

const getCurrentFields = () => {
  const project = store.simulationState.project
  if (!project) return []
  
  if (project.icon === 'Wallet') {
    return cashTab.value === 'in' ? getCashInFields() : getCashOutFields()
  }
  return getInputFields()
}

const getInput1 = () => {
  const fields = getCurrentFields()
  return fields[0]?.model?.value || ''
}

const getAmount = () => {
  const fields = getCurrentFields()
  return fields.find(f => f.name === 'amount')?.model?.value || ''
}

const resetKmsSteps = () => {
  kmsSteps.forEach(s => {
    s.status = 'pending'
    s.detail = ''
  })
}

const setKmsStep = (index, status, detail = '') => {
  kmsSteps[index].status = status
  if (detail) kmsSteps[index].detail = detail
}

const runSimulation = async () => {
  simulationLogs.value = []
  store.simulationState.step = 'processing'
  
  const project = store.simulationState.project

  if (project.icon === 'Key') {
    await runKmsSimulation()
  } else if (project.icon === 'Search') {
    await runSearchSimulation()
  } else if (project.icon === 'Wallet') {
    await runWalletSimulation()
  } else {
    await runGenericSimulation()
  }
}

const runKmsSimulation = async () => {
  resetKmsSteps()
  
  setKmsStep(0, 'active')
  await new Promise(r => setTimeout(r, 800))
  setKmsStep(0, 'complete', `Payload size: ${kmsPayload.value.length} bytes`)
  
  setKmsStep(1, 'active')
  await new Promise(r => setTimeout(r, 1000))
  const signature = `sig_${Math.random().toString(36).substring(2, 15)}...`
  setKmsStep(1, 'complete', `Signature: ${signature.substring(0, 30)}...`)
  
  setKmsStep(2, 'active')
  await new Promise(r => setTimeout(r, 600))
  setKmsStep(2, 'complete', `POST /api/v1/sign 200 OK`)
  
  setKmsStep(3, 'active')
  await new Promise(r => setTimeout(r, 800))
  setKmsStep(3, 'complete', `Response signature received`)
  
  setKmsStep(4, 'active')
  await new Promise(r => setTimeout(r, 700))
  setKmsStep(4, 'complete', `Signature verified: VALID`)
  
  setKmsStep(5, 'active')
  await new Promise(r => setTimeout(r, 400))
  store.simulationState.status = 'success'
  store.simulationState.step = 'complete'
  setKmsStep(5, 'complete', `Transaction ID: TXN-${Date.now().toString().slice(-8)}`)
}

const runSearchSimulation = async () => {
  await new Promise(r => setTimeout(r, 600))
  simulationLogs.value.push(`Initializing Transaction Inquiry...`)
  
  await new Promise(r => setTimeout(r, 500))
  simulationLogs.value.push(`Validating reference...`)
  
  await new Promise(r => setTimeout(r, 400))
  simulationLogs.value.push(`Querying transaction database...`)
  
  await new Promise(r => setTimeout(r, 400))
  simulationLogs.value.push(`Transaction found!`)
  
  store.simulationState.status = 'success'
  store.simulationState.step = 'complete'
}

const runWalletSimulation = async () => {
  const input1 = getInput1()
  const amount = getAmount()
  const tab = cashTab.value

  await new Promise(r => setTimeout(r, 600))
  simulationLogs.value.push(`Initializing ${tab === 'in' ? 'Cash-In' : 'Cash-Out'} Module...`)
  
  await new Promise(r => setTimeout(r, 500))
  simulationLogs.value.push(`Validating account...`)
  
  await new Promise(r => setTimeout(r, 400))
  simulationLogs.value.push(`Account: ${input1 || 'demo-user'}`)
  
  if (amount) {
    await new Promise(r => setTimeout(r, 300))
    simulationLogs.value.push(`Amount: ₱${parseFloat(amount).toLocaleString()}`)
  }

  await new Promise(r => setTimeout(r, 500))
  
  if (tab === 'in') {
    simulationLogs.value.push(`Verifying payment reference...`)
    simulationLogs.value.push(`Processing cash-in...`)
  } else {
    simulationLogs.value.push(`Checking withdrawal method...`)
    simulationLogs.value.push(`Processing cash-out...`)
  }

  await new Promise(r => setTimeout(r, 400))
  simulationLogs.value.push('Generating secure OTP...')

  store.openOtp()
  store.simulationState.step = 'input'
}

const runGenericSimulation = async () => {
  const project = store.simulationState.project
  const input1 = getInput1()
  const amount = getAmount()

  await new Promise(r => setTimeout(r, 600))
  simulationLogs.value.push(`Initializing ${project.title}...`)
  
  await new Promise(r => setTimeout(r, 500))
  simulationLogs.value.push(`Validating account...`)
  
  await new Promise(r => setTimeout(r, 400))
  simulationLogs.value.push(`Input: ${input1 || 'demo-user'}`)
  
  if (amount) {
    await new Promise(r => setTimeout(r, 300))
    simulationLogs.value.push(`Amount: ₱${parseFloat(amount).toLocaleString()}`)
  }

  await new Promise(r => setTimeout(r, 500))
  simulationLogs.value.push(project.icon === 'Smartphone'
    ? 'Checking network availability...'
    : 'Connecting to payment gateway...'
  )

  await new Promise(r => setTimeout(r, 400))
  simulationLogs.value.push('Generating secure OTP...')

  store.openOtp()
  store.simulationState.step = 'input'
}
</script>
