/**
 * NeuroIQ Certificate & Social Badge Canvas Generator
 * Professional, high-definition 1200x630 archival certificate
 * Cosmic deep-space nebula theme & gold/cyan seal
 */

export function generateCertificateDataURL({
  userName = "Participant",
  score = 115,
  percentile = 84.1,
  categoryTitle = "Intelligence Supérieure",
  accuracyPercent = 85,
  date = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
  certId = "NIQ-" + Math.floor(100000 + Math.random() * 900000)
}) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');

  // Background Gradient - Deep Cosmic Void & Midnight Teal
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
  bgGrad.addColorStop(0, '#040912');
  bgGrad.addColorStop(0.5, '#071624');
  bgGrad.addColorStop(1, '#050c18');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 630);

  // Subtle astronomical coordinate grid
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
  ctx.lineWidth = 1;
  for (let x = 40; x < 1200; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 630);
    ctx.stroke();
  }
  for (let y = 40; y < 630; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1200, y);
    ctx.stroke();
  }

  // Glowing Celestial Nebula Blobs
  const glow1 = ctx.createRadialGradient(280, 200, 10, 280, 200, 380);
  glow1.addColorStop(0, 'rgba(34, 211, 238, 0.18)');
  glow1.addColorStop(1, 'transparent');
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, 700, 630);

  const glow2 = ctx.createRadialGradient(920, 380, 10, 920, 380, 360);
  glow2.addColorStop(0, 'rgba(45, 212, 191, 0.14)');
  glow2.addColorStop(1, 'transparent');
  ctx.fillStyle = glow2;
  ctx.fillRect(600, 0, 600, 630);

  // Double Frame Border
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
  ctx.lineWidth = 2;
  ctx.strokeRect(32, 32, 1136, 566);

  ctx.strokeStyle = 'rgba(45, 212, 191, 0.18)';
  ctx.lineWidth = 1;
  ctx.strokeRect(42, 42, 1116, 546);

  // Corner brackets (editorial architectural framing)
  const cornerSize = 28;
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  // Top-left
  ctx.beginPath();
  ctx.moveTo(32, 32 + cornerSize);
  ctx.lineTo(32, 32);
  ctx.lineTo(32 + cornerSize, 32);
  ctx.stroke();
  // Top-right
  ctx.beginPath();
  ctx.moveTo(1168 - cornerSize, 32);
  ctx.lineTo(1168, 32);
  ctx.lineTo(1168, 32 + cornerSize);
  ctx.stroke();
  // Bottom-left
  ctx.beginPath();
  ctx.moveTo(32, 598 - cornerSize);
  ctx.lineTo(32, 598);
  ctx.lineTo(32 + cornerSize, 598);
  ctx.stroke();
  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(1168 - cornerSize, 598);
  ctx.lineTo(1168, 598);
  ctx.lineTo(1168, 598 - cornerSize);
  ctx.stroke();

  // Header Brand (Clean, uppercase tracked)
  ctx.textAlign = 'left';
  ctx.font = '800 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText("NEURO", 80, 92);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText("IQ", 175, 92);

  ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
  ctx.fillText("INSTITUT PSYCHOMÉTRIQUE & ÉVALUATION COGNITIVE", 80, 114);

  // Verification ID (Top Right)
  ctx.textAlign = 'right';
  ctx.font = '600 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(`ID VÉRIFIÉ : ${certId}`, 1115, 92);
  ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
  ctx.fillText(`Date de certification : ${date}`, 1115, 114);

  // Main Text Area
  ctx.textAlign = 'left';
  ctx.font = 'italic 16px "Plus Jakarta Sans", serif';
  ctx.fillStyle = 'rgba(203, 213, 225, 0.8)';
  ctx.fillText("Ce document atteste formellement que", 80, 195);

  // User Name
  ctx.font = '800 42px "Plus Jakarta Sans", sans-serif';
  const nameGrad = ctx.createLinearGradient(80, 240, 500, 240);
  nameGrad.addColorStop(0, '#ffffff');
  nameGrad.addColorStop(1, '#cbd5e1');
  ctx.fillStyle = nameGrad;
  ctx.fillText(userName, 80, 248);

  // Subtitle statement
  ctx.font = '15px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = 'rgba(148, 163, 184, 0.9)';
  ctx.fillText("a accompli l'évaluation psychométrique standardisée NeuroIQ", 80, 290);
  ctx.fillText("portant sur la logique formelle, les mathématiques, les sciences et les lettres.", 80, 314);

  // Classification Box
  ctx.fillStyle = 'rgba(7, 22, 36, 0.7)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
  ctx.lineWidth = 1;
  roundRect(ctx, 80, 355, 490, 88, 10, true, true);

  ctx.font = '700 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText("CLASSIFICATION COGNITIVE OFFICIELLE", 104, 384);

  ctx.font = '800 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(categoryTitle.toUpperCase(), 104, 418);

  // Stats row at bottom left
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
  ctx.fillText("Rang centile mondial :", 80, 505);
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(`Top ${(100 - percentile).toFixed(1)}% (supérieur à ${percentile}% de la population)`, 235, 505);

  ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
  ctx.fillText("Précision des réponses :", 80, 538);
  ctx.fillStyle = '#2dd4bf';
  ctx.fillText(`${accuracyPercent}% d'exactitude analytique`, 245, 538);

  // RIGHT SIDE: Large Score Circle
  const circleX = 890;
  const circleY = 345;
  const radius = 140;

  // Outer ring
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius + 14, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Circle fill
  const circleGrad = ctx.createRadialGradient(circleX - 35, circleY - 35, 15, circleX, circleY, radius);
  circleGrad.addColorStop(0, '#0c2338');
  circleGrad.addColorStop(1, '#05101a');
  ctx.fillStyle = circleGrad;
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(45, 212, 191, 0.5)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Circle inner texts
  ctx.textAlign = 'center';
  ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText("SCORE D'INTELLIGENCE", circleX, circleY - 55);

  // Big Score number
  ctx.font = '900 84px "Plus Jakarta Sans", sans-serif';
  const scoreGrad = ctx.createLinearGradient(circleX, circleY - 45, circleX, circleY + 35);
  scoreGrad.addColorStop(0, '#ffffff');
  scoreGrad.addColorStop(1, '#38bdf8');
  ctx.fillStyle = scoreGrad;
  ctx.fillText(String(score), circleX, circleY + 22);

  ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#2dd4bf';
  ctx.fillText("QUOTIENT INTELLECTUEL", circleX, circleY + 56);

  // Official Seal
  drawSeal(ctx, 1095, 535);

  return canvas.toDataURL('image/png');
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function drawSeal(ctx, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.arc(0, 0, 36, 0, Math.PI * 2);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 31, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#fbbf24';
  ctx.font = '900 13px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText("ACADÉMIE", 0, -8);
  ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
  ctx.fillText("CERTIFIÉ", 0, 8);
  ctx.fillText("NEUROIQ", 0, 20);
  ctx.restore();
}
