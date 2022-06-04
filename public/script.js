const register = async () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("gender").value;
    const dni = document.getElementById("dni").value;

    const data = {
        name: name,
        surname: surname,
        birthDate: birthDate,
        gender: gender,
        dni: dni,
    };

    const response = await fetch("/api/register", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const json = await response.json();

    const registerResponse = document.getElementById("registerResponse");

    if (json.error) {
        registerResponse.innerHTML = json.error;
        return;
    }

    registerResponse.innerHTML = "Persona registrada con éxito";
};

window.onload = () => {
    document
        .getElementById("registerForm")
        .addEventListener("submit", (event) => {
            event.preventDefault();
            register();
        });
};
