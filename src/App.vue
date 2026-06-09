<script>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
export default {
  components: { LoginView },
  setup() {
    const router = useRouter(); const route = useRoute(); const token = ref(false)
    function aoLogar() { token.value = true; router.push({ name: 'home' }) }
    function sair() { token.value = false; router.push({ name: 'login' }) }
    const menu = [{ nome: 'Inicio', rota: 'Inicio' },
      { nome: 'Usuarios', rota: 'Usuarios' },
      { nome: 'Hospedes', rota: 'Hospedes' }]
    return { token, aoLogar, sair, menu, ativo: r => route.name === r }
  }
}
</script>
<template>
  <div v-if="!token" class="login-tela"><LoginView @login="aoLogar"/></div>
  <div v-else class="layout">
    <aside class="sidebar"><h2>Hospedaria</h2><nav>
      <RouterLink v-for="m in menu" :key="m.rota" :to="{name:m.rota}" class="menu-item" :class="{ativo:ativo(m.rota)}">{{ m.nome }}</RouterLink>
    </nav><button @click="sair">Sair</button></aside>
    <main class="main"><RouterView/></main>
  </div>
</template>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:sans-serif;background:#f5f5f5;color:#333}a{text-decoration:none;color:inherit}</style>
<style scoped>
.login-tela{min-height:100vh;background:#f5f5f5}.layout{display:flex;min-height:100vh}
.sidebar{width:240px;background:#fff;border-right:1px solid #e0e0e0;position:fixed;top:0;left:0;bottom:0;padding:20px}
.sidebar h2{color:#4B7BE5;margin-bottom:20px}.menu-item{display:block;padding:10px 0;color:#333}
.menu-item:hover{color:#4B7BE5}.menu-item.ativo{color:#4B7BE5;font-weight:700}
.sidebar button{margin-top:20px;width:100%;padding:10px;background:#dc2626;color:#fff;border:none;border-radius:4px;cursor:pointer}
.main{margin-left:240px;flex:1;padding:30px}
</style>