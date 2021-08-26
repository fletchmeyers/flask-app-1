// Your code starts here
$(document).ready(function() {

    $.ajax({
        method: "GET",
        url: "api/pokemon",
        dataType: "json",
        success(data){
            //reference a class in the html with $(".class") which is how jquery does it
            //append adds some stuff to the end of whatever div you've referenced
            //creating strings with `` allows you to use string interpolation in jquery
            //to actually add in the interpolated data, use ${data}
            //you reference json items the same way you'd reference a multi-dimensional array i.e. data[num]["name"]

            
            for (let i in data) { 
                
                var name = data[i]["name"];
                var img = data[i]["image_url"];
                var next = Number(i) + 1;

                
                $(".js_container")
                    .append(
                    `<a href="/${next}" class='pokemon'>
                        <p>${name}</p>
                        <img src="${img}" alt="${name}" width="80%" height="80%">
                    </a>`);
            }
        
        }
    });
    
});

