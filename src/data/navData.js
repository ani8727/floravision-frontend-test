const navData = [
  {
    id: 1,
    label: "Home",
    path: "#home",
  },
  {
    id: 2,
    label: "Plants Type",
    path: "#plants",
    dropdown: true,
    items: [
      { name: "Indoor Plants", path: "#indoor" },
      { name: "Outdoor Plants", path: "#outdoor" },
      { name: "Succulents", path: "#succulents" },
      { name: "Flowering Plants", path: "#flowering" },
    ],
  },
  {
    id: 3,
    label: "More",
    path: "#more",
  },
  {
    id: 4,
    label: "Contact",
    path: "#footer",
  },
];

export default navData;