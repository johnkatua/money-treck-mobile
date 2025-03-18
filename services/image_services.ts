export const getProfileImage = (file: File | Blob | string) => {
  if (file && typeof file === 'string') {
    return file;
  }
  if (file && typeof file !== 'string') {
    return URL.createObjectURL(file);
  }

  return require('../assets/images/defaultMafia.jpg');
};
