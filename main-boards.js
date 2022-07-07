const board_buttons = document.querySelectorAll('.board-container div');
const widgets = document.querySelector('.widgets');
const board = document.querySelector('.board');
const home = document.querySelector('.home');

class board_boilerplate {
    render(board_data){
        const header = document.createElement('div');
        header.classList.add('header');

        header.innerText = `${board_data.heading}`;
        
        const content_data = board_data.content;
        const content = document.createElement('div');
        content.classList.add('board-content');
        content_data.forEach(element => {
            const header = document.createElement('div');
            header.classList.add('content-header');
            header.innerText = element.header;

            const body_holder = document.createElement('div');
            body_holder.classList.add('board-content-body');

            content.appendChild(header);
            content.appendChild(body_holder);

            element.body.forEach(element => {
                const body_text = document.createElement('div');
                body_text.classList.add('board-content-body-text');

                body_text.innerText = `${element}`;

                body_holder.appendChild(body_text);
            })
        })
        board.appendChild(header);
        board.appendChild(content);
    }
}

test_db = {
    "To Do": {
        heading: 'To Do List',
        content: [
            {
                header: 'homework',
                body: ['science', 'social science']
            }
        ]
    },
    "Homework": {
        heading: 'Homework',
        content: [
            {
                header: 'do stuff',
                body: ['maths', 'english']
            }
        ]
    }
}

is_open = false;
board_buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        board_class = e.srcElement.classList.value;
        board_name = e.srcElement.innerText;

        while(board.firstChild){board.removeChild(board.firstChild);}
        
        if(!is_open && board_class == "side-bar-board"){
            widgets.style.display = 'none';
            board.style.display = 'flex';
            is_open = true;
        }else{
            if(board_class == "side-bar-board"){
                is_open = false;
            }
        }

        data_board = new board_boilerplate();
        data_board.render(test_db[board_name]);
    });
});
home.addEventListener('click', () => {
    widgets.style.display = 'flex';
    board.style.display = 'none';
    is_open = false;
})