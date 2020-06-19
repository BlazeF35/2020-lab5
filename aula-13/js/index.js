start();
let counter = 0;

function start() {
    let spans = document.getElementsByClassName('check_button');
    for (let i = 0; i < spans.length; i++) {
        let span = spans[i];
        span.onclick = function() {
            
            //this => representa o elemento que foi clicado!
            let item = this.parentNode;
            
            if (item.className.indexOf('selected') === -1) {
                counter++;
                item.className = 'selected';
                
                let h2 = document.getElementsByTagName('h2')[0];
                let finalWord = counter === 1 ? ' done' : ' dones';
                h2.innerHTML = counter + finalWord;
            }
        };
    }
}