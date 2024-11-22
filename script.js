document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const formData = new FormData(event.target);

    // Periksa jawaban pilihan ganda
    const correctAnswers = {
        q1: "Hypertext Transfer Protocol",
        q2: "Memproses data",
        q3: "Windows",
        q4: "RAM",
        q5: "HyperText Markup Language"
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let [key, value] of formData.entries()) {
        if (correctAnswers[key] && correctAnswers[key] === value) {
            score++;
        }
    }

    // Essay processing
    const essays = {
        essay1: formData.get('essay1'),
        essay2: formData.get('essay2')
    };

    // Redirect ke halaman baru dengan skor dan jawaban essay sebagai query string
    const queryParams = new URLSearchParams({
        score,
        totalQuestions,
        essay1: essays.essay1,
        essay2: essays.essay2
    }).toString();

    window.location.href = `result.html?${queryParams}`;
});
