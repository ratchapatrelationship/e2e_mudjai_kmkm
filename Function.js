export function randomTextEN(length) {
    // ตัวอักษรทั้งหมด
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // เก็บผลลัพธ์
    let result = "";
    // วนลูปสร้างตัวอักษร
    for (let i = 0; i < length; i++) {
      // สุ่มตำแหน่งตัวอักษร
      const randomIndex = Math.floor(Math.random() * alphabet.length);  
      // ดึงตัวอักษร
      const randomChar = alphabet[randomIndex];
      // เพิ่มตัวอักษรลงในผลลัพธ์
      result += randomChar;
    }
    // คืนค่าผลลัพธ์
    return result;
  }
  
export function randomNumber(length) {
    // ตัวอักษรทั้งหมด
    const alphabet = "0123456789";
  
    // เก็บผลลัพธ์
    let result = "";
  
    // วนลูปสร้างตัวอักษร
    for (let i = 0; i < length; i++) {
      // สุ่มตำแหน่งตัวอักษร
      const randomIndex = Math.floor(Math.random() * alphabet.length);
  
      // ดึงตัวอักษร
      const randomChar = alphabet[randomIndex];
  
      // เพิ่มตัวอักษรลงในผลลัพธ์
      result += randomChar;
    }
  
    // คืนค่าผลลัพธ์
    return result;
  }