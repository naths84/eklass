/**
 * Gets the subject names by id
 *
 * @param {object} classLevelData - must have a key 'subjects' that is an array
 * @param {object} data - All the data, must have the following keys: 'classLevels', 'Subjects'
 */
const getClassLevelSubjects = (classLevelData, data) =>
  classLevelData.subjects.map((subjectId) => ({
    id: subjectId,
    name: data.subjects[subjectId],
  }));

export default getClassLevelSubjects;
