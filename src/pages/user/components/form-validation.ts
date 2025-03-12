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

export function dateValidation(value: string): string | undefined {
  // TODO: Сделать валидацию даты на проверку 18 лет
  const nameRegex = /^[А-Я][а-яА-Я-]{0,98}[а-яА-Я]$/;

  if (nameRegex.test(value)) {
    return 'Допускается только кириллица';
  }

  if (value.length >= 100) {
    return 'Превышена максимальная длина в 100 символов';
  }

  if (value.length === 0) {
    return 'Обязательное поле для заполнения';
  }

  return undefined;
}