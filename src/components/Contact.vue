<template>
  <section id="contact" class="section relative">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Get In <span class="text-gradient">Touch</span>
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          To connect for inquiries, collaborations, or support through available
          contact channels.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <div class="mb-6">
            <span
              class="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span class="text-gradient">Jnvrr</span
              ><span class="text-gradient">.</span>
            </span>
          </div>

          <h3 class="font-display text-xl font-semibold text-white mb-6">
            Contact Information
          </h3>

          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-cyan/10">
                <Mail :size="24" class="text-cyan" />
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Email</p>
                <a
                  :href="`mailto:${data.personal.email}`"
                  class="text-white hover:text-cyan transition-colors"
                >
                  {{ data.personal.email }}
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-purple/10">
                <MapPin :size="24" class="text-purple" />
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Location</p>
                <p class="text-white">{{ data.personal.location }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="p-3 rounded-lg bg-green-500/10">
                <Calendar :size="24" class="text-green-500" />
              </div>
              <div>
                <p class="text-gray-500 text-sm mb-1">Availability</p>
                <p class="text-white">Open for opportunities</p>
              </div>
            </div>

            <button
              @click="openPhone"
              class="w-full flex items-center gap-4 p-4 glass rounded-xl hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 cursor-pointer group"
            >
              <div
                class="p-3 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors"
              >
                <Phone :size="24" class="text-green-500" />
              </div>
              <div class="text-left flex-1">
                <p class="text-gray-500 text-sm mb-1">Call Me</p>
                <p class="text-white font-medium">{{ data.personal.phone }}</p>
              </div>
              <div
                class="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors"
              >
                <ArrowUpRight :size="20" class="text-green-500" />
              </div>
            </button>
          </div>

          <div class="mt-8 flex gap-4">
            <a
              :href="data.personal.github"
              target="_blank"
              class="p-3 glass rounded-lg text-gray-400 hover:text-cyan hover:border-cyan transition-all duration-300"
            >
              <Github :size="24" />
            </a>
            <a
              :href="data.personal.linkedin"
              target="_blank"
              class="p-3 glass rounded-lg text-gray-400 hover:text-cyan hover:border-cyan transition-all duration-300"
            >
              <Linkedin :size="24" />
            </a>
          </div>
        </div>

        <div class="glass rounded-xl p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm text-gray-400 mb-2">Name</label>
              <input
                v-model="store.formData.name"
                type="text"
                placeholder="Your name"
                class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
                required
              />
            </div>

            <div>
              <label class="block text-sm text-gray-400 mb-2">Email</label>
              <input
                v-model="store.formData.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors"
                required
              />
            </div>

            <div>
              <label class="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                v-model="store.formData.message"
                rows="4"
                placeholder="Your message..."
                class="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 bg-cyan text-dark font-semibold rounded-lg hover:bg-cyan/90 transition-all duration-300 flex items-center justify-center gap-2"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
              <Send v-if="!isSubmitting" :size="18" />
            </button>

            <Transition name="fade">
              <div
                v-if="showSuccess"
                class="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
              >
                Message sent successfully!
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Send,
  Phone,
  ArrowUpRight,
} from "lucide-vue-next";
import { portfolioData as data } from "../data/portfolioData";
import { usePortfolioStore } from "../stores/portfolio";

const store = usePortfolioStore();
const isSubmitting = ref(false);
const showSuccess = ref(false);

const openPhone = () => {
  window.open(`tel:${data.personal.phone}`, "_self");
};

const handleSubmit = async () => {
  isSubmitting.value = true;

  await new Promise((resolve) => setTimeout(resolve, 1500));

  isSubmitting.value = false;
  showSuccess.value = true;
  store.resetForm();

  setTimeout(() => {
    showSuccess.value = false;
  }, 3000);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
