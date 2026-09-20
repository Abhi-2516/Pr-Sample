const pullRequests = {
  checkout: {
    title: "Improve checkout error states",
    description: "Make payment failures clearer and easier to recover from."
  },
  tokens: {
    title: "Refresh color tokens",
    description: "Align semantic colors with the new visual system."
  },
  analytics: {
    title: "Track onboarding completion",
    description: "Add the missing event for the welcome checklist."
  }
};

const toast = document.querySelector("#toast");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}

document.querySelectorAll(".pr-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelector(".pr-card.selected")?.classList.remove("selected");
    card.classList.add("selected");
    const selectedPr = pullRequests[card.dataset.pr];
    detailTitle.textContent = selectedPr.title;
    detailDescription.textContent = selectedPr.description;
  });
});

document.querySelector("#commentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#commentInput");
  const comment = input.value.trim();
  if (!comment) {
    showToast("Write a comment before sending.");
    input.focus();
    return;
  }
  input.value = "";
  showToast("Comment added to the review.");
});

document.querySelector("#replyButton").addEventListener("click", () => {
  const input = document.querySelector("#commentInput");
  input.value = "@Sam ";
  input.focus();
});

document.querySelector("#approveButton").addEventListener("click", () => {
  showToast("Review approved. The author has been notified.");
});

document.querySelector("#requestButton").addEventListener("click", () => {
  showToast("Changes requested. Add a comment with the details.");
});

document.querySelector("#filterButton").addEventListener("click", () => {
  showToast("All open reviews are currently displayed.");
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active")?.classList.remove("active");
    tab.classList.add("active");
    showToast(`${tab.textContent.replace(/\\d/g, "").trim()} selected.`);
  });
});
