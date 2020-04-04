import getClassLevelSubjects from "./getClassLevelSubjects";

/**
 * Gets formatted classLevel data
 *
 * @param {string} classId
 * @param {object} data - All the data, must have the following keys: 'classLevels', 'Subjects'
 */
const getClassLevelData = (classId, data) => {
  const classLevelData = Object.values(data.classLevels).find(
    (classLevel) => classLevel.name === classId
  );

  const classLevelSubjects = getClassLevelSubjects(classLevelData, data);

  return {
    name: classId,
    subjects: classLevelSubjects,
  };
};

export default getClassLevelData;
