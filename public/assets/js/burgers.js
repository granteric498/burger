$(function () {
    $(".devoured-burger").on("click", function (event) {
        console.log(`I have been clicked`);
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devouredState = {
            devoured: devoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log(`Burger is ${devoured}`);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerInput").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(`Burger has been created`);
                location.reload();
            }
        );
    });
});