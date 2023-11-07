<template>
    <div class="container">
        <h1>CRUD Departamentos</h1>
        <br/>
        <div v-if="status === false">
            <img src="../assets/images/loading.jpg" alt="img_loading"/>
        </div>
        <div v-else>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id Departamento</th>
                        <th>Nombre</th>
                        <th>Localidad</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="d in departamentos" :key="d">
                        <td>{{d.idDepartamento}}</td>
                        <td>{{d.nombre}}</td>
                        <td>{{d.localidad}}</td>
                        <td>
                            <router-link class="btn btn-outline-warning" :to="`/details/${d.idDepartamento}/${d.nombre}/${d.localidad}`">Detalles</router-link>
                            <router-link class="btn btn-outline-info" :to="`/update/${d.idDepartamento}`">Update</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ServiceDepartamentos from './../services/ServiceDepartamentos';
    const service = new ServiceDepartamentos();
    export default{
        name:"DepartamentosComponent",
        data(){
            return{
                departamentos:[],
                status: false
            }
        },
        mounted(){
            service.getDepartamentos().then(result=>{
                this.departamentos = result;
                this.status = true;
            })
        }
    }
</script>

<style>

</style>
