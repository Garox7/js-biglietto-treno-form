const btnClick = document.getElementsById('button');

btnClick.addEventListener('click',
    function () {
        let userName = document.getElementById("user__name").value;
        document.getElementById("name").innerHTML = userName;
    }
);
