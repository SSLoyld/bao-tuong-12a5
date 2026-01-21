    window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500); 
});
    function createBlossom() {
        const blossom = document.createElement('div');
        blossom.classList.add('blossom');
        
        // Vị trí xuất hiện ngẫu nhiên theo chiều ngang
        blossom.style.left = Math.random() * 100 + 'vw';
        
        // Kích thước ngẫu nhiên cho cánh hoa
        const size = Math.random() * 8 + 7 + 'px'; 
        blossom.style.width = size;
        blossom.style.height = size;
        
        // Tốc độ rơi ngẫu nhiên (từ 3s đến 6s)
        blossom.style.animationDuration = Math.random() * 3 + 3 + 's';
        
        // Độ mờ ngẫu nhiên để tạo chiều sâu (cánh xa cánh gần)
        blossom.style.opacity = Math.random() * 0.5 + 0.5;
        
        document.body.appendChild(blossom);
        
        // Xóa cánh hoa sau khi rơi xong để tránh nặng máy
        setTimeout(() => {
            blossom.remove();
        }, 6000);
    }

    // Tạo cánh hoa mới mỗi 300ms (có thể chỉnh số này lớn hơn nếu muốn hoa rơi thưa hơn)
    setInterval(createBlossom, 300);
const wishes = [
    "Chúc bạn năm mới đỗ nguyện vọng 1!",
    "Vạn sự như ý - Tỷ sự như mơ!",
    "Tiền vào như nước - Tiền ra nhỏ giọt!",
    "Chúc bạn luôn rực rỡ như nắng xuân!",
    "Một năm Bính Ngọ bứt phá thành công!"
];

function getWish() {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wish-text').innerText = randomWish;
    document.getElementById('wish-modal').style.display = "block";
}

function closeModal() {
    document.getElementById('wish-modal').style.display = "none";
}
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    
    if (music.paused) {
        music.play();
        icon.innerText = "🎵"; // Đổi icon thành nốt nhạc
    } else {
        music.pause();
        icon.innerText = "🔇"; // Đổi icon thành tắt tiếng
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // --- 1. DANH SÁCH BÀI HÁT (CẬP NHẬT THEO HÌNH CỦA BẠN) ---
    const songList = [
        { title: "Vạn Sự Như Ý", src: "van_su_nhu_y.mp3" },
        { title: "Tết Đong Đầy", src: "tet_dong_day.mp3" },
        { title: "Một năm mới bình an", src: "mot_nam_moi_binh_an.mp3" },
        { title: "Con mèo xuân", src: "con_meo_xuan.mp3" }
    ];

    // --- 2. KHỞI TẠO BIẾN ---
    let currentSongIndex = 0;
    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const playBtn = document.getElementById('play-btn');
    const diskCover = document.getElementById('disk-cover');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');

    // Kiểm tra an toàn
    if (!audioPlayer || !songTitle) return;

    // --- 3. CÁC HÀM XỬ LÝ ---
    
    // Hàm tải bài hát
    function loadSong(index) {
        const song = songList[index];
        songTitle.innerText = song.title; 
        audioPlayer.src = song.src;
        // Reset đĩa
        if(diskCover) diskCover.style.transform = 'rotate(0deg)';
    }

    // Hàm Bật/Tắt
    window.togglePlay = function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerText = "⏸"; 
            if(diskCover) diskCover.classList.add('rotate'); 
        } else {
            audioPlayer.pause();
            playBtn.innerText = "▶"; 
            if(diskCover) diskCover.classList.remove('rotate'); 
        }
    };

    // Hàm Next
    window.nextSong = function() {
        currentSongIndex++;
        if (currentSongIndex > songList.length - 1) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audioPlayer.play();
        playBtn.innerText = "⏸";
        if(diskCover) diskCover.classList.add('rotate');
    };

    // Hàm Prev
    window.prevSong = function() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songList.length - 1;
        }
        loadSong(currentSongIndex);
        audioPlayer.play();
        playBtn.innerText = "⏸";
        if(diskCover) diskCover.classList.add('rotate');
    };

    // Cập nhật thanh tiến trình
    audioPlayer.ontimeupdate = function() {
        if(audioPlayer.duration && progressBar) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
    };

    // Tự động qua bài khi hết
    audioPlayer.onended = function() {
        window.nextSong();
    };

    // Tua nhạc
    window.setProgress = function(e) {
        if(!progressContainer) return;
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    };

    // --- 4. CHẠY LẦN ĐẦU ---
    loadSong(currentSongIndex);
});
 let secretCode = '';
document.addEventListener('keydown', (e) => {
    secretCode += e.key;
    if (secretCode.includes('tet')) {
        alert('🧨 Chúc mừng năm mới! Bạn đã tìm thấy mật mã bí ẩn!');
        secretCode = ''; 
    }
})