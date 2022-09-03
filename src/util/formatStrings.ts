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
  if (!value) return value;

  const postalCode = value.replace(
    /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i,
    ""
  );
  if (postalCode.length < 3) {
    return postalCode;
  }
  if (postalCode.length < 7) {
    return `${postalCode.slice(0, 3)} ${postalCode.slice(3)}`;
  }
  return `${postalCode.slice(0, 3)} ${postalCode.slice(3, 6)}`;
  // const postalCode = value.match(
  //   /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i
  // );

  // if (postalCode !== null) {
  //   if (value === postalCode[0]) {
  //     return (value = `${postalCode[0].slice(0, 3)} ${postalCode[0].slice(
  //       3,
  //       6
  //     )}`.toUpperCase());
  //   }
  // } else {
  //   return value.toUpperCase();
  // }
  // return value;
};
