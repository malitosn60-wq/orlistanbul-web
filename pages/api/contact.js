import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  // Mail içeriğini hazırla
  let htmlContent = `
    <p><strong>İsim:</strong> ${name || "Belirtilmemiş"}</p>
    <p><strong>Telefon:</strong> ${phone || "Belirtilmemiş"}</p>
  `;
  if (email) htmlContent += `<p><strong>Email:</strong> ${email}</p>`;
  if (message) htmlContent += `<p><strong>Mesaj:</strong> ${message}</p>`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ORL İstanbul" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Mesaj kendi mailine düşecek
      subject: "Yeni iletişim formu mesajı",
      html: htmlContent,
    });

    res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Mesaj gönderilirken hata oluştu." });
  }
}