document.addEventListener('DOMContentLoaded', function () {

    let currentPage = 1;
    const recordsPerPage = 7; // Số bản ghi hiển thị trên mỗi trang

    function numPages(data) {
        return Math.ceil(data.length / recordsPerPage);
    }

    function renderTable(data) {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = ''; // Xóa nội dung hiện tại

        const start = (currentPage - 1) * recordsPerPage;
        const end = start + recordsPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.stt}</td>
                <td>${item.ten_phong}</td>
                <td>${item.so_giuong}</td>
                <td>${item.tang}</td>
                <td>${item.so_nguoi}</td>
                <td>${item.tinh_trang}</td>
                <td>
                    <button>Chi tiết</button>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        renderPagination(numPages(data));
    }

    function renderPagination(totalPages) {
        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = ''; // Xóa các nút phân trang cũ

        const prevButton = document.createElement('button');
        prevButton.textContent = "<<";
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', function () {
            if (currentPage > 1) {
                currentPage--;
                renderTable(rooms); // Gọi lại hàm render với dữ liệu hiện tại
            }
        });
        paginationContainer.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', function () {
                currentPage = i;
                renderTable(rooms); // Gọi lại hàm render với dữ liệu hiện tại
            });
            paginationContainer.appendChild(button);
        }

        const nextButton = document.createElement('button');
        nextButton.textContent = ">>";
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', function () {
            if (currentPage < totalPages) {
                currentPage++;
                renderTable(rooms); // Gọi lại hàm render với dữ liệu hiện tại
            }
        });
        paginationContainer.appendChild(nextButton);
    }

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
        { "stt": 10, "ten_phong": "Phòng 302", "so_giuong": 8, "tang": 3, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 11, "ten_phong": "Phòng 101", "so_giuong": 8, "tang": 1, "so_nguoi": 4, "tinh_trang": "Hoạt động" },
        { "stt": 12, "ten_phong": "Phòng 102", "so_giuong": 8, "tang": 1, "so_nguoi": 2, "tinh_trang": "Hoạt động" },
        { "stt": 13, "ten_phong": "Phòng 103", "so_giuong": 8, "tang": 1, "so_nguoi": 3, "tinh_trang": "Hoạt động" },
        { "stt": 14, "ten_phong": "Phòng 104", "so_giuong": 8, "tang": 1, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 15, "ten_phong": "Phòng 201", "so_giuong": 5, "tang": 2, "so_nguoi": 4, "tinh_trang": "Hoạt động" },
        { "stt": 16, "ten_phong": "Phòng 202", "so_giuong": 5, "tang": 2, "so_nguoi": 2, "tinh_trang": "Hoạt động" },
        { "stt": 17, "ten_phong": "Phòng 203", "so_giuong": 5, "tang": 2, "so_nguoi": 3, "tinh_trang": "Hoạt động" },
        { "stt": 18, "ten_phong": "Phòng 204", "so_giuong": 5, "tang": 2, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 19, "ten_phong": "Phòng 301", "so_giuong": 8, "tang": 3, "so_nguoi": 0, "tinh_trang": "Hoạt động" },
        { "stt": 20, "ten_phong": "Phòng 302", "so_giuong": 8, "tang": 3, "so_nguoi": 0, "tinh_trang": "Hoạt động" }
    ];

    const invoices = [
        { "stt": 1, "ten_phong": "Phòng 101", "so_dien": 100, "so_nuoc": 50, "khac": 20, "tong_tien": 500000 },
        { "stt": 2, "ten_phong": "Phòng 102", "so_dien": 80, "so_nuoc": 40, "khac": 15, "tong_tien": 400000 },
        // Thêm dữ liệu hóa đơn khác ở đây
    ];
    const students = [
        { "stt": 1, "mssv": "SV001", "ho_ten": "Nguyễn Văn A", "lop": "Lớp 1", "phong": "Phòng 101" },
        { "stt": 2, "mssv": "SV002", "ho_ten": "Trần Thị B", "lop": "Lớp 2", "phong": "Phòng 102" },
        { "stt": 3, "mssv": "SV003", "ho_ten": "Lê Văn C", "lop": "Lớp 3", "phong": "Phòng 103" },
        // Thêm dữ liệu học sinh khác ở đây
    ];

    function setupNavigation() {
        document.getElementById('manage-room').addEventListener('click', function (event) {
            event.preventDefault();
            currentPage = 1; // Reset lại trang hiện tại khi thay đổi quản lý
            renderTable(rooms);
        });

        // ... (thiết lập cho các trang quản lý khác)
    }

    setupNavigation();
    renderTable(rooms); // Hiển thị danh sách phòng khi trang được tải
});
