<template>
  <div 
    class="glass rounded-xl p-6 cursor-pointer glass-hover transition-all duration-300 h-full relative overflow-hidden"
    :class="{ 'ring-2 ring-cyan/50 bg-cyan/5': isActive, 'hover:ring-1 hover:ring-cyan/30': !isActive }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="$emit('viewDemo')"
  >
    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 transition-opacity duration-300" :class="isHovered || isActive ? 'opacity-100' : 'opacity-50'"></div>
    
    <div class="relative">
      <div class="flex items-start justify-between mb-4">
        <div class="p-3 rounded-lg transition-colors duration-300" :class="isActive ? 'bg-cyan/20' : isHovered ? 'bg-cyan/20' : 'bg-purple/10'">
          <component :is="iconComponent" :size="28" :class="isActive || isHovered ? 'text-cyan' : 'text-purple'" />
        </div>
        <span 
          class="px-3 py-1 text-xs font-mono rounded-full"
          :class="{
            'bg-green-500/20 text-green-400': project.status === 'live',
            'bg-blue-500/20 text-blue-400': project.status === 'completed'
          }"
        >
          {{ project.status === 'live' ? '● LIVE' : '✓ DONE' }}
        </span>
      </div>

      <h3 class="font-display text-xl font-semibold text-white mb-3">
        {{ project.title }}
      </h3>

      <p class="text-gray-400 text-sm mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.tech" 
          :key="tech"
          class="px-2 py-1 text-xs font-mono rounded bg-white/5 text-gray-400"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center gap-2 text-sm transition-colors duration-300" :class="isActive || isHovered ? 'text-cyan' : 'text-gray-500'">
        <Play :size="16" class="transition-transform duration-300" :class="{ 'translate-x-1': isHovered || isActive }" />
        <span>{{ isActive ? 'Simulation Open' : 'Try Demo' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Wallet, 
  Search, 
  CreditCard, 
  Smartphone,
  Play 
} from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

defineEmits(['viewDemo'])

const isHovered = ref(false)

const iconMap = {
  Wallet,
  Search,
  CreditCard,
  Smartphone
}

const iconComponent = computed(() => iconMap[props.project.icon] || Wallet)
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
