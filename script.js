// แสดงข้อความเมื่อเว็บไซต์โหลดเสร็จ
console.log("Portfolio Website Loaded Successfully");

// เลือกเมนูทั้งหมดจาก navbar
const navLinks = document.querySelectorAll(".nav-links a");

// วนลูปเมนูทั้งหมด
navLinks.forEach(function(link) {

    // เมื่อเอาเมาส์ไปชี้เมนู
    link.addEventListener("mouseover", function() {

        // ขยายเมนูเล็กน้อย
        link.style.transform = "scale(1.08)";

        // เพิ่มเอฟเฟค transition
        link.style.transition = "0.3s ease";
    });

    // เมื่อเอาเมาส์ออกจากเมนู
    link.addEventListener("mouseout", function() {

        // กลับขนาดเดิม
        link.style.transform = "scale(1)";
    });
});

// เลือกปุ่มทั้งหมด
const buttons = document.querySelectorAll(".btn");

// วนลูปปุ่มทั้งหมด
buttons.forEach(function(button) {

    // เมื่อเอาเมาส์ไปชี้ปุ่ม
    button.addEventListener("mouseover", function() {

        // เพิ่มเงาสีแดง
        button.style.boxShadow = "0 0 20px red";

        // ขยายปุ่ม
        button.style.transform = "scale(1.05)";
    });

    // เมื่อเอาเมาส์ออก
    button.addEventListener("mouseout", function() {

        // ลบเงา
        button.style.boxShadow = "none";

        // กลับขนาดเดิม
        button.style.transform = "scale(1)";
    });
});

// เลือก card ทั้งหมด
const cards = document.querySelectorAll(".card, .skill-card, .contact-card");

// วนลูป card ทั้งหมด
cards.forEach(function(card) {

    // ซ่อนก่อนเริ่ม animation
    card.style.opacity = "0";

    // เลื่อนลงเล็กน้อย
    card.style.transform = "translateY(30px)";

    // เพิ่ม transition
    card.style.transition = "all 0.8s ease";
});

// ฟังก์ชันแสดง animation ตอน scroll
function revealCards() {

    // วนลูป card
    cards.forEach(function(card) {

        // ตำแหน่งของ card
        const cardTop = card.getBoundingClientRect().top;

        // ความสูงหน้าจอ
        const screenHeight = window.innerHeight;

        // ถ้า card อยู่ในหน้าจอ
        if (cardTop < screenHeight - 100) {

            // แสดง card
            card.style.opacity = "1";

            // เลื่อนกลับตำแหน่งเดิม
            card.style.transform = "translateY(0)";
        }
    });
}

// เรียกฟังก์ชันตอน scroll
window.addEventListener("scroll", revealCards);

// เรียกฟังก์ชันทันทีตอนเปิดเว็บ
revealCards();

// แสดงข้อความต้อนรับตอนเปิดเว็บ
window.onload = function() {

    console.log("Welcome to Phadungkeart Portfolio Website");
};