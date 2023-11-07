<template>
    <div class="container">
        <h1>Update Departamento</h1>
        <form v-if="departamento" v-on:submit.prevent="updateDepartamento()">
            <input type="number" class="form-control" disabled v-model="departamento.idDepartamento"/>
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad"/>
            <button class="btn btn-primary">Update</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos'
const service = new ServiceDepartamentos();
    export default{
        name:"UpdateDepartamento",
        data(){
            return{
                departamento:null,
            }
        },
        mounted(){
            let id = this.$route.params.id;
            service.findDepartamento(id).then(result=>{
                this.departamento = result;
            })
        },
        methods:{
            //Aqui dentro creo un metodo para llamarlo en el form
            updateDepartamento(){
                service.updateDepartamento(this.departamento).then(result=>{
                    console.log(result);
                    this.$router.push("/");
                })
            }
        }
    }
</script>

<style>

</style>