$(() => {

    $(".change-devoured").on("click", function () {
        const id = $(this).data("id");

        const newDevouredState = {
            value: true
        };

        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            // Convert object to JSON
            data: JSON.stringify(newDevouredState),
            // Tell the server that this request contains JSON
            contentType: "application/json; charset=UTF-8"
        }).then(() => { // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create_form").on("submit", (event) => { // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => { // Reload the page to get the updated list
            location.reload();
        });
    });

});
