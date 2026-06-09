<template>
  <TelaFormulario
    titulo="Anfitriao"
    endpoint="/anfitrioes/"
    :campos="campos"
  />
</template>

<script>
import TelaFormulario from '@/components/TelaFormulario.vue'

export default {
  name: 'CriarAnfitriaoView',
  components: { TelaFormulario },
  data() {
    return {
      campos: [
        { nome: 'nome', label: 'Nome' },
        { nome: 'email', label: 'E-mail', tipo: 'email' },
        { nome: 'telefone', label: 'Telefone' },
        { nome: 'documento', label: 'Documento' },
        { nome: 'bio', label: 'Biografia', multiLinha: true },
        { nome: 'avaliacao_media', label: 'Avaliacao media', tipo: 'number', valorPadrao: '0.00' },
      ],
    }
  },
}
</script>
