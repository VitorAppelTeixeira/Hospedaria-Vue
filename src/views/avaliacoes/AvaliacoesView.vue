<template>
  <TelaLista
    titulo="Avaliacoes"
    endpoint="/avaliacoes/"
    rotaCriar="CriarAvaliacao"
    rotaEditar="EditarAvaliacao"
  >
    <template #descricao="{ item }">
      <div>
        Nota: {{ item.nota }} - Hospedagem #{{ item.hospedagem }}<br />
        {{ item.nome_hospede }} ({{ item.email }})<br />
        {{ item.comentario || 'Sem comentario' }}
      </div>
    </template>
  </TelaLista>
</template>

<script>
import TelaLista from '@/components/TelaLista.vue'

export default {
  name: 'AvaliacoesView',
  components: { TelaLista },
}
</script>
