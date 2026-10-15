/**
 * Social Sharing and Export Utilities
 */

export function shareScore({ score, categoryTitle, percentile, userName }) {
  const siteUrl = window.location.href.split('?')[0];
  const shareText = `🧠 J'ai obtenu un score de QI de ${score} (${categoryTitle}) sur NeuroIQ, supérieur à ${percentile}% de la population ! Teste tes capacités cognitives toi aussi :`;

  return {
    async nativeShare() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `Mon score NeuroIQ : ${score} (${categoryTitle})`,
            text: shareText,
            url: siteUrl
          });
          return true;
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn('Share error', err);
          }
          return false;
        }
      }
      return false;
    },

    whatsappUrl() {
      const fullText = `${shareText} ${siteUrl}`;
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
    },

    twitterUrl() {
      const tweetText = `🧠 J'ai obtenu un score de QI de ${score} (${categoryTitle}) sur #NeuroIQ ! Peux-tu faire mieux ?`;
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(siteUrl)}&hashtags=QI,TestQI,Intelligence,CultureGenerale`;
    },

    telegramUrl() {
      return `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`;
    },

    linkedinUrl() {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`;
    },

    facebookUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
    },

    async copyToClipboard() {
      const text = `${shareText} ${siteUrl}`;
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
      }
    }
  };
}

export function downloadImage(dataUrl, filename = "NeuroIQ-Certificat.png") {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
