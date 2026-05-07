    const start = dayjs('2025-05-09'); // data inicial
    const un1 = 'second'; // troque aqui: 'year', 'month', 'day', 'hour', 'minute', 'second'
    const un2 = 'hour';
    const un3 = 'day';
    const un4 = 'month';
    const un5 = 'year';
    function atualizar() {
      const now = dayjs();
      const tempo1 = now.diff(start, un1);
      const tempo2 = now.diff(start, un2);
      const tempo3 = now.diff(start, un3);
      const tempo4 = now.diff(start, un4);
      const tempo5 = now.diff(start, un5);

      document.getElementById('contadory').innerText =
        `${tempo5} anos`;
      document.getElementById('contadorm').innerText =
        `${tempo4} meses`;
      document.getElementById('contadord').innerText =
        `${tempo3} dias`;
      document.getElementById('contadorh').innerText =
        `${tempo2} horas`;
      document.getElementById('contadors').innerText =
        `${tempo1} segundos`;
    }

    atualizar(); // roda na hora
    setInterval(atualizar, 1000); // atualiza automaticamente