import React, { useState } from "react";

// ============================================================================
// RESUME LINK CONFIGURATION
// To update your CV:
// 1. Upload your resume PDF to Google Drive
// 2. Set share permissions to "Anyone with the link can view"
// 3. Paste the share link below (Works with view links or preview links!)
// ============================================================================
const RESUME_GOOGLE_DRIVE_URL =
  "https://drive.google.com/file/d/1w-wJ_kLvvYNqpEYxRmHOlux7aiDo77Rn/view?usp=sharing";

// Helper function to format Google Drive link for iframe embedding
const getEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("drive.google.com")) {
    // Replace /view or /edit with /preview for clean embedding
    return url
      .replace(/\/view(\?.*)?$/, "/preview")
      .replace(/\/edit(\?.*)?$/, "/preview");
  }
  return url;
};

// Helper function for direct download link
const getDownloadUrl = (url) => {
  if (!url) return "#";
  if (url.includes("drive.google.com")) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
  }
  return url;
};

const CV = () => {
  const [copied, setCopied] = useState(false);
  const embedUrl = getEmbedUrl(RESUME_GOOGLE_DRIVE_URL);
  const downloadUrl = getDownloadUrl(RESUME_GOOGLE_DRIVE_URL);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(RESUME_GOOGLE_DRIVE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-[1280px] mx-auto px-6 pt-28 md:pt-36 pb-16 font-sans min-h-[85vh]">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#f2f3f3] pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#22252a] tracking-tight mb-2">
            Curriculum Vitae
          </h1>
          <p className="text-base text-[#495057]">
            Frontend Developer & AI Researcher • Prince Patel
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#495057] bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {copied ? (
              <>
                <span className="text-green-600">✓</span> Link Copied
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy Drive Link
              </>
            )}
          </button>

          <a
            href={RESUME_GOOGLE_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#22252a] bg-gray-100 border border-gray-300 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in Google Drive
          </a>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#22252a] px-5 py-2.5 rounded-lg hover:bg-black transition-colors shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Google Drive Link Quick Setup Banner */}
      {/* <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-4 mb-8 text-sm text-amber-900 flex items-start gap-3">
        <svg
          className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div> */}

      {/* Embedded Resume Container */}
      <div className="w-full bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden flex flex-col">
        {/* Embedded Document Header / Bar */}
        <div className="bg-[#f9fafb] px-5 py-3 border-b border-[#e5e7eb] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span className="ml-3 text-xs font-semibold text-[#495057] tracking-wider uppercase">
              Prince_Patel_Resume.pdf
            </span>
          </div>
          <span className="text-xs text-[#6c757d]">PDF Document Preview</span>
        </div>

        {/* PDF Frame */}
        <div className="relative w-full h-[780px] bg-gray-100">
          <iframe
            src={embedUrl}
            title="Prince Patel Resume CV"
            className="w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>

      {/* Printable Overview / Highlights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#f2f3f3] pt-10">
        <div>
          <h3 className="text-lg font-bold text-[#22252a] mb-2">
            Technical Expertise
          </h3>
          <p className="text-sm text-[#495057] leading-relaxed">
            JavaScript (ES6+), React, Vite, Node.js, REST APIs, Tailwind CSS,
            Performance Optimization, Adaptive AI integration.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#22252a] mb-2">Education</h3>
          <p className="text-sm text-[#495057] leading-relaxed">
            <strong>B.E. Computer Science</strong>
            <br />
            Focused on Software Engineering, Real-Time Web Systems, and Machine
            Learning Fundamentals.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#22252a] mb-2">
            Research Focus
          </h3>
          <p className="text-sm text-[#495057] leading-relaxed">
            Adaptive AI Teaching Assistants, Low-Latency LLM interaction loops,
            and real-time student engagement analytics.
          </p>
        </div>
      </div>
    </main>
  );
};

export default CV;
