
//------------------Scripts used for the Nav menus-------------------------------------------------------//


function showSidebar(){        /*Manipulates the sidebar display property to "flex" when used*/
                  const sidebar = document.querySelector(".sidebar")
                  sidebar.style.display = "flex"
                }
            function hideSidebar(){        /*Manipulates the sidebar display property to "none" when used*/
                  const sidebar = document.querySelector(".sidebar")
                  sidebar.style.display = "none"
                }


//---------------Scripts used for the quiz --------------------------------------------------------------------//


function submitQuiz() {
            //answers to look for by the questions//
            const answers = {
            q1: 'correct',
            q2: 'correct',
            q3: 'correct',
            q4: 'ip address',
            q5: ['correct1', 'correct2', 'correct3'],
            };

            let score = 0;
            const form = document.forms["quiz"];
            let result = "<h3>Results:</h3>";
            //each question adds the scores dependent on if the answer is correct or not, and appends to the result string// 
            const q1 = form.q1.value;
            result += `<p>Q1: ${q1 === answers.q1 ? 'Correct' : 'Incorrect'} (Answer: Domain Name System)</p>`;
            if (q1 === answers.q1) score++;

            const q2 = form.q2.value;
            result += `<p>Q2: ${q2 === answers.q2 ? 'Correct' : 'Incorrect'} (Answer: phonebook)</p>`;
            if (q2 === answers.q2) score++;

            const q3 = form.q3.value;
            result += `<p>Q3: ${q3 === answers.q3 ? 'Correct' : 'Incorrect'} (Answer: MX record)</p>`;
            if (q3 === answers.q3) score++;

            const q4 = form.q4.value.trim().toLowerCase();
            result += `<p>Q4: ${q4 === answers.q4 ? 'Correct' : 'Incorrect'} (Answer: IP address)</p>`;
            if (q4 === answers.q4) score++;

            const q5 = [...form.querySelectorAll('input[name="q5"]:checked')].map(cb => cb.value);
            const q5Correct = answers.q5.every(ans => q5.includes(ans)) && q5.length === answers.q5.length;
            result += `<p>Q5: ${q5Correct ? 'Correct' : 'Incorrect'} (Answer: .org, .edu, .net)</p>`;
            if (q5Correct) score++;

            result += `<h4>Total Score: ${score}/5</h4>`;
            
            //Depending on the count of correct questions, a different response is given//
            switch(score >= 0){
               case score == 5: result += `<h5><br>You Passed...<br>Perfect Score</h5>`
               break;
               case score == 4: result += `<h5><br>You Passed...</h5>`
               break;
               case score == 3: result += `<h5><br>You Just Passed...</h5>`
               break;
               case score == 2: result += `<h5><br>You Failed...</h5>`
               break;
               case score == 1: result += `<h5><br>You Failed...<br>You can do better</h5>`
               break;
               case score == 0: result += `<h5><br>You Failed...<br>Did you Study?</h5>`
            }

            //returns all of the appended strings to display//
            document.getElementById('result').innerHTML = result;  
            }
            //Resets the quiz and clears any result information//
            function resetQuiz() {
               document.getElementById("quiz").reset();
               document.getElementById("result").innerHTML = "";
            }

//-----------------------------------End------------------------------------------------//