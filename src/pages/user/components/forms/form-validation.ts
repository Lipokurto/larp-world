export function charNameValidation(value: string, isRequired: boolean): string | undefined {
  const nameRegex = /[а-яёА-ЯЁ-]{0,98}[а-яёА-ЯЁ]$/;

  if (value?.length >= 100) {
    return 'Превышена максимальная длина в 100 символов';
  }

  if (isRequired && value?.length === 0) {
    return 'Обязательное поле для заполнения';
  }

  if (!nameRegex.test(value) && isRequired) {
    return 'Допускается только кириллица';
  }

  return undefined;
}

export function nameValidation(value: string, isRequired: boolean): string | undefined {
  const nameRegex = /^[А-ЯЁ][а-яёА-ЯЁ-]{0,98}[а-яёА-ЯЁ]$/;

  if (value?.length >= 100) {
    return 'Превышена максимальная длина в 100 символов';
  }

  if (isRequired && value?.length === 0) {
    return 'Обязательное поле для заполнения';
  }

  if (!nameRegex.test(value) && isRequired) {
    return 'Допускается только кириллица';
  }

  return undefined;
}

export function checkAgeDifference(date1: string, date2: string): number {
  const parsedDate1 = date1.split('.');
  const parsedDate2 = date2.split('.');

  return Number(parsedDate1[2]) - Number(parsedDate2[2]);
}
