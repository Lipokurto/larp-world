type FullName = {
  lastName: string,
  firstName: string,
  middleName?: string,
}

export function getSeparateName(fullName: string): FullName {
  const parts = fullName.trim().split(/\s+/);

  return {
    lastName: parts[0],
    firstName: parts[1],
    middleName: parts[2],
  };
}