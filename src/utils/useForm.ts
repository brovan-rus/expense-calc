import { useCallback, useState, FocusEvent, ChangeEvent } from 'react';
import { formValidationErrorMessage } from './constants';

function useForm() {
  interface IValues {
    [index: string]: string;
  }
  const [values, setValues] = useState<IValues>({});
  const [errors, setErrors] = useState({});
  const [isValidationStarted, setIsValidationStarted] = useState({});
  const [isValid, setIsValid] = useState(false);
  const nameRegEx = new RegExp(/[а-яёa-z-\s]/gi);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    setIsValidationStarted({ ...isValidationStarted, [name]: true });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    const form = target.closest('form');
    form === null ? setIsValid(false) : setIsValid(form.checkValidity());
    const digitsAfterPoint = value.includes('.') ? value.split('.')[1].length : 0;
    if (name === 'productPrice' && !target.validationMessage && !(digitsAfterPoint < 3)) {
      setErrors({ ...errors, [name]: formValidationErrorMessage });
      setIsValid(false);
    }
    if (name === 'productName' && !value.match(nameRegEx)) {
      setErrors({ ...errors, [name]: formValidationErrorMessage });
      setIsValid(false);
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValidationStarted = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidationStarted(newIsValidationStarted);
    },
    [setValues, setErrors, setIsValid, setIsValidationStarted],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    handleBlur,
    isValidationStarted,
  };
}

export { useForm };
