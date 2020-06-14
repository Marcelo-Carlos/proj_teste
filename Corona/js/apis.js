const API_URL = "https://api-bndes.azurewebsites.net/api/FaleConosco" ;
const API_URL_CORONA = "https://api.thevirustracker.com/free-api?global=stats" ;
const API_BRASIL = "https://covid19-brazil-api.now.sh/api/report/v1/brazil/";

function get() {
    return axios.get(API_URL_CORONA).then(response => {
      return response.data
    })
}

function getBrasil() {
    return axios.get(API_BRASIL).then(response => {
      return response.data
    })
}

function post(data){
    axios.post(API_URL,data)
    .then(function (response) {
        console.log("criado com sucesso");
        alert(" Nome: "+data.name+"\n E-mail: "+data.email);
    })
    .catch(function (error) {
        console.log(error);
    });
}

