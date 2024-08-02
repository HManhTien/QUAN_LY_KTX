document.addEventListener('DOMContentLoaded', function () {
    const rooms = [
        { "stt": 1, "ten_phong": "Phòng 101", "so_giuong": 8, "tang": 1, "so_nguoi": 8 },
        { "stt": 2, "ten_phong": "Phòng 102", "so_giuong": 8, "tang": 1, "so_nguoi": 8 },
        { "stt": 3, "ten_phong": "Phòng 103", "so_giuong": 8, "tang": 1, "so_nguoi": 3 },
        { "stt": 4, "ten_phong": "Phòng 104", "so_giuong": 8, "tang": 1, "so_nguoi": 0 },
        { "stt": 5, "ten_phong": "Phòng 201", "so_giuong": 5, "tang": 2, "so_nguoi": 4 },
        { "stt": 6, "ten_phong": "Phòng 202", "so_giuong": 5, "tang": 2, "so_nguoi": 5 },
        { "stt": 7, "ten_phong": "Phòng 203", "so_giuong": 5, "tang": 2, "so_nguoi": 3 },
        { "stt": 8, "ten_phong": "Phòng 204", "so_giuong": 5, "tang": 2, "so_nguoi": 0 },
        { "stt": 9, "ten_phong": "Phòng 301", "so_giuong": 8, "tang": 3, "so_nguoi": 0 },
        { "stt": 10, "ten_phong": "Phòng 302", "so_giuong": 8, "tang": 3, "so_nguoi": 0 }
    ];

    const tbody = document.querySelector('tbody');
    rooms.forEach(room => {
        const tinh_trang = room.so_nguoi < room.so_giuong ? 'Trống' : 'Đầy';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.stt}</td>
            <td>${room.ten_phong}</td>
            <td>${room.so_giuong}</td>
            <td>${room.tang}</td>
            <td>${room.so_nguoi}</td>
            <td>${tinh_trang}</td>
            <td>
                <button class="details-btn" data-room='${JSON.stringify(room)}'>Chi tiết</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    const modal = document.getElementById('myModal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');

    tbody.addEventListener('click', function (event) {
        if (event.target.classList.contains('details-btn')) {
            const room = JSON.parse(event.target.getAttribute('data-room'));
            showRoomDetails(room);
        }
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.querySelector('.add-btn').addEventListener('click', function () {
        // Logic để thêm mới phòng
        alert('Thêm mới phòng');
    });

    function showRoomDetails(room) {
      
        if (room.so_nguoi >= room.so_giuong) {  
            modalBody.innerHTML = `
                <h2>Chi tiết Phòng</h2>
                <p><strong>Tên phòng:</strong> ${room.ten_phong}</p>
                <p><strong>Số người đang ở:</strong> ${room.so_nguoi}</p>
                <p><strong>Tình trạng trang thiết bị:</strong> ${room.so_nguoi < room.so_giuong ? 'Có sẵn' : 'Thiếu'}</p>
                <p>Phòng hiện tại đã đầy, không thể xem chi tiết.</p>
                <button class="exit-btn">Thoát</button>
            `;
        } else {
            modalBody.innerHTML = `
                <h2>Chi tiết Phòng</h2>
                <p><strong>Tên phòng:</strong> ${room.ten_phong}</p>
                <p><strong>Số người đang ở:</strong> ${room.so_nguoi}</p>
                <p><strong>Tình trạng trang thiết bị:</strong> ${room.so_nguoi < room.so_giuong ? 'Có sẵn' : 'Thiếu'}</p>
                <button class="register-btn">Đăng ký vào phòng</button>
                <button class="exit-btn">Thoát</button>
            `;
        }
        modal.style.display = 'block';

        
        const registerBtn = modalBody.querySelector('.register-btn');
        if (registerBtn) {
            registerBtn.addEventListener('click', function () {
                alert('Đăng ký thành công!');
                modal.style.display = 'none';
            });
        }

      
        const exitBtn = modalBody.querySelector('.exit-btn');
        exitBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }
});
