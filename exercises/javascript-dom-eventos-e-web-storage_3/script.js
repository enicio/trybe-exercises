function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;

      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();

  // Escreva seu código abaixo.

  function daysOfMonth() {
         const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
             16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for ( let index = 0; index < dezDaysList.length; index += 1 ) {
         const day = dezDaysList[index];
         var node = document.createElement("li");
         var textnode = document.createTextNode(day);
         node.appendChild(textnode);
         if ( index == 24 || index == 25 || index == 31 ) {
             document.getElementById("days").appendChild(node).className = 'day holyday';
            } else if ( dezDaysList[index] == 4 ||dezDaysList[index] == 11 || dezDaysList[index] == 18 ||dezDaysList[index] == 25 ) {
                        document.getElementById("days").appendChild(node).className = 'day friday';
                     }else {
                            document.getElementById("days").appendChild(node).className = 'day';
                           }
             }
  }
  daysOfMonth();


  //Exercício 3
   function createButton(string, id) {
        const divButton = document.querySelector('.buttons-container')
        const newButton = document.createElement('button')
        newButton.id = id
        divButton.appendChild(newButton).innerText = string
   }


   createButton("Feriados", "btn-holiday" );


   function colourHollydays() {
    const hollydays = document.querySelectorAll('.holyday')

    let checkColor = hollydays[0].style.background

        if ( checkColor == "red") {

            for ( let index = 0; index < hollydays.length; index += 1) {
                hollydays[index].style.background = "rgb(238,238,238)"
            }
        } else {
            for ( let index = 0; index < hollydays.length; index += 1) {
                hollydays[index].style.background = "red"
       }
     }
   }


   //Exercicio 4
   const buttonHollydays = document.querySelector("#btn-holiday");
   buttonHollydays.addEventListener("click", colourHollydays)

   //Exercicio 5
   createButton("Sexta", "btn-friday");

