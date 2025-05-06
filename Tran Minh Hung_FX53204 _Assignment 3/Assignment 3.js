 // Chờ DOM load xong
    document.addEventListener("DOMContentLoaded", function () {
        const titles = document.querySelectorAll(".toggle-title");

        titles.forEach(title => {
            title.style.cursor = "pointer"; // Đổi con trỏ cho dễ nhận biết

            title.addEventListener("click", function () {
                const content = this.nextElementSibling;

                // Toggle hiển thị
                if (content && content.classList.contains("toggle-content")) {
                    content.style.display = content.style.display === "none" ? "block" : "none";
                }
            });
        });
    });