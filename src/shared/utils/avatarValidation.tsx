const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png"];

export const isValidAvatarFile = (file: File): any => {
  const fileExtension = file.name.split(".").pop()?.toLowerCase();
  return fileExtension && ALLOWED_EXTENSIONS.includes(fileExtension);
};