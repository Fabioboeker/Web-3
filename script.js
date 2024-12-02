
const allColors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
  "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
  "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
  "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
  "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
  "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet",
  "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite",
  "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
  "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo",
  "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
  "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray",
  "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
  "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
  "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
  "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
  "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite",
  "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid",
  "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip",
  "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
  "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
  "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
  "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
  "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

let chosenColor;
let selectedColors = [];

function initializeGame() {
  selectedColors = [];
  while (selectedColors.length < 10) { // Ajustando para 10 cores
    const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    if (!selectedColors.includes(randomColor)) {
      selectedColors.push(randomColor);
    }
  }

  chosenColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];
  console.log("Cor escolhida (debug):", chosenColor);

  const colorSelect = document.getElementById("colorSelect");
  colorSelect.innerHTML = "";
  selectedColors.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
  feedback.style.color = "black";
  document.body.style.backgroundColor = "#f4f4f4";
}

function guessColor() {
  const userInput = document.getElementById("colorSelect").value;
  const feedback = document.getElementById("feedback");

  if (userInput === chosenColor) {
    document.body.style.backgroundColor = chosenColor;
    feedback.innerHTML = `Acertou! <button onclick="initializeGame()">Jogar Novamente</button>`;
    feedback.style.color = chosenColor === "White" ? "black" : "white";
  } else if (userInput.toLowerCase() < chosenColor.toLowerCase()) {
    feedback.textContent = "A cor está mais à frente na ordem alfabética.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "A cor está mais atrás na ordem alfabética.";
    feedback.style.color = "red";
  }
}

initializeGame();
