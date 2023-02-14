let teamMembers = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "angela-caroll-chief-editor.jpg"
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "walter-gordon-office-manager.jpg"
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "angela-lopez-social-media-manager.jpg"
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "scott-estrada-developer.jpg"
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "barbara-ramos-graphic-designer.jpg"
    }
  ];
  
   
  for (let i = 0; i < teamMembers.length; i++) {
    const soggettoCorrente = teamMembers[i]

    const nome = soggettoCorrente.name
    const role = soggettoCorrente.role
    const photo = soggettoCorrente.photo

    console.log(`Nome: ${nome} Impiego: ${role} pfp: ${photo}`)
  }

  const container = document.getElementById("container");
  for (const soggettoCorrente of teamMembers) {
  const memberDiv = document.createElement("div");
  memberDiv.innerHTML = `
    <h2>${soggettoCorrente.name}</h2>
    <p>Ruolo: ${soggettoCorrente.role}</p>
    <img src="${soggettoCorrente.photo}" alt="${soggettoCorrente.name}">
  `;
  container.appendChild(memberDiv);
}


  