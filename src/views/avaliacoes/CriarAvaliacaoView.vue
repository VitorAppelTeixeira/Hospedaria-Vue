<template>
  <TelaFormulario
    titulo="Avaliacao"
    endpoint="/avaliacoes/"
    :campos="campos"
  />
</template>

<script>
import TelaFormulario from '@/components/TelaFormulario.vue'

export default {
  name: 'CriarAvaliacaoView',
  components: { TelaFormulario },
  data() {
    return {
      campos: [
        { nome: 'hospedagem', label: 'ID da Hospedagem', numero: true },
        { nome: 'nome_hospede', label: 'Nome do Hospede' },
        { nome: 'email', label: 'E-mail', tipo: 'email' },
        { nome: 'nota', label: 'Nota', numero: true },
        { nome: 'comentario', label: 'Comentario', multiLinha: true },
      ],
    }
  },
}
</script>
