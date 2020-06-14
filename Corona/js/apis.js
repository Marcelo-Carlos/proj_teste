const API_URL = "https://api-bndes.azurewebsites.net/api/FaleConosco" ;
const API_URL_CORONA = "https://api.thevirustracker.com/free-api?global=stats" ;

function get() {
    return axios.get(API_URL_CORONA).then(response => {
      return response.data
    })
}

function post(data){
    axios.post(API_URL,data)
    .then(function (response) {
        console.log("criado com sucesso");
        alert("Nome:"+data.name+"email:"+data.email);
    })
    .catch(function (error) {
        console.log(error);
    });
}

