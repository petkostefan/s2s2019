
        function potvrda() {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxF0dbyASNDGRJe7yxeH-JKRxYAZ73BxDkUoIm1o90am0Vvttn7/exec'
            const form = document.forms['submit-to-google-sheet']
            form.addEventListener("submit", e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => console.log('Success!', response))
                    .catch(error => console.error('Error!', error.message))
            })
        }

        var prvi = '.jedan:checked';

        function checkbox(ime, id) {
            var list = document.querySelectorAll(ime);
            var tekst = "";

            for (var element of list) {
                if (tekst == "") {
                    tekst = tekst.concat(element.value);
                }
                else {
                    tekst = tekst.concat(', ', element.value);
                }
            }
            document.getElementById(id).value = tekst;
        }

        function proveraCheckbox(ime) {
            var list = document.querySelectorAll(ime);

            for (var element of list) {
                if (element.checked) {
                    return true;
                }
            }

            return false;
        }

        function prijava() {
            var gotovo = true;
            var list = document.querySelectorAll('.aaa');
            for (var element of list) {
                if (element.value == "") {
                    gotovo = false;
                    break;
                }
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.jedan');
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.dva');
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.tri');
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.cetiri');
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.pet');
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.sest');
            }
            if (gotovo) {
                gotovo = proveraCheckbox('.sedam');
            }
            if (gotovo) {
                checkbox(prvi, 'projekat');
                checkbox('.cetiri:checked', 'radionice');
                potvrda();
                document.getElementById('dugme').style.display = 'none';

                Swal.fire({
                    text: 'Uspešno ste se prijavili!',
                    type: 'success',
                    confirmButtonText: 'Ok'
                })
            }
            else {
                event.preventDefault();

                Swal.fire({
                    text: 'Niste popunili sva polja!',
                    type: 'error',
                    confirmButtonText: 'Ok'
                })

            }
        }

        var limit = 2;
        var selektovano = 0;

        var x = document.getElementsByClassName("cetiri");

        for (var i = 0; i < x.length; i++) {
            x[i].addEventListener("change", function () {
                if (this.checked) {
                    if (selektovano >= limit) {
                        this.checked = false;
                    } else {
                        selektovano++;
                        if (selektovano == 1) {
                            var string = ""
                            var string = string.concat("Kojom ocenom biste ocenili zainteresovanost za radionicu ", "\"",
                                this.value, "\"", "? Šta Vas je motivisalo da odaberete baš ovu radionicu?");
                            document.getElementById("prviKurs").innerHTML = string;
                        }
                        if (selektovano == 2) {
                            var string = ""
                            var string = string.concat("Kojom ocenom biste ocenili zainteresovanost za radionicu ", "\"",
                                this.value, "\"", "? Šta Vas je motivisalo da odaberete baš ovu radionicu?");
                            document.getElementById("drugiKurs").innerHTML = string;
                        }
                    }
                }
                else {
                    selektovano--;
                    if (selektovano == 1) {
                        document.getElementById("drugiKurs").innerHTML = "Kojom ocenom biste ocenili zainteresovanost za drugu čekiranu radionicu?\
                         Šta Vas je motivisalo da odaberete baš ovu radionicu?"
                    }
                    if (selektovano == 0) {
                        document.getElementById("prviKurs").innerHTML = "Kojom ocenom biste ocenili zainteresovanost za prvu čekiranu radionicu?\
                         Šta Vas je motivisalo da odaberete baš ovu radionicu?"
                    }
                }

            });
        }

