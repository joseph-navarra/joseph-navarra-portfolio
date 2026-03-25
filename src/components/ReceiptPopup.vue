<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div 
        v-if="store.receiptPreview.isOpen && store.receiptPreview.data"
        class="fixed bottom-6 right-6 z-50 w-80 glass rounded-2xl shadow-2xl shadow-green-500/10 overflow-hidden"
      >
        <div class="bg-gradient-to-r from-green-500/20 to-cyan/20 px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Receipt :size="18" class="text-green-400" />
            <span class="font-display font-semibold text-white text-sm">Transaction Receipt</span>
          </div>
          <button @click="store.closeReceipt" class="p-1 hover:bg-white/10 rounded transition-colors">
            <X :size="16" class="text-gray-400" />
          </button>
        </div>

        <div class="p-4 space-y-3">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check :size="16" class="text-green-400" />
            </div>
            <span class="text-green-400 font-semibold">Payment Successful</span>
          </div>

          <div class="bg-dark-light/50 rounded-lg p-3 space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-500">Reference</span>
              <span class="text-white font-mono text-xs">{{ store.receiptPreview.data.transactionRef }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Date</span>
              <span class="text-white text-xs">{{ store.receiptPreview.data.date }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Project</span>
              <span class="text-white text-xs">{{ store.receiptPreview.data.project }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Amount</span>
              <span class="text-cyan font-mono">{{ store.receiptPreview.data.amount }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Fee</span>
              <span class="text-white">{{ store.receiptPreview.data.fee }}</span>
            </div>
            <div class="flex justify-between pt-2 border-t border-white/10">
              <span class="text-gray-400 font-medium">Total</span>
              <span class="text-green-400 font-mono font-bold">{{ store.receiptPreview.data.total }}</span>
            </div>
          </div>

          <p class="text-gray-600 text-xs text-center italic">
            This is a preview only. No actual transaction occurred.
          </p>

          <button 
            @click="store.closeReceipt"
            class="w-full px-3 py-2 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-green-500 hover:text-green-400 transition-all"
          >
            Close Preview
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { Receipt, Check, X } from 'lucide-vue-next'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()
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
</style>
