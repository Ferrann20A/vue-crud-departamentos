<template>
    <div class="container">
        <h1>Detalles departamento</h1>
        <router-link class="btn btn-dark" to="/">Back to Home</router-link>
        <h2 class="text-primary">
            Id: {{$route.params.id}}, 
            Nombre: {{$route.params.nombre}}, 
            Localidad: {{$route.params.localidad}}
        </h2>
    </div>
</template>

<script>
    export default{
        name:"DetallesDepartamento"
    }
</script>