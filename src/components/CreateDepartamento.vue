<template>
    <div class="container">
        <h1 class="text-success">Nuevo Departamento</h1>
        <h2 style="color:blue">
            {{mensaje}}
        </h2>
        <form v-on:submit.prevent="insertDepartamento()">
            <label>Id Departamento</label>
            <input class="form-control" type="number" v-model="departamento.idDepartamento"/>
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad"/>
            <button class="btn btn-outline-info">Insertar</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos'
const service = new ServiceDepartamentos();
    export default{
        name:"CreateDepartamento",
        data(){
            return{
                departamento:{
                    idDepartamento: 0,
                    nombre: "",
                    localidad: ""
                },
                mensaje:""
            }
        },
        methods:{
            insertDepartamento(){
                service.insertarDepartamento(this.departamento).then(result=>{
                    console.log(result);
                    this.$router.push("/");
                    // this.mensaje = "Insertado correctamente";
                })
            }
        }
    }
</script>

<style>

</style>