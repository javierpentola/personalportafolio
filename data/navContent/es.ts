export const navContent = {
  name: {
    first: "JAVIER",
    middle: "GRACIA",
    last: "PEREZ",
  },
  menuItems: [
    { id: "home", label: "IN▲CIO" },
    {
      id: "curriculum",
      label: "CURR⚡CULUM",
      submenu: [
        { id: "education", label: "EDU×CACIÓN" },
        { id: "resume", label: "CU×RRÍCULO" },
        { id: "experience", label: "EX/PE/RIENCIA" },
        { id: "github", label: "GIT=HUB" },
      ],
    },
    {
      id: "projects",
      label: "PRO_YECTOS",
      submenu: [
        { id: "projects-design", label: "DI⚡EÑO" },
        { id: "projects-software", label: "SOFT=WARE" },
        { id: "projects-studies", label: "ESTU×DIOS" },
      ],
    },
    { id: "contact", label: "CON+TACTO" },
  ],
}

export default navContent

