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
         const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                              17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for ( let index = 0; index < dezDaysList.length; index += 1 ) {

         const day = dezDaysList[index];
         var node = document.createElement("li");
         var textnode = document.createTextNode(day);
         node.appendChild(textnode);

            if ( dezDaysList[index] == 25 ) {

                document.getElementById("days").appendChild(node).className = 'day holyday friday';

            } else if  (
                        dezDaysList[index] == 24 ||
                        dezDaysList[index] == 31   ) {

                        document.getElementById("days").appendChild(node).className = 'day holyday';
            } else if (
                        dezDaysList[index] ==  4 ||
                        dezDaysList[index] == 11 ||
                        dezDaysList[index] == 18    ) {

                        document.getElementById("days").appendChild(node).className = 'day friday';
            }else {
                        document.getElementById("days").appendChild(node).className = 'day';
            }
          }
        }
        daysOfMonth();

  //Exercício 3
   function createButton(string , id) {
     const divButton = document.querySelector('.buttons-container')
     const newButton = document.createElement('button')
        newButton.id = id
        divButton.appendChild(newButton).innerText = string
   }

   createButton( "Feriados" , "btn-holiday" );

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
   createButton( "Sexta" , "btn-friday" );

    function changeToFriday () {

        const fridays = document.querySelectorAll('.friday')
        let  day = 4

        if (fridays[0].innerText == 4 ) {
            for (let index = 0;index < fridays.length; index += 1) {
                fridays[index].innerText = "Sextou!!"
            }
        } else {
            for (let index = 0;index < fridays.length; index += 1) {
              fridays[index].innerText = day
                day += 7;
            }
        }
    }

    const buttonFriday = document.querySelector('#btn-friday')
    buttonFriday.addEventListener("click", changeToFriday)

    //Exercício 6
    allDays = document.querySelector("#days")
    allDays.addEventListener("mouseover", zoomInDay)
    allDays.addEventListener("mouseout", zoomOutDay)

    function zoomInDay (e) {
      //console.log(e.target.tagName)
    //   if (e.target.tagName != "UL" ) {
    //   e.target.style.transform = "scale(1.5)"
    //   }
      (e.target.tagName != "UL" ) ? e.target.style.transform = "scale(1.5)" : false ;
    }

    function zoomOutDay (e) {
      //console.log(e.target.tagName)
      e.target.style.transform = "scale(1.0)"
    }


    //Exercicio 7
    let buttonAdd = document.getElementById("btn-add")

    buttonAdd.addEventListener("click", addTask)

    function addTask () {
      let inpuText = document.getElementById("task-input")
      let newTask = document.querySelector(".my-tasks")
      let newItemOfTask = document.createElement('SPAN')

      newTask.appendChild(newItemOfTask).innerText =  inpuText.value

      //Para adicionar quebra de linha apos adicionar cada item
      //Pega o ultimo filho da div
      let addLineFeed = document.querySelector('div.my-tasks').lastChild
      //E adiciona a tag <br>
      addLineFeed.insertAdjacentHTML( 'afterend', "<br>" )

      inpuText.value = ""
    }