Array.from(document.querySelectorAll("a")).forEach((element) => {
    element.addEventListener('click', (e) => {
        window.scrollTo(0, 0)
        e.preventDefault();
        const id = e.target.getAttribute('href').split('#')[1]
        document.querySelector(`#${id}`).scrollIntoView(true)
        if (id === 'coldplay') {
            window.scrollTo(0,document.body.scrollHeight);
        }
        window.location.hash = id;
    })
})