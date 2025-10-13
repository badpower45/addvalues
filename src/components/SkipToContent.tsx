export function SkipToContent() {
  const skipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={skipToMain}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[100] px-6 py-3 rounded-lg"
      style={{
        background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
        color: 'white',
        fontFamily: 'var(--font-arabic-body)',
        fontWeight: '600',
      }}
    >
      انتقل إلى المحتوى الرئيسي | Skip to main content
    </button>
  );
}