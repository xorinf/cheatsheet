/**
 * Interactive CSS Box Model Laboratory Logic
 * Allows user to dynamically manipulate:
 * - margin
 * - border
 * - padding
 * - box-sizing property
 * and visually see how the layers react.
 */

const marginSlider = document.getElementById("marginSlider");
const borderSlider = document.getElementById("borderSlider");
const paddingSlider = document.getElementById("paddingSlider");
const boxSizingSelect = document.getElementById("boxSizingSelect");

const marginVal = document.getElementById("marginVal");
const borderVal = document.getElementById("borderVal");
const paddingVal = document.getElementById("paddingVal");

const marginLayer = document.getElementById("marginLayer");
const borderLayer = document.getElementById("borderLayer");
const paddingLayer = document.getElementById("paddingLayer");
const contentLayer = document.getElementById("contentLayer");

function updateBoxModel() {
  const m = marginSlider.value;
  const b = borderSlider.value;
  const p = paddingSlider.value;
  const sizing = boxSizingSelect.value;

  // Update text labels
  marginVal.textContent = `${m}px`;
  borderVal.textContent = `${b}px`;
  paddingVal.textContent = `${p}px`;

  // Apply styles directly to the visualizer layers
  marginLayer.style.padding = `${m}px`;
  borderLayer.style.borderWidth = `${b}px`;
  borderLayer.style.boxSizing = sizing;
  paddingLayer.style.padding = `${p}px`;
  paddingLayer.style.boxSizing = sizing;
  contentLayer.style.boxSizing = sizing;
}

// Attach event listeners
marginSlider.addEventListener("input", updateBoxModel);
borderSlider.addEventListener("input", updateBoxModel);
paddingSlider.addEventListener("input", updateBoxModel);
boxSizingSelect.addEventListener("change", updateBoxModel);

// Initial setup
updateBoxModel();
