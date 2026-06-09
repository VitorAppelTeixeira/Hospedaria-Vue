<template>
  <TelaFormulario
    titulo="Editar Pagamento"
    :endpoint="endpoints.pagamentos"
    :campos="campos"
  />
</template>

<script>
import TelaFormulario from '@/components/TelaFormulario.vue'
import { endpoints } from '@/services/api'

export default {
  name: 'EditarPagamentoView',
  components: { TelaFormulario },
  data() {
    return {
      endpoints,
      campos: [
        { nome: 'reserva', label: 'ID da Reserva', numero: true },
        { nome: 'valor', label: 'Valor (R$)', numero: true },
        {
          nome: 'metodo',
          label: 'Metodo',
          opcoes: [
            { valor: 'cartao_credito', nome: 'Cartao de credito' },
            { valor: 'cartao_debito', nome: 'Cartao de debito' },
            { valor: 'pix', nome: 'PIX' },
            { valor: 'boleto', nome: 'Boleto' },
            { valor: 'dinheiro', nome: 'Dinheiro' },
          ],
        },
        { nome: 'data_pagamento', label: 'Data do pagamento', data: true },
        {
          nome: 'status',
          label: 'Status',
          opcoes: [
            { valor: 'pendente', nome: 'Pendente' },
            { valor: 'pago', nome: 'Pago' },
            { valor: 'cancelado', nome: 'Cancelado' },
          ],
        },
      ],
    }
  },
}
</script>
