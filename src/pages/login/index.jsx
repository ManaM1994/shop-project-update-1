import { useForm } from "react-hook-form";
import ButtonJsx from "../../components/Button.jsx";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../components/FormInput/index.jsx";
import { postData } from "../../services/apiClient/index.js";
import { Controller } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth.js";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

const validationStructure = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(validationStructure) });

  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onSubmit = async ({ username, password }) => {
    try {
      const response = await postData("auth/login", { username, password });
      startTransition(() => {
        setAuth(response);
      });

      reset({ username: "", password: "" });
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 mx-auto w-[600px] rounded-md bg-white backdrop-blur-md shadow-lg mt-6 p-2 items-center justify-center"
    >
      <label htmlFor="username">Login Form:</label>

      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <FormInput
            {...field}
            lable="username"
            type="text"
            errors={errors.username?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <FormInput
            {...field}
            lable="password"
            type="password"
            errors={errors.password?.message}
          />
        )}
      />

      <ButtonJsx disabled={isSubmitting} lable="signUp/signIn" />
    </form>
  );
};

export default Login;
