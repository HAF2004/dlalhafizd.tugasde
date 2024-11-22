document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const formData = new FormData(event.target);
    const resultDiv = document.getElementById('result');

    // Periksa jawaban pilihan ganda
    const correctAnswers = {
        q1: "Hypertext Transfer Protocol",
        q2: "Memproses data",
        q3: "Windows"
        // Tambahkan kunci jawaban lainnya
    };

    let score = 0;
    for (let [key, value] of formData.entries()) {
        if (correctAnswers[key] && correctAnswers[key] === value) {
            score++;
        }
    }

    // Tampilkan hasil
    resultDiv.innerHTML = `Jawaban Anda telah dikumpulkan. Jawaban Benar ${score}/${Object.keys(correctAnswers).length}.`;
    resultDiv.classList.remove('hidden');
});
