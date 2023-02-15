        
        let aside = document.getElementById("aside");
        let main = document.getElementsByTagName("main")[0];
        let select = document.getElementById("idioma");
        aside.addEventListener("click", () => {
            if (aside.getAttribute("class") == "") {
                aside.setAttribute("class", "click");
            }
        })
        main.addEventListener("click", () => {
            aside.setAttribute("class", "");
        })
        window.addEventListener("keydown", (ev) => {
            if (ev.key === "Escape") {
                aside.setAttribute("class", "");
            }
        })
        select.addEventListener("click", () => {
            aside.setAttribute("class", "click");
        })


        window.addEventListener("load", () => {
            Swal.fire({
                title: 'Política de privacidad',
                text: "Desea aceptar nuestra politica de privacidad?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Aceptado',
                        'Has aceptado nuestra política de privacidad',
                        'success'
                    )
                }
            })
        })