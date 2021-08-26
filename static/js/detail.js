// Your code starts here

$(document).ready(function() {

    var fullUrl = window.location.href;
    var uri = fullUrl.split("http://127.0.0.1:5000/");    

    $.ajax({
        method: "GET",
        url: "api/pokemon/" + uri[1],
        dataType: "json",
        success(data){

            var js_img = data["image_url"];
            var js_name = data["name"];
            var js_description = data["description"];
            var js_types = data["types"];
            var js_evolutions = data["evolutions"];


            $(".js_name").append( `<h1>${js_name}</h1>`);
            $(".js_img").append(`<img src="${js_img}" alt="${js_name}" width="100%" height="100%">`);
            $(".js_description").append(`<p>${js_description}</p>`);    
            
            for (let i = 0; i < js_types.length; i++) {         
                $(".js_types").append(`<li>${js_types[i]}</li>`);
            }   

            for (let i = 0; i < js_evolutions.length; i++) {
                $(".js_evolutions")
                    .append(
                        `<tr>
                            <td>
                                <a href="/${data["evolutions"][i]["id"]}">
                                ${data["evolutions"][i]["to"]}
                                </a>                               
                            </td>
                            <td>
                                ${data["evolutions"][i]["level"]}
                            </td>
                            <td>
                                ${data["evolutions"][i]["method"]}
                            </td>
                        </tr>`
                    );
            }

        }
    });
    
});