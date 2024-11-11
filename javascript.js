
function downloadResume() {
    const link = document.createElement("a");
    link.href = "SUGANTH_RESUME[1].pdf";
    link.download = "SUGANTH_RESUME[1].pdf";
    link.click();
    alert("Downloading the resume...");
  }