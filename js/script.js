document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const recs = document.querySelectorAll('.rec');
    
    // Inicializa a primeira div como ativa
    recs[currentIndex].classList.add('ativo');

    function showRec(index) {
        // Esconde todas as divs
        recs.forEach((rec, i) => {
            rec.classList.remove('ativo');
            if (i === index) {
                rec.classList.add('ativo');
            }
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % recs.length; // vai para o próximo
        showRec(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + recs.length) % recs.length; // vai para o anterior
        showRec(currentIndex);
    });
});
