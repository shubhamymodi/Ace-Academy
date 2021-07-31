export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
}

export const foodItems = [
  {
    img: "/img/physics.jpg",
    name: "Physics Full Course (Class 11 and 12)",
    section: "Physics",
    price: 5500
  },
  {
    
    name: "Electricity and Magnetism",
    img: "/img/electricity.jpg",
    section: "Physics",
    price: 1200
  },
  {
    name: "Nuclear Physics",
    img: "/img/nuclear.jpg",
    section: "Physics",
    price: 1200
  },
  {
    name: "Mechanics",
    img: "/img/mechanics.png",
    section: "Physics",
    price: 1200
  },
  {
    img: "/img/semiconductor.jpg",
    name: "Electronics and Semiconductors",
    section: "Physics",
    price: 800
  },
  {
    img: "/img/thermodynamics.jpg",
    name: "Thermodynamics",
    section: "Physics",
    price: 1100
  },

  {
    img: "/img/chemistry.jpg",
    name: "Chemistry Full Course (Class 11 and 12)",
    section: "Chemistry",
    price: 3200
  },  
  {
    img: "/img/organic.jpg",
    name: "Organic Chemistry",
    section: "Chemistry",
    price: 1400
  },
  { img: "/img/inorganic.jpg", name: "Inorganic Chemistry", section: "Chemistry", price: 1000 },
  {
    img: "/img/physical.jpeg",
    name: "Physical Chemistry",
    section: "Chemistry",
    price: 1000
  },

  {
    img: "/img/math.jpg",
    name: "Mathematics Full Course (Class 11 and 12)",
    section: "Mathematics",
    price: 6000
  },  
  {
    img: "/img/calculus.jpg",
    name: "Calculus",
    section: "Mathematics",
    price: 1200
  },
  {
    img: "/img/curves.png",
    name: "Curves",
    section: "Mathematics",
    price: 1200
  },
  {
    img: "/img/probability.png",
    name: "Probability, Statistics, P and C",
    section: "Mathematics",
    price: 1200
  },
  {
    img: "/img/complex.png",
    name: "Complex numbers and quadratic equations",
    section: "Mathematics",
    price: 1200
  },
  {
    img: "/img/vector.png",
    name: "Vector Algebra",
    section: "Mathematics",
    price: 1000
  },  
  {
    img: "/img/trignometry.jpg",
    name: "Trignometry and co-ordinate geometry",
    section: "Mathematics",
    price: 700
  },  
  {
    img: "/img/olympiad.jpg",
    name: "Olympiad SOF Exam",
    section: "Other Exams",
    price: 500
  },  
  {
    img: "/img/ntse.jfif",
    name: "NTSE Exam",
    section: "Other Exams",
    price: 500
  },  
  {
    img: "/img/kvpy.png",
    name: "KVPY Exam",
    section: "Other Exams",
    price: 500
  },    
 
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
