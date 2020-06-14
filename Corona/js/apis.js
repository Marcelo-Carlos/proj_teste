const API_URL = "https://api-bndes.azurewebsites.net/api/FaleConosco" ;

function get(URL){
    var data;
axios.get(URL)
            .then(function (response) {
                data = response.data;
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
        }

function post(data){
    axios.post(API_URL,data)
    .then(function (response) {
        console.log("criado com sucesso");
    })
    .catch(function (error) {
        console.log(error);
    });
}

