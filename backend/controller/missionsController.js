exports.getMissions = (req, res) => {
  const missions = [
    {
      name: "Chandrayaan-3",
      year: 2023,
      agency: "ISRO",
      description: "India's successful lunar landing mission."
    },
    {
      name: "Artemis I",
      year: 2022,
      agency: "NASA",
      description: "Lunar mission under NASA’s Artemis program."
    },
    {
      name: "Mars Orbiter Mission (MOM)",
      year: 2013,
      agency: "ISRO",
      description: "India's first interplanetary mission to Mars."
    }
  ];

  res.json(missions);
};
