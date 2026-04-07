import jsPDF from "jspdf";
import { resumeData } from "@/data/resumeData";

export const generateResumePdf = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = 210;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const addText = (text: string, x: number, size: number, style: "normal" | "bold" | "italic" = "normal", color = [30, 30, 30]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.text(text, x, y);
  };

  const checkPage = (needed: number) => {
    if (y + needed > 280) {
      doc.addPage();
      y = 20;
    }
  };

  // Header
  addText(resumeData.personal.name, margin, 22, "bold");
  y += 7;
  addText(resumeData.personal.title, margin, 12, "normal", [100, 100, 100]);
  y += 6;
  addText(`${resumeData.personal.location}  |  ${resumeData.personal.email}  |  ${resumeData.personal.phone}`, margin, 9, "normal", [120, 120, 120]);
  y += 4;
  addText(resumeData.personal.linkedin, margin, 9, "normal", [60, 100, 180]);
  y += 8;

  // Summary
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;
  addText("PROFESSIONAL SUMMARY", margin, 11, "bold");
  y += 6;
  doc.setFontSize(9.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50, 50, 50);
  const summaryLines = doc.splitTextToSize(resumeData.personal.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 6;

  // Experience
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;
  addText("EXPERIENCE", margin, 11, "bold");
  y += 8;

  for (const company of resumeData.experience) {
    checkPage(20);
    addText(company.company, margin, 11, "bold");
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(120, 120, 120);
    doc.text(company.location, pageWidth - margin, y, { align: "right" });
    y += 6;

    for (const role of company.roles) {
      checkPage(15);
      addText(role.title, margin, 10, "bold");
      y += 4.5;
      addText(role.period, margin, 8.5, "italic", [120, 120, 120]);
      y += 5;

      for (const ach of role.achievements) {
        checkPage(10);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50, 50, 50);
        const bullet = `• ${ach.metric} ${ach.description}`;
        const lines = doc.splitTextToSize(bullet, contentWidth - 4);
        doc.text(lines, margin + 2, y);
        y += lines.length * 4 + 2;
      }
      y += 3;
    }
    y += 4;
  }

  // Education
  checkPage(30);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;
  addText("EDUCATION", margin, 11, "bold");
  y += 8;

  for (const edu of resumeData.education) {
    checkPage(12);
    addText(edu.degree, margin, 10, "bold");
    y += 4.5;
    addText(`${edu.institution}, ${edu.location}  |  ${edu.period}`, margin, 9, "normal", [100, 100, 100]);
    y += 7;
  }

  // Skills
  checkPage(20);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;
  addText("SKILLS", margin, 11, "bold");
  y += 6;
  const skillText = resumeData.skills.map((s) => s.name).join("  •  ");
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50, 50, 50);
  const skillLines = doc.splitTextToSize(skillText, contentWidth);
  doc.text(skillLines, margin, y);

  doc.save("Neelanjana_Basu_Resume.pdf");
};
