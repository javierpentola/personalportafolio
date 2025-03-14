export const navContent = {
  name: {
    first: "哈维尔",
    middle: "格拉西亚",
    last: "佩雷斯",
  },
  menuItems: [
    { id: "home", label: "首▲页" },
    {
      id: "curriculum",
      label: "简⚡历",
      submenu: [
        { id: "education", label: "教×育" },
        { id: "resume", label: "简×历" },
        { id: "experience", label: "经/历" },
        { id: "github", label: "GIT=HUB" },
      ],
    },
    {
      id: "projects",
      label: "项_目",
      submenu: [
        { id: "projects-design", label: "设⚡计" },
        { id: "projects-software", label: "软=件" },
        { id: "projects-studies", label: "研×究" },
      ],
    },
    { id: "contact", label: "联+系" },
  ],
}

export default navContent

