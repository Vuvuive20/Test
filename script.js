window.AudioContext = window.AudioContext || window.webkitAudioContext;

// Tạo một đối tượng AudioContext mới
const audioContext = new AudioContext();

// Tạo một đối tượng Analyser để phân tích âm thanh
const analyser = audioContext.createAnalyser();

// Kết nối đầu ra của Analyser với đầu vào của AudioContext
analyser.connect(audioContext.destination);

// Hàm để bắt đầu phát âm thanh
function startAudio() {
  const audioElement = new Audio('C:\Users\vuvuive20\Music\Hẹn Em Ở Lần Yêu Thứ 2, Anh Đã Từ Bỏ Rồi Đấy, Như Anh Đã Thấy Em - Nhạc Ballad Việt Buồn Nhẹ Nhàng.mp4'); // Thay đổi đường dẫn đến tệp âm thanh của bạn
  const audioSource = audioContext.createMediaElementSource(audioElement);

  // Kết nối đầu ra của Audio Source với đầu vào của Analyser
  audioSource.connect(analyser);

  // Bắt đầu phát âm thanh
  audioElement.play();
}

// Gọi hàm startAudio khi trang web được tải
window.addEventListener('load', startAudio);