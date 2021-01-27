$(() => {
    $('.change_devour').on('click', function handleDevourClick() {
      const burgerId = this.value;
      $.ajax({
        method: 'PUT',
        url: `/burgers/${burgerId}/devour`,
      }).then(() => {
        // reload page to display devoured burger in proper column
        window.location.reload();
      });
    });
  });

$(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });