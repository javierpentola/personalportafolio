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
        { id: "education", label: "EDU×CATION" },
        { id: "resume", label: "RE×SUME" },
        { id: "experience", label: "EX/PER/IENCE" },
        { id: "github", label: "GIT=HUB" },
      ],
    },
    {
      id: "projects",
      label: "PRO_JECTS",
      submenu: [
        { id: "projects-design", label: "DE⚡IGN" },
        { id: "projects-software", label: "SOFT=WARE" },
        { id: "projects-studies", label: "STU×DIES" },
      ],
    },
    { id: "contact", label: "CON+TACT" },
  ],
}

export default navContent

