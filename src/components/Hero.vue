<template>
  <section id="hero" class="section relative overflow-hidden">
    <div class="container mx-auto text-center relative z-10">
      <div class="mb-6">
        <span class="inline-block px-4 py-2 rounded-full glass text-cyan text-sm font-mono">
          Available for opportunities
        </span>
      </div>

      <h1 class="font-display text-5xl md:text-7xl font-bold mb-4">
        <span class="text-white">{{ data.personal.name }}</span>
      </h1>

      <h2 class="font-display text-2xl md:text-4xl font-medium mb-6">
        <span class="text-gradient">{{ data.personal.title }}</span>
      </h2>

      <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
        {{ data.personal.tagline }}
      </p>

      <p class="text-gray-500 text-base mb-8">
        {{ data.personal.subtitle }}
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <a 
          href="#projects"
          @click.prevent="scrollTo('projects')"
          class="px-8 py-3 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all duration-300 glow-cyan"
        >
          View Projects
        </a>
        <a 
          href="#contact"
          @click.prevent="scrollTo('contact')"
          class="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-cyan hover:text-cyan transition-all duration-300"
        >
          Contact Me
        </a>
      </div>

      <div class="flex justify-center gap-6">
        <a 
          :href="data.personal.github" 
          target="_blank"
          class="text-gray-500 hover:text-cyan transition-colors"
        >
          <Github :size="24" />
        </a>
        <a 
          :href="data.personal.linkedin" 
          target="_blank"
          class="text-gray-500 hover:text-cyan transition-colors"
        >
          <Linkedin :size="24" />
        </a>
        <a 
          :href="`mailto:${data.personal.email}`"
          class="text-gray-500 hover:text-cyan transition-colors"
        >
          <Mail :size="24" />
        </a>
      </div>
    </div>

    <div class="absolute top-1/4 left-10 w-64 h-64 bg-cyan/5 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-10 w-64 h-64 bg-purple/5 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
  </section>
</template>

<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { usePortfolioStore } from '../stores/portfolio'
import { portfolioData as data } from '../data/portfolioData'

const store = usePortfolioStore()

const scrollTo = (sectionId) => {
  store.setActiveSection(sectionId)
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
