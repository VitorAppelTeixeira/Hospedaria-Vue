import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import UsuariosView from '@/views/usuarios/UsuariosView.vue'
import CriarUsuarioView from '@/views/usuarios/CriarUsuarioView.vue'
import EditarUsuarioView from '@/views/usuarios/EditarUsuarioView.vue'
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/usuarios', name: 'Usuarios', component: UsuariosView },
  { path: '/usuarios/criar', name: 'CriarUsuario', component: CriarUsuarioView },
  { path: '/usuarios/:id/editar', name: 'EditarUsuario', component: EditarUsuarioView },
]
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })
export default router