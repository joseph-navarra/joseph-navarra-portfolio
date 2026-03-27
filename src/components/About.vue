<template>
  <section id="about" class="section relative">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-4">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-2xl blur-3xl"
            ></div>
            <div class="relative glass rounded-2xl p-8">
              <div class="text-center mb-8">
                <span
                  class="font-display text-6xl md:text-7xl font-bold tracking-tight"
                >
                  <span class="text-gradient">Jnvrr</span
                  ><span class="text-cyan">.</span>
                </span>
                <p class="text-gray-500 mt-2 text-sm">Full Stack Developer</p>
              </div>

              <div class="space-y-4">
                <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div class="p-2 rounded-lg bg-cyan/10">
                    <MapPin :size="18" class="text-cyan" />
                  </div>
                  <span class="text-gray-300 text-sm">{{
                    data.personal.location
                  }}</span>
                </div>

                <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div class="p-2 rounded-lg bg-purple/10">
                    <Briefcase :size="18" class="text-purple" />
                  </div>
                  <span class="text-gray-300 text-sm"
                    >Frontend Developer at Petnet Inc.</span
                  >
                </div>

                <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div class="p-2 rounded-lg bg-green-500/10">
                    <Clock :size="18" class="text-green-500" />
                  </div>
                  <span class="text-gray-300 text-sm">2+ Years Experience</span>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-white/10">
                <p class="text-gray-500 text-xs mb-3">Core Stack</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in coreSkills"
                    :key="skill"
                    class="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan/10 to-purple/10 text-gray-300 border border-white/10"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <h2
            class="font-display text-3xl md:text-4xl font-bold text-white mb-6"
          >
            About <span class="text-gradient">Me</span>
          </h2>

          <p class="text-gray-400 mb-6 leading-relaxed">
            {{ data.about.description }}
          </p>

          <p class="text-gray-400 mb-8 leading-relaxed">
            {{ data.about.shortBio }}
          </p>

          <div class="flex flex-wrap gap-3 mb-8">
            <a
              :href="data.personal.cvUrl"
              download="Joseph_Navarra_CV.pdf"
              class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan to-cyan/80 text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300"
            >
              <FileText :size="18" />
              Download CV
            </a>
            <a
              :href="data.personal.resumeUrl"
              download="Joseph_Navarra_Resume.pdf"
              class="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-medium rounded-lg hover:border-purple hover:text-purple transition-all duration-300"
            >
              <FileDown :size="18" />
              Download Resume
            </a>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              class="glass rounded-xl p-5 text-center group hover:border-cyan/30 transition-all duration-300"
            >
              <span
                class="block text-3xl font-bold font-mono text-cyan group-hover:scale-110 transition-transform"
                >~2</span
              >
              <span class="text-xs text-gray-500 mt-1 block">Years Exp.</span>
            </div>
            <div
              class="glass rounded-xl p-5 text-center group hover:border-purple/30 transition-all duration-300"
            >
              <span
                class="block text-3xl font-bold font-mono text-purple group-hover:scale-110 transition-transform"
                >15+</span
              >
              <span class="text-xs text-gray-500 mt-1 block">Projects</span>
            </div>
            <div
              class="glass rounded-xl p-5 text-center group hover:border-green-500/30 transition-all duration-300"
            >
              <span
                class="block text-3xl font-bold font-mono text-green-500 group-hover:scale-110 transition-transform"
                >25+</span
              >
              <span class="text-xs text-gray-500 mt-1 block"
                >Production Fixes</span
              >
            </div>
            <div
              class="glass rounded-xl p-5 text-center group hover:border-orange-500/30 transition-all duration-300"
            >
              <span
                class="block text-3xl font-bold font-mono text-orange-500 group-hover:scale-110 transition-transform"
                >100%</span
              >
              <span class="text-xs text-gray-500 mt-1 block"
                >SLA Compliance</span
              >
            </div>
            <div
              class="glass rounded-xl p-5 text-center group hover:border-pink-500/30 transition-all duration-300"
            >
              <span
                class="block text-3xl font-bold font-mono text-pink-500 group-hover:scale-110 transition-transform"
                >20+</span
              >
              <span class="text-xs text-gray-500 mt-1 block"
                >APIs Integrated</span
              >
            </div>
            <div
              class="glass rounded-xl p-5 text-center group hover:border-yellow-500/30 transition-all duration-300"
            >
              <span
                class="block text-3xl font-bold font-mono text-yellow-500 group-hover:scale-110 transition-transform"
                >99.9%</span
              >
              <span class="text-xs text-gray-500 mt-1 block">Uptime</span>
            </div>
          </div>

          <div class="mt-8">
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
    </div>
  </section>
</template>

<script setup>
import {
  MapPin,
  ArrowRight,
  FileText,
  FileDown,
  Briefcase,
  Clock,
} from "lucide-vue-next";
import { portfolioData as data } from "../data/portfolioData";
import { usePortfolioStore } from "../stores/portfolio";

const store = usePortfolioStore();

const coreSkills = ["Vue.js", "JavaScript", "Laravel", "Node.js", "HTML/CSS"];

const scrollTo = (sectionId) => {
  store.setActiveSection(sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
