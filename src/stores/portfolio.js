import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  const activeSection = ref('hero')
  const isMenuOpen = ref(false)
  
  const formData = ref({
    name: '',
    email: '',
    message: ''
  })

  const simulationState = ref({
    project: null,
    step: 'input',
    input1: '',
    input2: '',
    amount: '',
    transactionRef: ''
  })

  const otpState = ref({
    isOpen: false,
    otp: '',
    generatedOtp: '',
    isLoading: false,
    status: '',
    logs: []
  })

  const receiptPreview = ref({
    isOpen: false,
    data: null
  })

  const currencies = ['PHP', 'USD', 'EUR', 'GBP']
  const currencySymbols = { PHP: '₱', USD: '$', EUR: '€', GBP: '£' }
  const currentSymbol = computed(() => currencySymbols['PHP'])

  function setActiveSection(section) {
    activeSection.value = section
    isMenuOpen.value = false
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    isMenuOpen.value = false
  }

  function updateFormData(field, value) {
    formData.value[field] = value
  }

  function resetForm() {
    formData.value = { name: '', email: '', message: '' }
  }

  function startSimulation(project) {
    simulationState.value = {
      project,
      step: 'input',
      input1: '',
      input2: '',
      amount: '',
      transactionRef: 'TXN-' + Date.now().toString().slice(-8)
    }
    const element = document.getElementById('dashboard')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function setSimulationStep(step) {
    simulationState.value.step = step
  }

  function openOtp() {
    otpState.value = {
      isOpen: true,
      otp: '',
      generatedOtp: Math.floor(100000 + Math.random() * 900000).toString(),
      isLoading: false,
      status: '',
      logs: []
    }
  }

  function closeOtp() {
    otpState.value.isOpen = false
  }

  function resendOtp() {
    otpState.value.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString()
    otpState.value.otp = ''
  }

  function showReceipt(data) {
    receiptPreview.value = {
      isOpen: true,
      data
    }
  }

  function closeReceipt() {
    receiptPreview.value.isOpen = false
  }

  function setOtpLoading(loading) {
    otpState.value.isLoading = loading
  }

  function setOtpStatus(status) {
    otpState.value.status = status
  }

  function addOtpLog(message) {
    otpState.value.logs.push(message)
  }

  return {
    activeSection,
    isMenuOpen,
    formData,
    simulationState,
    otpState,
    receiptPreview,
    currentSymbol,
    setActiveSection,
    toggleMenu,
    closeMenu,
    updateFormData,
    resetForm,
    startSimulation,
    setSimulationStep,
    openOtp,
    closeOtp,
    resendOtp,
    showReceipt,
    closeReceipt,
    setOtpLoading,
    setOtpStatus,
    addOtpLog
  }
})
