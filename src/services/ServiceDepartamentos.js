import Global from "./../Global";
import axios from 'axios';

export default class ServiceDepartamentos{
    getDepartamentos(){
        return new Promise(function(resolve){
            let request = "api/departamentos";
            let url = Global.URL_ApiDepartamentos + request;
            let departamentos = [];
            axios.get(url).then(response=>{
                departamentos = response.data;
                resolve(departamentos);
            })
            return departamentos;
        })
    }
    
    insertarDepartamento(departamento){
        return new Promise(function(resolve){
            let request = `api/departamentos`;
            let url = Global.URL_ApiDepartamentos + request;
            axios.post(url, departamento).then(response=>{
                resolve(response);
            })
        })
    }

    findDepartamento(idDpt){
        return new Promise(function(resolve){
            let request = `api/departamentos/${idDpt}`;
            let url = Global.URL_ApiDepartamentos + request;
            let departamento = {};
            axios.get(url).then(response=>{
                departamento = response.data;
                resolve(departamento)
            })
        })
    }
    
    updateDepartamento(departamento){
        return new Promise(function(resolve){
            let request = "api/departamentos";
            let url = Global.URL_ApiDepartamentos + request;
            axios.put(url, departamento).then(response=>{
                resolve(response);
            })
        })
    }
}