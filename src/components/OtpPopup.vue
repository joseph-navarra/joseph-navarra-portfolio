<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div 
        v-if="store.otpState.isOpen"
        class="fixed bottom-6 right-6 z-50 w-80 glass rounded-2xl shadow-2xl shadow-cyan/10 overflow-hidden"
      >
        <div class="bg-gradient-to-r from-cyan/20 to-purple/20 px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <ShieldCheck :size="18" class="text-cyan" />
            <span class="font-display font-semibold text-white text-sm">OTP Verification</span>
          </div>
          <button @click="store.closeOtp" class="p-1 hover:bg-white/10 rounded transition-colors">
            <X :size="16" class="text-gray-400" />
          </button>
        </div>

        <div class="p-4 space-y-4">
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
            <p class="text-green-400 text-xs mb-1">Your OTP Code</p>
            <p class="text-cyan font-mono text-3xl font-bold tracking-widest">{{ store.otpState.generatedOtp }}</p>
          </div>

          <div>
            <label class="block text-xs text-gray-400 mb-2">Enter OTP Code</label>
            <input 
              v-model="store.otpState.otp"
              type="text"
              maxlength="6"
              placeholder="------"
              class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white text-center text-2xl font-mono tracking-[0.5em] placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
            />
          </div>

          <div class="flex gap-2">
            <button 
              @click="store.resendOtp"
              :disabled="store.otpState.isLoading"
              class="flex-1 px-3 py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-cyan hover:text-cyan transition-all"
            >
              Resend
            </button>
            <button 
              @click="verifyOtp"
              :disabled="store.otpState.isLoading || store.otpState.otp.length !== 6"
              class="flex-1 px-3 py-2 bg-cyan text-dark text-sm font-semibold rounded-lg hover:bg-cyan/90 transition-all flex items-center justify-center gap-2"
            >
              <Loader2 v-if="store.otpState.isLoading" :size="14" class="animate-spin" />
              <Check v-if="!store.otpState.isLoading" :size="14" />
              Verify
            </button>
          </div>

          <div v-if="store.otpState.logs.length" class="pt-3 border-t border-white/10">
            <div class="font-mono text-xs space-y-1">
              <p v-for="(log, index) in store.otpState.logs" :key="index" class="text-gray-500">
                <span class="text-cyan/60">></span> {{ log }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="fade">
      <div 
        v-if="store.otpState.isOpen"
        class="fixed inset-0 bg-black/50 z-40"
        @click="store.closeOtp"
      ></div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ShieldCheck, X, Loader2, Check } from 'lucide-vue-next'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()

const verifyOtp = async () => {
  store.setOtpLoading(true)
  store.addOtpLog('Verifying OTP...')
  
  await new Promise(r => setTimeout(r, 800))
  
  if (store.otpState.otp === store.otpState.generatedOtp) {
    store.addOtpLog('OTP verified!')
    await new Promise(r => setTimeout(r, 600))
    store.addOtpLog('Processing transaction...')
    
    const success = Math.random() > 0.1
    store.setOtpStatus(success ? 'success' : 'failed')
    store.addOtpLog(success ? 'Transaction completed!' : 'Transaction failed')
    
    if (success) {
      generateReceipt()
    }
    
    await new Promise(r => setTimeout(r, 500))
    store.closeOtp()
    
    if (success) {
      store.showReceipt({
        status: 'success',
        transactionRef: store.simulationState.transactionRef,
        ...store.simulationState
      })
    }
  } else {
    store.addOtpLog('Invalid OTP code')
    store.setOtpStatus('failed')
  }
  
  store.setOtpLoading(false)
}

const generateReceipt = () => {
  const sim = store.simulationState
  const amount = parseFloat(sim.amount) || 0
  const fee = amount > 0 ? (amount * 0.01).toFixed(2) : '0.00'
  
  store.receiptPreview.data = {
    date: new Date().toLocaleString(),
    project: sim.project?.title,
    amount: `₱${amount.toLocaleString()}`,
    fee: `₱${fee}`,
    total: `₱${(amount + parseFloat(fee)).toLocaleString()}`,
    ...sim
  }
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
