$(document).ready(function () {
    restoreFromCookie();

    function cookieupdate() {
        const htmlContent = $('#ft_list').html();
        const now = new Date();
        now.setTime(now.getTime() + (30 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + now.toUTCString();
        document.cookie = "myCookieName=" + encodeURIComponent(htmlContent) + ";" + expires + ";path=/";
    }

    function restoreFromCookie() {
        const name = "myCookieName=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(name) === 0) {
                const savedHTML = c.substring(name.length);
                $('#ft_list').html(savedHTML);

                // Reattach delete handler to all divs
                $('#ft_list').children().each(function () {
                    $(this).on('click', function () {
                        deleteTask($(this));
                    });
                });
            }
        }
    }

    function createTask() {
        let task = prompt('Please enter a task to do:');
        while (task === null || task.trim() === "") {
            task = prompt('Field cannot be empty. Please enter a task to do:');
        }

        const $newTodo = $('<div></div>').text(task).on('click', function () {
            deleteTask($(this));
        });

        $('#ft_list').prepend($newTodo);
        cookieupdate();
    }

    function deleteTask($element) {
        if (confirm("Are you sure you want to proceed?")) {
            $element.remove();
            cookieupdate();
        }
    }

    // Button event
    $('#buttony').on('click', createTask);
});
