import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import UsuariosView from '@/views/usuarios/UsuariosView.vue'
import CriarUsuarioView from '@/views/usuarios/CriarUsuarioView.vue'
import EditarUsuarioView from '@/views/usuarios/EditarUsuarioView.vue'
import HospedesView from '@/views/hospedes/HospedesView.vue'
import CriarHospedeView from '@/views/hospedes/CriarHospedeView.vue'
import EditarHospedeView from '@/views/hospedes/EditarHospedeView.vue'
import AnfitrioesView from '@/views/anfitrioes/AnfitrioesView.vue'
import CriarAnfitriaoView from '@/views/anfitrioes/CriarAnfitriaoView.vue'
import EditarAnfitriaoView from '@/views/anfitrioes/EditarAnfitriaoView.vue'
import EnderecosView from '@/views/enderecos/EnderecosView.vue'
import CriarEnderecoView from '@/views/enderecos/CriarEnderecoView.vue'
import EditarEnderecoView from '@/views/enderecos/EditarEnderecoView.vue'
import HospedagensView from '@/views/hospedagens/HospedagensView.vue'
import CriarHospedagemView from '@/views/hospedagens/CriarHospedagemView.vue'
import EditarHospedagemView from '@/views/hospedagens/EditarHospedagemView.vue'
import ReservasView from '@/views/reservas/ReservasView.vue'
import CriarReservaView from '@/views/reservas/CriarReservaView.vue'
import EditarReservaView from '@/views/reservas/EditarReservaView.vue'
import PagamentosView from '@/views/pagamentos/PagamentosView.vue'
import CriarPagamentoView from '@/views/pagamentos/CriarPagamentoView.vue'
import EditarPagamentoView from '@/views/pagamentos/EditarPagamentoView.vue'
import MensagensView from '@/views/mensagens/MensagensView.vue'
import CriarMensagemView from '@/views/mensagens/CriarMensagemView.vue'
import EditarMensagemView from '@/views/mensagens/EditarMensagemView.vue'
import AvaliacoesView from '@/views/avaliacoes/AvaliacoesView.vue'
import CriarAvaliacaoView from '@/views/avaliacoes/CriarAvaliacaoView.vue'
import EditarAvaliacaoView from '@/views/avaliacoes/EditarAvaliacaoView.vue'
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/usuarios', name: 'Usuarios', component: UsuariosView },
  { path: '/usuarios/criar', name: 'CriarUsuario', component: CriarUsuarioView },
  { path: '/usuarios/:id/editar', name: 'EditarUsuario', component: EditarUsuarioView },
  { path: '/hospedes', name: 'Hospedes', component: HospedesView },
  { path: '/hospedes/criar', name: 'CriarHospede', component: CriarHospedeView },
  { path: '/hospedes/:id/editar', name: 'EditarHospede', component: EditarHospedeView },
  { path: '/anfitrioes', name: 'Anfitrioes', component: AnfitrioesView },
  { path: '/anfitrioes/criar', name: 'CriarAnfitriao', component: CriarAnfitriaoView },
  { path: '/anfitrioes/:id/editar', name: 'EditarAnfitriao', component: EditarAnfitriaoView },
  { path: '/enderecos', name: 'Enderecos', component: EnderecosView },
  { path: '/enderecos/criar', name: 'CriarEndereco', component: CriarEnderecoView },
  { path: '/enderecos/:id/editar', name: 'EditarEndereco', component: EditarEnderecoView },
  { path: '/hospedagens', name: 'Hospedagens', component: HospedagensView },
  { path: '/hospedagens/criar', name: 'CriarHospedagem', component: CriarHospedagemView },
  { path: '/hospedagens/:id/editar', name: 'EditarHospedagem', component: EditarHospedagemView },
  { path: '/reservas', name: 'Reservas', component: ReservasView },
  { path: '/reservas/criar', name: 'CriarReserva', component: CriarReservaView },
  { path: '/reservas/:id/editar', name: 'EditarReserva', component: EditarReservaView },
  { path: '/pagamentos', name: 'Pagamentos', component: PagamentosView },
  { path: '/pagamentos/criar', name: 'CriarPagamento', component: CriarPagamentoView },
  { path: '/pagamentos/:id/editar', name: 'EditarPagamento', component: EditarPagamentoView },
  { path: '/mensagens', name: 'Mensagens', component: MensagensView },
  { path: '/mensagens/criar', name: 'CriarMensagem', component: CriarMensagemView },
  { path: '/mensagens/:id/editar', name: 'EditarMensagem', component: EditarMensagemView },
  { path: '/avaliacoes', name: 'Avaliacoes', component: AvaliacoesView },
  { path: '/avaliacoes/criar', name: 'CriarAvaliacao', component: CriarAvaliacaoView },
  { path: '/avaliacoes/:id/editar', name: 'EditarAvaliacao', component: EditarAvaliacaoView },
]
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })
export default router