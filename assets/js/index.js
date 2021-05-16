

$("#add_user").submit(function(event){
    alert("Data Successfully Inserted!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    //(this) is the same (update_user)
    var unindexed_array=$(this).serializeArray();
    var data ={}
    //the n will return the data from the unidexed array and the i gonna return the index of it
    $.map(unindexed_array,function(n, i){
        data[n['name']]=n['value']
    })
    console.log(data)

    var request = {
        //im gonna use ajax to send the request to the server and get the response from the server
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(request){
        alert("Your Data is successfully Updated")
    })
})