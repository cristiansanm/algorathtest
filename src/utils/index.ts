export const separateNameAndSurname = (
  name: string,
): { name: string; surname: string } => {
  if (!name) {
    return { name: '', surname: '' };
  }
  if (!name.includes(' ')) {
    return { name, surname: '' };
  }
  const [namePart, surnamePart] = name.split(' ');
  return { name: namePart, surname: surnamePart };
};
