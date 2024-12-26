function transformSkillsData(originalData) {
  // Group skills by title
  const groupedByTitle = originalData?.data?.reduce((acc, skill) => {
    if (!acc[skill.title]) {
      acc[skill.title] = [];
    }
    acc[skill.title].push({
      name: skill.name,
      image: skill.image,
    });
    return acc;
  }, {});

  // Convert to array format
  if (groupedByTitle) {
    return Object.entries(groupedByTitle).map(([title, skills]) => ({
      title,
      skills,
    }));
  }
}

export default transformSkillsData;
