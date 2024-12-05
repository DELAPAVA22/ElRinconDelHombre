const database = [
  {
    MARCA: "BMW",
    MODELO: "M2 Competition",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "Coupe Deportivo",
    PUERTAS: 2,
    MOTOR: "3.0L, 6 cilindros en línea, TwinPower Turbo, 460 hp",
    PRECIO: "299,900,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FBMW%20COMPETITION.png?alt=media&token=f0cbb91d-559d-46a9-93e3-eda614170cbb",
  },
  {
    MARCA: "Volkswagen",
    MODELO: "Golf GTI",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "Hatchback Deportivo",
    PUERTAS: 5,
    MOTOR: "2.0L, 4 cilindros turbo, 241 hp",
    PRECIO: "175,000,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FVW%20GOLF%20GTI.png?alt=media&token=29628b78-e32e-46b5-b26b-b5b2988ff4dc",
  },
  {
    MARCA: "BMW",
    MODELO: "M3",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "Sedan Deportivo",
    PUERTAS: 4,
    MOTOR: "3.0L, 6 cilindros en línea, TwinPower Turbo, 503 hp",
    PRECIO: "410,000,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FBMW%20M3.png?alt=media&token=104dbb16-ace8-4265-aee8-dd878213eb6f",
  },
  {
    MARCA: "Porsche",
    MODELO: "Taycan",
    AÑO: 2024,
    COMBUSTIBLE: "100% electrico",
    TIPO: "Sedan Deportivo",
    PUERTAS: 4,
    MOTOR: "Motores eléctricos con hasta 469 hp en la versión base",
    PRECIO: "580,000,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FPORSCHE%20TAYCAN.png?alt=media&token=64304b98-5e77-4d86-b3ac-b6f0ca0b60ab",
  },
  {
    MARCA: "Cadillac",
    MODELO: "Escalade",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "SUV de Lujo",
    PUERTAS: 5,
    MOTOR: "V8 6.2L, 420 hp (modelo base) o 682 hp en la versión V-Series",
    PRECIO: "800.000.000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FCADILLAC%20ESCALADE.png?alt=media&token=8d20620d-295a-43ac-a8c8-5315047b6b93",
  },
  {
    MARCA: "Tesla",
    MODELO: "Cybertruck",
    AÑO: 2024,
    COMBUSTIBLE: "100% electrico",
    TIPO: "Pickup",
    PUERTAS: 4,
    MOTOR:
      "Versiones de un motor (RWD), dos motores (AWD), o tres motores (Cyberbeast) con hasta 845 hp.",
    PRECIO: "800.000.000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FTESLA%20CYBERTRUCK.png?alt=media&token=01660783-e738-40ba-981e-02b9bebc8957",
  },
  {
    MARCA: "Toyota",
    MODELO: "Supra",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "Deportivo",
    PUERTAS: 2,
    MOTOR: "3.0L, 6 cilindros turbo, 382 hp",
    PRECIO: "249,000,000",
    IMG: "https://www.pngplay.com/wp-content/uploads/13/Toyota-Supra-2020-PNG-Images-HD.png",
  },

  {
    MARCA: "Mercedes AMG",
    MODELO: "G63 Rocket",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "SUV",
    PUERTAS: 5,
    MOTOR: "8 biturbo 4.0L con más de 900 hp",
    PRECIO: "1,200,000,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FAMG%20G63%20ROCKET.png?alt=media&token=09366f6b-9a44-4194-bf69-0b261ff68ae3",
  },
  {
    MARCA: "Mercedes AMG",
    MODELO: "GT-R",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "Coupe Deportivo",
    PUERTAS: 2,
    MOTOR: "V8 biturbo de 4.0L con alrededor de 577 hp.",
    PRECIO: "600,000,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FMERCEDES%20GTR.png?alt=media&token=547b6e80-aed1-4799-8094-5368b291310d",
  },
  {
    MARCA: "Nissan",
    MODELO: "GT-R Nismo",
    AÑO: 2024,
    COMBUSTIBLE: "Gasolina",
    TIPO: "Coupe Deportivo",
    PUERTAS: 2,
    MOTOR: "V6 biturbo de 3.8L con 600 hp.",
    PRECIO: "880,000,000",
    IMG: "https://firebasestorage.googleapis.com/v0/b/bielo20.appspot.com/o/carros%2FNISSAN%20NISMO.png?alt=media&token=e3abdba3-0f19-496b-9b15-3b53f98784ef",
  },
];

const container = document.querySelector(".car-cards-container");

database.forEach((car) => {
  const carCard = document.createElement("div");
  carCard.classList.add("car-card");

  const carTitle = document.createElement("h2");
  carTitle.textContent = `${car.MARCA} ${car.MODELO}`;

  const carImage = document.createElement("img");
  carImage.src = car.IMG;
  carImage.alt = `${car.MARCA} ${car.MODELO}`;
  carImage.classList.add("car-image");

  const carDetails = document.createElement("ul");
  carDetails.classList.add("car-details");

  const details = [
    { label: "Marca", value: car.MARCA },
    { label: "Modelo", value: car.MODELO },
    { label: "Año", value: car.AÑO },
    { label: "Combustible", value: car.COMBUSTIBLE },
    { label: "Tipo de vehículo", value: car.TIPO },
    { label: "Puertas", value: car.PUERTAS },
    { label: "Motor", value: car.MOTOR },
    {
      label: "Precio",
      value: `COP $${Number(
        car.PRECIO.replace(/[^\d]/g, "")
      ).toLocaleString()}`,
    },
  ];

  details.forEach((detail) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
    carDetails.appendChild(li);
  });

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("btn-quote");
  addToCartBtn.textContent = "Agregar al Carrito";

  const buyBtn = document.createElement("button");
  buyBtn.classList.add("btn-info");
  buyBtn.textContent = "COMPRAR";

  actions.appendChild(addToCartBtn);
  actions.appendChild(buyBtn);

  carCard.appendChild(carTitle);
  carCard.appendChild(carImage);
  carCard.appendChild(carDetails);
  carCard.appendChild(actions);

  container.appendChild(carCard);
});
