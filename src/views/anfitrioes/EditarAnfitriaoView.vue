<template>
  <TelaFormulario
    titulo="Editar Anfitriao"
    endpoint="/anfitrioes/"
    :campos="campos"
  />
</template>

<script>
import TelaFormulario from '@/components/TelaFormulario.vue'

export default {
  name: 'EditarAnfitriaoView',
  components: { TelaFormulario },
  data() {
    return {
      campos: [
        { nome: 'nome', label: 'Nome' },
        { nome: 'email', label: 'E-mail', tipo: 'email' },
        { nome: 'telefone', label: 'Telefone' },
        { nome: 'documento', label: 'Documento' },
        { nome: 'bio', label: 'Biografia', multiLinha: true },
        { nome: 'avaliacao_media', label: 'Avaliacao media', tipo: 'number' },
      ],
    }
  },
}
</script>
