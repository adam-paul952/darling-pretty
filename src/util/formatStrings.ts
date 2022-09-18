export const formatPhoneNumber = (value: string) => {
  if (!value) {
    return value;
  }

  const phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length < 4) {
    return phoneNumber;
  }

  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const formatPostalCode = (value: string) => {
  if (value === undefined) return value;

  const postalCode = value
    .toUpperCase()
    .replace(
      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ](\s)?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i,
      "$&"
    );

  if (postalCode.length < 3) {
    return postalCode;
  }

  if (postalCode.length < 6) {
    return `${postalCode.slice(0, 3)}${postalCode.slice(3)}`;
  }

  return `${postalCode.slice(0, 3)} ${postalCode.slice(3, 7)}`;
};
