
restoreFromCookie();

function cookieupdate(){
    cooky1 = document.getElementById('ft_list')
    const now = new Date();
    // Set cookie to expire in 30 days
    now.setTime(now.getTime() + (30 * 24 * 60 * 60 * 1000)); 
    const expires = "expires=" + now.toUTCString();
    document.cookie = "myCookieName=" + encodeURIComponent(cooky1.innerHTML) + ";" + expires + ";path=/";
    document.getElementById('output').textContent = `${document.cookie}`;
}

function restoreFromCookie() {
    const name = "myCookieName=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            const savedHTML = c.substring(name.length);
            document.getElementById("ft_list").innerHTML = savedHTML;

            // Reattach event listeners to restored elements
            const children = document.getElementById("ft_list").children;
            for (let i = 0; i < children.length; i++) {
                children[i].addEventListener("click", function (event) {
                    Dlt(event.target);
                });
            }
        }
    }
}

function Create(){
    task = prompt('Please enter a task to do: ');
    while (task===null || task.trim()===""){
        task = prompt('Field cannot be empty. Please enter a task to do: ');
    }
    
    
    var current = document.getElementById("ft_list");
    
    var newtodo = document.createElement('div');
    
    newtodo.addEventListener('click', function (event) {
Dlt(event.target);
});
    newtodo.innerHTML = task
    current.prepend(newtodo);
    cookieupdate();
}

function Dlt(target){
    const userConfirmed = confirm("Are you sure you want to proceed?");

    if (userConfirmed) {
        target.remove()
    } 
    cookieupdate();
}
