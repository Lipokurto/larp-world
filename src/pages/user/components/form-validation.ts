import dayjs from 'dayjs';

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

export function dateValidation(value: string): string | undefined {
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
  const PLAY_MOMENT = '04.10.2025';

  if (value.length === 0) {
    return 'Обязательное поле для заполнения';
  }

  if (!dateRegex.test(value)) {
    return 'Допускается формат даты ДД.ММ.ГГГГ';
  }

  const ageDifference = checkAgeDifference(PLAY_MOMENT, value);

  if (ageDifference < 18) {
    return 'На момент мероприятия вам должно быть не менее 18 лет';
  }

  return undefined;
}