<template>
  <section id="skills" class="section relative">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Technical <span class="text-gradient">Skills</span>
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div 
          v-for="(skill, index) in data.skills" 
          :key="skill.name"
          class="glass rounded-xl p-5"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <span 
                class="w-3 h-3 rounded-full"
                :class="getCategoryColor(skill.category)"
              ></span>
              <span class="font-body text-white font-medium">{{ skill.name }}</span>
            </div>
            <span class="text-cyan font-mono text-sm">{{ skill.level }}%</span>
          </div>
          
          <div class="h-2 bg-white/5 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all duration-1000 ease-out animate-gradient"
              :class="getBarGradient(skill.category)"
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <div 
          v-for="category in categories" 
          :key="category.name"
          class="flex items-center gap-2 px-4 py-2 rounded-full glass"
        >
          <span 
            class="w-3 h-3 rounded-full"
            :class="category.color"
          ></span>
          <span class="text-sm text-gray-400">{{ category.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData as data } from '../data/portfolioData'

const categories = [
  { name: 'Backend', color: 'bg-cyan' },
  { name: 'Frontend', color: 'bg-purple' },
  { name: 'Specialized', color: 'bg-green-500' },
  { name: 'DevOps', color: 'bg-orange-500' }
]

const getCategoryColor = (category) => {
  const colors = {
    backend: 'bg-cyan',
    frontend: 'bg-purple',
    specialized: 'bg-green-500',
    devops: 'bg-orange-500'
  }
  return colors[category] || 'bg-gray-500'
}

const getBarGradient = (category) => {
  const gradients = {
    backend: 'bg-gradient-to-r from-cyan to-cyan/60',
    frontend: 'bg-gradient-to-r from-purple to-purple/60',
    specialized: 'bg-gradient-to-r from-green-500 to-green-500/60',
    devops: 'bg-gradient-to-r from-orange-500 to-orange-500/60'
  }
  return gradients[category] || 'bg-gradient-to-r from-gray-500 to-gray-500/60'
}
</script>
