<template>
  <div class="grid-bg gradient-mesh min-h-screen">
    <Navbar />
    
    <main>
      <Hero />
      <Projects />
      <DashboardPreview />
      <Skills />
      <About />
      <Contact />
    </main>

    <OtpPopup />
    <ReceiptPopup />

    <footer class="py-8 border-t border-white/10">
      <div class="container mx-auto px-6 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} John Developer. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import DashboardPreview from './components/DashboardPreview.vue'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import OtpPopup from './components/OtpPopup.vue'
import ReceiptPopup from './components/ReceiptPopup.vue'
</script>
