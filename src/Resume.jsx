import { FaFilePdf, FaDownload } from "react-icons/fa";

function ResumeCTA() {
  return (
    <div className="resume-card">
      <div className="resume-icon">
        <FaFilePdf />
      </div>

      <div className="resume-content">
        <h3>Want to know more?</h3>
        <p>
          View or download my resume to learn more about my experience,
          skills, and projects.
        </p>

        <div className="resume-actions">
          <a
            href="/Uday_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn primary"
          >
            View Resume
          </a>

          <a
            href="/Uday_Resume.pdf"
            download
            className="resume-btn secondary"
          >
            <FaDownload /> Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeCTA;
