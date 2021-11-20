import * as Yup from "yup";
import { Product } from "src/types/Product";

export const handleValidation = () => {
  return Yup.object().shape({
    name: Yup.string().required("This field is required!").max(100),
    description: Yup.string().required("This field is required!").max(200),
    price: Yup.number().required("This field is required!").min(1)
  });
};
export const initialValues : Product = { name: "", description: "", price: 0 };