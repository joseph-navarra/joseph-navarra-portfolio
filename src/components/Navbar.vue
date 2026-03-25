<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled ? 'py-2' : 'py-4'">
    <div class="container mx-auto px-4 md:px-6">
      <div 
        class="relative glass rounded-2xl px-6 py-3 transition-all duration-300"
        :class="scrolled ? 'shadow-lg shadow-black/20' : ''"
      >
        <div class="flex items-center justify-between">
          <a 
            href="#hero" 
            @click.prevent="scrollTo('hero')"
            class="group flex items-center gap-2"
          >
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
              <span class="text-dark font-bold text-sm">JN</span>
            </div>
            <span class="font-display text-lg font-bold text-white hidden sm:block">
              Joseph<span class="text-cyan">.</span>
            </span>
          </a>

          <div class="hidden lg:flex items-center gap-1">
            <a 
              v-for="item in navItems" 
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollTo(item.id)"
              class="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group"
              :class="[
                store.activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              <span class="relative z-10">{{ item.label }}</span>
              
              <div 
                v-if="store.activeSection === item.id"
                class="absolute inset-0 bg-gradient-to-r from-cyan/10 to-purple/10 rounded-lg border border-cyan/20"
              ></div>
              
              <div class="absolute inset-0 hover:bg-white/5 rounded-lg transition-colors"></div>
            </a>
          </div>

          <div class="hidden lg:flex items-center gap-3">
            <a 
              href="#contact"
              @click.prevent="scrollTo('contact')"
              class="px-5 py-2 bg-gradient-to-r from-cyan to-cyan/80 text-dark text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <button 
            @click="store.toggleMenu()"
            class="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu v-if="!store.isMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>

        <Transition name="slide">
          <div 
            v-if="store.isMenuOpen" 
            class="lg:hidden mt-4 pt-4 border-t border-white/10"
          >
            <div class="flex flex-col gap-1">
              <a 
                v-for="item in navItems" 
                :key="item.id"
                :href="`#${item.id}`"
                @click.prevent="scrollTo(item.id)"
                class="px-4 py-3 text-sm font-medium transition-colors duration-300 rounded-lg"
                :class="[
                  store.activeSection === item.id 
                    ? 'text-cyan bg-cyan/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                ]"
              >
                {{ item.label }}
              </a>
              <a 
                href="#contact"
                @click.prevent="scrollTo('contact')"
                class="mt-2 px-4 py-3 bg-gradient-to-r from-cyan to-cyan/80 text-dark text-sm font-semibold rounded-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()
const scrolled = ref(false)

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'dashboard', label: 'Demo' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

const scrollTo = (sectionId) => {
  store.setActiveSection(sectionId)
  store.closeMenu()
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  const sections = navItems.map(item => item.id)
  const scrollY = window.scrollY + 150

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollY) {
      store.setActiveSection(sections[i])
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
