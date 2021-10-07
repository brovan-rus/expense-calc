import { useCallback, useState, FocusEvent, ChangeEvent } from 'react';
import { formValidationErrorMessage } from './constants';

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidationStarted, setIsValidationStarted] = useState({});
  const [isValid, setIsValid] = useState(false);
  const nameRegEx = new RegExp(/[а-яёa-z-\s]/gi);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    setIsValidationStarted({ ...isValidationStarted, [name]: true });
  };

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    const form = target.closest('form');
    form === null ? setIsValid(false) : setIsValid(form.checkValidity());
    if (name === 'price' && !target.validationMessage) {
      setErrors({ ...errors, [name]: formValidationErrorMessage });
      setIsValid(false);
    }
    if (name === 'name' && !value.match(nameRegEx)) {
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

export default useForm;
