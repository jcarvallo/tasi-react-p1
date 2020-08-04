const validateMaxLength = (maxLength, inputValue, initialValue) => {
  return initialValue.length + 1 > maxLength
    ? initialValue
    : `${initialValue}${inputValue}`;
};

const validateForm = (values) => {
  let requerido = {};

  for (let [key, value] of Object.entries(values)) {
    switch (key) {
      case "dni":
        if (value[0].length < value[1].minLength) {
          requerido[key] = "dni requerido";
        }
        break;
      case "clave":
        if (value[0].length < value[1].minLength) {
          requerido[key] = "clave requerida";
        }
        break;
      default:
        break;
    }
  }

  return !Object.keys(requerido).length ? false : true;
};

const validateTitleHeader=(path)=>{
  switch (path) {
    case '/':
      return { vista: "inicio", title: "Cajero Automático TASI" };
    default:
      return {}
  }

}

export { validateMaxLength, validateForm, validateTitleHeader };
