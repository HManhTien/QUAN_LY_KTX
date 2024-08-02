document.addEventListener('DOMContentLoaded', function () {
    const rooms = [
        { "stt": 1, "ten_phong": "Phòng 101", "so_giuong": 8, "tang": 1, "so_nguoi": 4, "tinh_trang": "Hoạt động" },
        { "stt": 2, "ten_phong": "Phòng 102", "so_giuong": 8, "tang": 1, "so_nguoi": 2, "tinh_trang": "Hoạt động" },
        { "stt": 3, "ten_phong": "Phòng 103", "so_giuong": 8, "tang": 1, "so_nguoi": 3, "tinh_trang": "Hoạt động" },
        { "stt": 4, "ten_phong": "Phòng 104", "so_giuong": 8, "tang": 1, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 5, "ten_phong": "Phòng 201", "so_giuong": 5, "tang": 2, "so_nguoi": 4, "tinh_trang": "Hoạt động" },
        { "stt": 6, "ten_phong": "Phòng 202", "so_giuong": 5, "tang": 2, "so_nguoi": 2, "tinh_trang": "Hoạt động" },
        { "stt": 7, "ten_phong": "Phòng 203", "so_giuong": 5, "tang": 2, "so_nguoi": 3, "tinh_trang": "Hoạt động" },
        { "stt": 8, "ten_phong": "Phòng 204", "so_giuong": 5, "tang": 2, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 9, "ten_phong": "Phòng 301", "so_giuong": 8, "tang": 3, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 10, "ten_phong": "Phòng 302", "so_giuong": 8, "tang": 3, "so_nguoi": 0, "tinh_trang": "Hoạt động" }
    ];

    const tbody = document.querySelector('tbody');
    rooms.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.stt}</td>
            <td>${room.ten_phong}</td>
            <td>${room.so_giuong}</td>
            <td>${room.tang}</td>
            <td>${room.so_nguoi}</td>
            <td>${room.tinh_trang}</td>
            <td>
                <button>Chi tiết</button>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.querySelector('.add-btn').addEventListener('click', function () {
        // Logic để thêm mới phòng
        alert('Thêm mới phòng');
    });
});
