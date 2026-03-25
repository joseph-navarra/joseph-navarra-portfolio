<template>
  <section id="projects" class="section relative">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span class="text-gradient">Projects</span>
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Click on any project to see an interactive simulation demo
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          v-for="project in data.projects" 
          :key="project.id" 
          :project="project"
          @view-demo="openDemo(project)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { portfolioData as data } from '../data/portfolioData'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()

const openDemo = (project) => {
  store.startSimulation(project)
}
</script>
