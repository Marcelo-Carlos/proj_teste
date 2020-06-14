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

get('https://api.thevirustracker.com/free-api?global=stats')