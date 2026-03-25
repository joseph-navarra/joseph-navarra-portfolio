<template>
  <section id="about" class="section relative">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="relative">
          <div class="aspect-square max-w-md mx-auto relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-2xl blur-2xl"
            ></div>
            <div
              class="relative glass rounded-2xl p-8 h-full flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan to-purple p-1"
                >
                  <div
                    class="w-full h-full rounded-full bg-dark-light flex items-center justify-center"
                  >
                    <span class="text-5xl font-display font-bold text-gradient"
                      >JN</span
                    >
                  </div>
                </div>
                <h3 class="font-display text-2xl font-bold text-white mb-2">
                  {{ data.personal.name }}
                </h3>
                <p class="text-gray-400 text-sm mb-4">
                  {{ data.personal.title }}
                </p>
                <div
                  class="flex items-center justify-center gap-2 text-gray-500 text-sm"
                >
                  <MapPin :size="16" />
                  <span>{{ data.personal.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2
            class="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            About <span class="text-gradient">Me</span>
          </h2>

          <p class="text-gray-400 mb-4 leading-relaxed">
            {{ data.about.description }}
          </p>

          <p class="text-gray-400 mb-8 leading-relaxed">
            {{ data.about.shortBio }}
          </p>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            <div class="glass rounded-xl p-4 text-center">
              <span class="block text-2xl font-bold font-mono text-cyan"
                >~2</span
              >
              <span class="text-xs text-gray-500">Years Exp.</span>
            </div>
            <div class="glass rounded-xl p-4 text-center">
              <span class="block text-2xl font-bold font-mono text-purple"
                >15+</span
              >
              <span class="text-xs text-gray-500">Projects</span>
            </div>
            <div class="glass rounded-xl p-4 text-center">
              <span class="block text-2xl font-bold font-mono text-green-500"
                >25+</span
              >
              <span class="text-xs text-gray-500">Production Fixes</span>
            </div>
            <div class="glass rounded-xl p-4 text-center">
              <span class="block text-2xl font-bold font-mono text-orange-500"
                >100%</span
              >
              <span class="text-xs text-gray-500">SLA Compliance</span>
            </div>
            <div class="glass rounded-xl p-4 text-center">
              <span class="block text-2xl font-bold font-mono text-pink-500"
                >20+</span
              >
              <span class="text-xs text-gray-500">APIs Integrated</span>
            </div>
            <div class="glass rounded-xl p-4 text-center">
              <span class="block text-2xl font-bold font-mono text-yellow-500"
                >99.9%</span
              >
              <span class="text-xs text-gray-500">Uptime</span>
            </div>
          </div>
 

          <a
            href="#contact"
            @click.prevent="scrollTo('contact')"
            class="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all duration-300"
          >
            Let's Work Together
            <ArrowRight :size="18" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, ArrowRight } from "lucide-vue-next";
import { portfolioData as data } from "../data/portfolioData";
import { usePortfolioStore } from "../stores/portfolio";

const store = usePortfolioStore();

const scrollTo = (sectionId) => {
  store.setActiveSection(sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
