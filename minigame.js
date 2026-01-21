const quares = [
    "🧧 QUẺ ĐẠI CÁT: Năm nay đỗ nguyện vọng 1 chắc chắn!",
    "🌸 QUẺ TIỂU CÁT: Tình duyên nở rộ, học hành hanh thông.",
    "✨ QUẺ TOÀN PHÁT: Tiền lì xì đầy túi, vui chơi hết mình.",
    "📚 QUẺ HỌC VẤN: Trí tuệ sáng suốt, thi đâu trúng đó.",
    "🍀 QUẺ MAY MẮN: Có quý nhân phù trợ (là các bạn Tổ 1 đó)!",
    "💎 QUẺ TÀI LỘC: Một năm sung túc, không lo thiếu thốn."
];

function shakeQuare() {
    const shaker = document.getElementById('qure-container');
    const btn = document.getElementById('shake-btn');
    
    // Vô hiệu hóa nút khi đang lắc
    btn.disabled = true;
    shaker.classList.add('shaking');

    // Sau 1.5 giây thì hiện kết quả
    setTimeout(() => {
        shaker.classList.remove('shaking');
        const randomIndex = Math.floor(Math.random() * quares.length);
        document.getElementById('quare-result').innerText = quares[randomIndex];
        document.getElementById('result-modal').style.display = "block";
        btn.disabled = false;
    }, 1500);
}

function closeModal() {
    document.getElementById('result-modal').style.display = "none";
}