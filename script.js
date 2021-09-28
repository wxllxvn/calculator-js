window.onload = function(){
    var equal = document.getElementById("equal");
    var cleanAll = document.getElementById("clean-all");
    var clean = document.getElementById("clean");
    var result = document.getElementById("result")
    var buttons = document.getElementsByClassName("buttons");


    cleanAll.addEventListener("click", function(){
        result.innerHTML = "";
        console.log('ok');
    })

    clean.addEventListener("click", function(){
        let newValue = result.innerHTML.split('');
        newValue.pop();
        result.innerHTML = newValue.join('');
        
    })

    equal.addEventListener("click", function(){
        let value = result.innerHTML.split('');
        for (let v = 0;v < value.length;v++){
            if (value[v] === "X"){
                value[v] = "*";
            }
        }
        result.innerHTML = eval(value.join(''));
    })

    for (let i = 0;i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            result.innerHTML = result.innerHTML + buttons[i].innerHTML;
        })
    }
}