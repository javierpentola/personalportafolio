export const navContent = {
  name: {
    first: "JAVIER",
    middle: "GRACIA",
    last: "PEREZ",
  },
  menuItems: [
    { id: "home", label: "H▲ME" },
    {
      id: "curriculum",
      label: "CURR⚡CULUM",
      submenu: [
        { id: "education", label: "ISTRU×ZIONE" },
        { id: "resume", label: "CU×RRICULUM" },
        { id: "experience", label: "ES/PE/RIENZA" },
        { id: "github", label: "GIT=HUB" },
      ],
    },
    {
      id: "projects",
      label: "PRO_GETTI",
      submenu: [
        { id: "projects-design", label: "DE⚡IGN" },
        { id: "projects-software", label: "SOFT=WARE" },
        { id: "projects-studies", label: "STU×DI" },
      ],
    },
    { id: "contact", label: "CON+TATTO" },
  ],
}

export default navContent

