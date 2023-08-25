const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png"];

/**
   * Checks if the provided file is a valid avatar image file by comparing with ALLOWED_EXTENSIONS.
   * 
   * @param {File} file - The File object representing the uploaded image.
   * @returns {boolean} - True if the file is a valid avatar image, false otherwise.
*/

export const isValidAvatarFile = (file: File): any => {
  const fileExtension = file.name.split(".").pop()?.toLowerCase();
  return fileExtension && ALLOWED_EXTENSIONS.includes(fileExtension);
};