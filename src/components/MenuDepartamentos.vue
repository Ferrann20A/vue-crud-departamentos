<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NAVBAR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/create">Nuevo Departamento</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">3º link</router-link>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            4º link
          </a>
          <ul class="dropdown-menu">
            <li>
                <!-- <router-link class="dropdown-item" :to="`/empleadosoficio/${o}`">{{o}}</router-link> -->
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default{
        name:"MenuDepartamentos"
    }
</script>

<style>

</style>