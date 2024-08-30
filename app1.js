// app1.js
let arr = [
    {ad: 'Elvin', sex: 'm', salary: 4500},
    {ad: 'Xəzər', sex: 'm', salary: 4270},
    {ad: 'Elmir', sex: 'm', salary: 3550},
    {ad: 'İsmixan', sex: 'm', salary: 2700},
    {ad: 'Günel', sex: 'f', salary: 1740},
    {ad: 'Günəş', sex: 'f', salary: 2400},
    {ad: 'Fidan', sex: 'f', salary: 820},
    {ad: 'Rəvan', sex: 'm', salary: 700},
    {ad: 'Kənan', sex: 'm', salary: 2340},
    {ad: 'Azər', sex: 'm', salary: 1400},
    {ad: 'Musa', sex: 'm', salary: 2350},
    {ad: 'Vahid', sex: 'm', salary: 3340},
    {ad: 'David', sex: 'm', salary: 4700},
    {ad: 'Elcan', sex: 'm', salary: 1100},
    {ad: 'Yasəmən', sex: 'f', salary: 900},
];

const a = document.getElementById("a");

const ntc = document.getElementById("ntc").querySelector('tbody');


function axtar() {
    ntc.innerHTML = ''; 
    const isciaxtar = a.value.toLowerCase();
    if (isciaxtar) {
        arr
        .filter(item => (item.sex === 'm' ||  item.sex === 'f' ) && item.ad.toLowerCase().startsWith(isciaxtar))
        .forEach(item => {
            ntc.innerHTML += `
                <tr>
                    <td>${item.ad}</td>
                    <td>${item.sex === 'm' ? 'Kişi' : 'Qadın'}</td>
                    <td>${item.salary}Azn</td>
                </tr>`;
        });
    }
}

a.addEventListener("input", axtar);
